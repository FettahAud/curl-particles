import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import vertex from "./shaders/meshShaders/vertex";
import fragment from "./shaders/meshShaders/fragment";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function Face() {
  const modal = useGLTF("../assets/human_head/head.glb");
  const points = useRef();
  const uniforms = useMemo(() => ({
    time: { value: 0 },
  }));
  useFrame(({ clock }) => {
    points.current.material.uniforms.time.value = clock.elapsedTime;
  });

  return (
    <points
      rotation-y={-80}
      ref={points}
      geometry={modal.scene.children[0].geometry}
    >
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </points>
  );
}
