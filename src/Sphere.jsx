import vertex from "./shaders/meshShaders/vertex";
import fragment from "./shaders/meshShaders/fragment";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere() {
  const points = useRef();
  const uniforms = useMemo(() => ({
    time: { value: 0 },
  }));
  useFrame(({ clock }) => {
    points.current.material.uniforms.time.value = clock.elapsedTime;
  });
  return (
    <points rotation-y={-80} ref={points}>
      <icosahedronGeometry args={[1, 100]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </points>
  );
}
