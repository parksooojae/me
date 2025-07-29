import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

import './LiquidChrome.css';

export const LiquidChrome = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.05,
  amplitude = 0.3,
  frequencyX = 3,
  frequencyY = 3,
  interactive = false,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ 
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false
    });
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // Noise functions for randomization
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 0.0;
          
          for (int i = 0; i < 4; i++) {
              value += amplitude * noise(st);
              st *= 1.8;
              amplitude *= 0.6;
          }
          return value;
      }

      void main() {
          vec2 uv = (2.0 * vUv - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
          vec2 originalUv = uv;

          // Add time-based noise for evolving patterns (slower)
          float timeNoise = uTime * 0.03;
          vec2 noiseOffset = vec2(timeNoise, timeNoise * 0.7);

          // Create multiple layers of distortion with subtle noise
          for (float i = 1.0; i < 8.0; i++){
              float noiseScale = 0.8 + i * 0.2;
              float noiseX = fbm((uv + noiseOffset) * noiseScale);
              float noiseY = fbm((uv + noiseOffset + vec2(100.0, 50.0)) * noiseScale);
              
              // Mix traditional waves with noise for organic movement
              float waveX = cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              float waveY = cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
              
              // Much less noise blend for smoother look
              float blendFactor = 0.15; // Much less noise
              uv.x += (uAmplitude / i) * mix(waveX, (noiseX - 0.5) * 2.0, blendFactor);
              uv.y += (uAmplitude / i) * mix(waveY, (noiseY - 0.5) * 2.0, blendFactor);
              
              // Very subtle rotational noise
              float angle = fbm(uv * 0.5 + timeNoise) * 0.5;
              mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              uv = rotation * uv * 0.995 + uv * 0.005; // Much more subtle rotation
          }

          // Interactive mouse ripple effect with minimal noise
          vec2 diff = (vUv - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 15.0);
          float rippleNoise = fbm(vUv * 4.0 + uTime * 0.2) * 0.1;
          float ripple = sin(8.0 * dist - uTime * 3.0 + rippleNoise) * 0.02;
          uv += (diff / (dist + 0.001)) * ripple * falloff;

          // Smoother color calculation - black and white only
          vec3 basePattern = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          
          // No color variations - keep it black and white
          vec3 color = basePattern;
          
          // Add some smoothing to prevent harsh edges
          color = smoothstep(0.0, 1.0, color);
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const scale = Math.min(window.devicePixelRatio, 2); // Limit pixel ratio to prevent over-sampling
      renderer.setSize(
        container.offsetWidth * scale,
        container.offsetHeight * scale
      );
      const resUniform = program.uniforms.uResolution.value;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    function handleTouchMove(event) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = 1 - (touch.clientY - rect.top) / rect.height;
        const mouseUniform = program.uniforms.uMouse.value;
        mouseUniform[0] = x;
        mouseUniform[1] = y;
      }
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("touchmove", handleTouchMove);
    }

    let animationId;
    function update(t) {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    animationId = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div
      ref={containerRef}
      className="liquidChrome-container"
      {...props}
    />
  );
};

export default LiquidChrome; 