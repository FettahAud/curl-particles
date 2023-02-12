import { useEffect } from "react";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Face from "./Face.jsx";
import Sphere from "./Sphere.jsx";

export default function App() {
  const curtain = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      curtain.current.style.height = `${
        100 - (e.clientY / window.innerHeight) * 100
      }%`;
    });
    return () => {
      window.removeEventListener("mousemove");
    };
  });
  return (
    <>
      <div ref={curtain} className="black-half" style={{ height: "50%" }}></div>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 4],
        }}
      >
        <OrbitControls minDistance={3} maxDistance={5} />
        <Sphere />
      </Canvas>
    </>
  );
}
