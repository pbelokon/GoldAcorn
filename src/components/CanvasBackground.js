"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


function ColorBackground() {
  const mat = useRef();
  const { size } = useThree();

  useFrame(() => {
    mat.current.uniforms.uResolution.value.set(
      size.width * window.devicePixelRatio,
      size.height * window.devicePixelRatio
    );
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        depthTest={false}
        depthWrite={false}
        uniforms={{
          uResolution: { value: new THREE.Vector2(1, 1) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `}
        fragmentShader={`
          #define PI 3.14159265358979

          varying vec2 vUv;
          uniform vec2 uResolution;

          void main() {
            vec2 fragCoord = vUv * uResolution;
            vec2 uv = (fragCoord - uResolution * 0.5) / min(uResolution.x, uResolution.y);

            float scale = 10.0;

            vec2  uvGrid    = floor(uv * scale);
            float uvYOffset = mod(uvGrid.x, 2.0) <= 0.0 ? 0.0 : 0.5;
            vec2  uvLocal   = fract(uv * scale + vec2(0.0, uvYOffset)) - vec2(0.0, 0.5);
            float dist      = 1e5;

            // below grids (both sides)
            for (float x = -1.0; x < 2.0; x += 2.0)
              dist = min(dist, distance(vec2(x, -1.0), uvLocal));

            // self grid
            const float WAVE_DISTANCE = 1.0;
            if (WAVE_DISTANCE < dist)
              dist = min(dist, distance(vec2(0.0, -0.5), uvLocal));

            // center grids (both sides)
            if (WAVE_DISTANCE < dist)
              for (float x = -1.0; x < 2.0; x += 2.0)
                dist = min(dist, distance(vec2(x, 0.0), uvLocal));

            const float STRIPES = 8.0;

            // moegi #7BA23F — two tones for the stripe bands
            vec3 moegiLight = vec3(0.52, 0.69, 0.28);
            vec3 moegiDark  = vec3(0.40, 0.56, 0.20);

            vec3 col = (0.0 < sin(dist * STRIPES * PI)) ? moegiLight : moegiDark;

            // vertical gradient (lighter top, darker bottom) matching the reference
            float uvYGradient = fragCoord.y / uResolution.y;
            col *= uvYGradient * 0.4 + 0.6;

            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function CanvasBackground() {
  return (
    <Canvas style={{ position: "fixed", inset: 0, zIndex: -1 }} dpr={[1, 1.5]}>
      <ColorBackground />
    </Canvas>
  );
}
