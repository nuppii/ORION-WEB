import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const outer = useRef();
  const inner = useRef();

  const [outerPos, innerPos] = useMemo(() => {
    const makeSphere = (count, radius, jitter) => {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const r = radius + (Math.random() - 0.5) * jitter;
        arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        arr[i * 3 + 1] = r * Math.cos(phi);
        arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      }
      return arr;
    };
    return [makeSphere(3200, 2.4, 0.25), makeSphere(1200, 1.5, 1.6)];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = state.mouse.x * 0.4;
    const my = state.mouse.y * 0.3;
    if (outer.current) {
      outer.current.rotation.y += (mx + t * 0.05 - outer.current.rotation.y) * 0.04;
      outer.current.rotation.x += (-my - outer.current.rotation.x) * 0.04;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.12 - mx * 0.6;
      inner.current.rotation.z = t * 0.04;
      const s = 1 + Math.sin(t * 0.8) * 0.04;
      inner.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <points ref={outer}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[outerPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.022} color="#2596be" transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <points ref={inner}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[innerPos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#48cae4" transparent opacity={0.6} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </>
  );
};

export const ParticleSphere = () => {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return null;
  return (
    <div className="absolute inset-0" data-testid="particle-sphere">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }} dpr={[1, 1.75]} gl={{ antialias: false, alpha: true }}>
          <Particles />
        </Canvas>
      </Suspense>
    </div>
  );
};
