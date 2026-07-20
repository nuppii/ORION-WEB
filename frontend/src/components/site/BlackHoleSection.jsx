import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion, useInView } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { scrollToId } from "./Navbar";
import { FINAL_CTA } from "./content";

const clamp01 = (v) => Math.min(1, Math.max(0, v));

const AccretionDisk = ({ progressRef }) => {
  const geomRef = useRef();
  const group = useRef();

  const { radii, angles, ys, colors, count } = useMemo(() => {
    const count = 11000;
    const radii = new Float32Array(count);
    const angles = new Float32Array(count);
    const ys = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const hot = new THREE.Color("#ffffff");
    const cyan = new THREE.Color("#48cae4");
    const deep = new THREE.Color("#155e80");
    for (let i = 0; i < count; i++) {
      const t = Math.pow(Math.random(), 1.8);
      radii[i] = 1.35 + t * 2.4;
      angles[i] = Math.random() * Math.PI * 2;
      ys[i] = (Math.random() - 0.5) * 0.05 * (1 + t * 1.6);
      const nt = (radii[i] - 1.35) / 2.4;
      const c = nt < 0.2 ? hot.clone().lerp(cyan, nt / 0.2) : cyan.clone().lerp(deep, (nt - 0.2) / 0.8);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { radii, angles, ys, colors, count };
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = Math.cos(angles[i]) * radii[i];
      arr[i * 3 + 1] = ys[i];
      arr[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
    }
    return arr;
  }, [angles, radii, ys, count]);

  useFrame((state, delta) => {
    const p = progressRef.current;
    const attr = geomRef.current?.attributes?.position;
    if (attr) {
      const arr = attr.array;
      const speedMul = 0.5 + p * 2.2;
      for (let i = 0; i < count; i++) {
        angles[i] += (delta * speedMul * 0.55) / Math.pow(radii[i], 1.5);
        arr[i * 3] = Math.cos(angles[i]) * radii[i];
        arr[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
      }
      attr.needsUpdate = true;
    }
    if (group.current) {
      group.current.rotation.z = 0.14 + state.pointer.x * 0.04;
      group.current.rotation.x = -0.32 + state.pointer.y * 0.05;
    }
    const cam = state.camera;
    const z = 13 - clamp01(p * 1.1) * 5.2;
    cam.position.lerp(new THREE.Vector3(state.pointer.x * 0.5, 2.2 - p * 1.0, z), 0.06);
    cam.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {/* event horizon */}
      <mesh>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      {/* photon ring */}
      <mesh>
        <torusGeometry args={[1.12, 0.015, 16, 128]} />
        <meshBasicMaterial color="#bfefff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.18, 0.02, 16, 128]} />
        <meshBasicMaterial color="#48cae4" transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {/* accretion disk */}
      <points>
        <bufferGeometry ref={geomRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.024} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
};

const Stars = () => {
  const pts = useMemo(() => {
    const arr = new Float32Array(1400 * 3);
    for (let i = 0; i < 1400; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 16 + Math.random() * 16;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi);
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pts, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#7dd3fc" transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const CTAButtons = () => (
  <div className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto">
    <Magnetic>
      <button data-testid="cta-follow-btn" className="btn-primary-orion" onClick={() => scrollToId("status")}>
        {FINAL_CTA.actions[0].label}
      </button>
    </Magnetic>
    <Magnetic>
      <button data-testid="cta-architecture-btn" className="btn-ghost-orion" onClick={() => scrollToId("architecture")}>
        {FINAL_CTA.actions[1].label}
      </button>
    </Magnetic>
    <Magnetic>
      <button data-testid="cta-status-btn" className="btn-ghost-orion" onClick={() => scrollToId("status")}>
        {FINAL_CTA.actions[2].label}
      </button>
    </Magnetic>
  </div>
);

export const BlackHoleSection = () => {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(containerRef, { margin: "600px 0px 600px 0px" });
  const progressRef = useRef(0);
  const [phase, setPhase] = useState(0); // 0 intro, 1..4 lines, 5 reveal
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
    if (v < 0.16) setPhase(0);
    else if (v < 0.6) setPhase(1 + Math.min(3, Math.floor(((v - 0.16) / 0.44) * 4)));
    else setPhase(5);
  });

  if (reduced) {
    return (
      <section id="cta" data-testid="cta-section" className="relative py-40 px-6 sm:px-12 text-center">
        <p className="text-[#94A3B8] max-w-xl mx-auto">{FINAL_CTA.intro}</p>
        <div className="mt-6 space-y-1">
          {FINAL_CTA.lines.map((l) => (
            <p key={l} className="font-heading font-bold text-2xl text-white">{l}</p>
          ))}
        </div>
        <h2 className="mt-10 font-heading font-bold text-5xl sm:text-7xl text-white">{FINAL_CTA.reveal}</h2>
        <p className="mt-4 font-mono-orion text-xs uppercase tracking-[0.25em] text-[#48cae4]">{FINAL_CTA.subtitle}</p>
        <CTAButtons />
      </section>
    );
  }

  return (
    <section id="cta" data-testid="cta-section" ref={containerRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          {inView && (
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 2.2, 13], fov: 55 }} dpr={[1, 1.6]} gl={{ antialias: false, alpha: true }}>
                <AccretionDisk progressRef={progressRef} />
                <Stars />
              </Canvas>
            </Suspense>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 42%, #020308 96%)" }} />

        <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.p
                key="intro"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
                data-testid="cta-intro"
                className="font-heading font-medium text-2xl sm:text-4xl text-center text-white/90 max-w-3xl leading-snug"
              >
                {FINAL_CTA.intro}
              </motion.p>
            )}
            {phase >= 1 && phase <= 4 && (
              <motion.p
                key={`line-${phase}`}
                initial={{ opacity: 0, scale: 1.15, y: 60, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.15, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`cta-line-${phase - 1}`}
                className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-center text-white max-w-4xl tracking-tight"
              >
                {FINAL_CTA.lines[phase - 1].split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-[#48cae4]">{FINAL_CTA.lines[phase - 1].split(" ").slice(-1)[0]}</span>
              </motion.p>
            )}
            {phase === 5 && (
              <motion.div
                key="reveal"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
                data-testid="cta-reveal"
              >
                <p className="font-mono-orion text-[11px] tracking-[0.35em] uppercase text-[#48cae4]/80 mb-6">Beyond the event horizon</p>
                <h2 className="font-heading font-bold text-6xl sm:text-8xl lg:text-9xl tracking-[-0.04em] text-white leading-none" style={{ textShadow: "0 0 80px rgba(72,202,228,0.35)" }}>
                  {FINAL_CTA.reveal}
                </h2>
                <p className="mt-6 font-mono-orion text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#cbd5e1]" style={{ textShadow: "0 2px 20px rgba(2,3,8,0.9), 0 0 8px rgba(2,3,8,0.9)" }}>{FINAL_CTA.subtitle}</p>
                <CTAButtons />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* phase progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={`h-[3px] w-8 transition-all duration-500 ${i <= phase ? "bg-[#48cae4]" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
