import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion, useInView } from "framer-motion";
import { useContent } from "./i18n";

const ORBITS = [2.3, 3.2, 4.1, 5.0, 5.9];
const SIZES = [0.3, 0.24, 0.2, 0.22, 0.18];
const SPEEDS = [0.32, 0.24, 0.19, 0.15, 0.12];
const OFFSETS = [0.4, 2.2, 4.1, 1.2, 5.3];

const Planet = ({ index, activeRef, color }) => {
  const group = useRef();
  const mesh = useRef();
  const halo = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const angle = OFFSETS[index] + t * SPEEDS[index];
    const r = ORBITS[index];
    if (group.current) group.current.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    const isActive = activeRef.current === index;
    if (mesh.current) {
      const targetScale = isActive ? 1.9 : 1;
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
      mesh.current.rotation.y += delta * 0.6;
    }
    if (halo.current) {
      halo.current.material.opacity += (((isActive ? 0.45 : 0.0) - halo.current.material.opacity)) * 0.08;
      const hs = isActive ? 3.2 : 1.5;
      halo.current.scale.lerp(new THREE.Vector3(hs, hs, hs), 0.08);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <sphereGeometry args={[SIZES[index], 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} roughness={0.4} />
      </mesh>
      <mesh ref={halo}>
        <sphereGeometry args={[SIZES[index], 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

const SolarScene = ({ activeRef, progressRef, items }) => {
  const stars = useMemo(() => {
    const arr = new Float32Array(1600 * 3);
    for (let i = 0; i < 1600; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 14 + Math.random() * 14;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi);
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  const sunHalo = useRef();

  useFrame((state) => {
    const p = progressRef.current;
    if (sunHalo.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.08;
      sunHalo.current.scale.set(s, s, s);
    }
    const cam = state.camera;
    const orbit = state.clock.elapsedTime * 0.02 + p * 1.2;
    const radius = 9.5 - p * 1.5;
    cam.position.lerp(new THREE.Vector3(Math.sin(orbit) * radius * 0.35 + state.pointer.x, 4.6 - p * 1.2 + state.pointer.y * 0.4, radius), 0.05);
    cam.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 0, 0]} intensity={22} color="#bfefff" decay={1.6} />
      {/* sun */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#dff7ff" />
      </mesh>
      <mesh ref={sunHalo}>
        <sphereGeometry args={[0.95, 24, 24]} />
        <meshBasicMaterial color="#48cae4" transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* orbit rings */}
      {ORBITS.map((r, i) => (
        <mesh key={r} rotation-x={-Math.PI / 2}>
          <ringGeometry args={[r - 0.008, r + 0.008, 160]} />
          <meshBasicMaterial color="#2596be" side={THREE.DoubleSide} transparent opacity={0.28} depthWrite={false} />
        </mesh>
      ))}
      {items.map((s, i) => (
        <Planet key={s.name} index={i} activeRef={activeRef} color={s.color} />
      ))}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[stars, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#7dd3fc" transparent opacity={0.5} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </>
  );
};

export const SolarSection = () => {
  const { SERVICES, UI } = useContent();
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(containerRef, { margin: "600px 0px 600px 0px" });
  const progressRef = useRef(0);
  const activeRef = useRef(-1);
  const [active, setActive] = useState(-1);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
    const idx = v < 0.1 ? -1 : Math.min(4, Math.floor(((v - 0.1) / 0.88) * 5));
    activeRef.current = idx;
    setActive(idx);
  });

  if (reduced) {
    return (
      <section id="integrations" data-testid="integrations-section" className="relative py-32 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4">06 — {SERVICES.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl sm:text-6xl text-white mb-6">{SERVICES.title}</h2>
          <p className="text-[#94A3B8] max-w-2xl mb-16">{SERVICES.intro}</p>
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
            {SERVICES.items.map((s) => (
              <div key={s.name} className="bg-[#020308] p-8">
                <p className="font-heading font-bold text-lg text-white">{s.name}</p>
                <p className="mt-2 text-sm text-[#94A3B8]">{s.text}</p>
                <p className="mt-3 text-xs text-[#94A3B8]/70">{s.list.join(" · ")}</p>
                {s.note && <p className="mt-3 text-xs text-[#f59e0b]/80">{s.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const service = active >= 0 ? SERVICES.items[active] : null;

  return (
    <section id="integrations" data-testid="integrations-section" ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          {inView && (
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 4.6, 9.5], fov: 55 }} dpr={[1, 1.6]} gl={{ antialias: false, alpha: true }}>
                <SolarScene activeRef={activeRef} progressRef={progressRef} items={SERVICES.items} />
              </Canvas>
            </Suspense>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 45%, #020308 96%)" }} />

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 pointer-events-none">
          <div className="flex items-start justify-between pt-16">
            <div className="pointer-events-auto">
              <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-3 flex items-center gap-3">
                <span className="text-[#94A3B8]/40">06</span> {SERVICES.eyebrow}
              </p>
              <h2 data-testid="integrations-title" className="font-heading font-bold text-3xl sm:text-5xl tracking-tight leading-[1.05] text-white max-w-2xl">
                {SERVICES.title}
              </h2>
            </div>
            <div className="hidden md:flex flex-col gap-2 items-end pt-2 pointer-events-auto" data-testid="solar-service-ticks">
              {SERVICES.items.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className={`font-mono-orion text-[9px] tracking-[0.2em] uppercase transition-all duration-500 ${i === active ? "opacity-100" : "text-[#94A3B8] opacity-40"}`} style={i === active ? { color: s.color } : {}}>
                    {s.short}
                  </span>
                  <span className={`h-px transition-all duration-500 ${i === active ? "w-10" : "w-4 bg-white/20"}`} style={i === active ? { background: s.color, boxShadow: `0 0 8px ${s.color}` } : {}} />
                </div>
              ))}
            </div>
          </div>

          <div className="pb-4 sm:pb-8">
            <AnimatePresence mode="wait">
              {active === -1 ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-xl"
                  data-testid="solar-intro"
                >
                  <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">{SERVICES.intro}</p>
                  <p className="mt-4 font-mono-orion text-[10px] tracking-[0.3em] uppercase text-[#48cae4]/70 animate-pulse">{UI.keepScrollSolar}</p>
                </motion.div>
              ) : (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl pointer-events-auto"
                  data-testid="solar-service-card"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-orion text-xs tracking-[0.25em]" style={{ color: service.color }}>
                      {String(active + 1).padStart(2, "0")} / {String(SERVICES.items.length).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 max-w-[80px]" style={{ background: service.color, opacity: 0.5 }} />
                  </div>
                  <p className="mt-3 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white">{service.name}</p>
                  <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-xl">{service.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2 max-w-xl">
                    {service.list.map((f, i) => (
                      <motion.span
                        key={f}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="font-mono-orion text-[9px] sm:text-[10px] tracking-[0.08em] uppercase px-3 py-1.5 border text-[#cbd5e1]"
                        style={{ borderColor: `${service.color}44` }}
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                  {service.note && <p className="mt-4 font-mono-orion text-[10px] tracking-[0.1em] uppercase text-[#f59e0b]/70">⚠ {service.note}</p>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute top-24 left-6 sm:left-12 w-8 h-8 border-l border-t border-[rgba(72,202,228,0.25)] pointer-events-none" />
        <div className="absolute bottom-6 right-6 sm:right-12 w-8 h-8 border-r border-b border-[rgba(72,202,228,0.25)] pointer-events-none" />
      </div>
    </section>
  );
};
