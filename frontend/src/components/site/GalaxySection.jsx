import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion, useInView } from "framer-motion";
import { ARCHITECTURE } from "./content";
import { FadeUp } from "./SplitReveal";

const smoothstep = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

const GalaxyPoints = ({ progressRef }) => {
  const group = useRef();
  const geomRef = useRef();

  const { target, scatter, colors, count } = useMemo(() => {
    const count = 9000;
    const target = new Float32Array(count * 3);
    const scatter = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const inner = new THREE.Color("#bfefff");
    const mid = new THREE.Color("#48cae4");
    const outer = new THREE.Color("#1b6f96");
    const branches = 5;
    const radius = 6;
    const spin = 1.15;
    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 1.6) * radius;
      const branch = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;
      const rand = () => Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.55 * (1 + r * 0.12);
      target[i * 3] = Math.cos(branch + spinAngle) * r + rand();
      target[i * 3 + 1] = rand() * 0.35;
      target[i * 3 + 2] = Math.sin(branch + spinAngle) * r + rand();
      // scattered start: big random sphere
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const sr = 7 + Math.random() * 8;
      scatter[i * 3] = sr * Math.sin(phi) * Math.cos(theta);
      scatter[i * 3 + 1] = sr * Math.cos(phi) * 0.6;
      scatter[i * 3 + 2] = sr * Math.sin(phi) * Math.sin(theta);
      const c = r / radius < 0.25 ? inner.clone().lerp(mid, r / radius / 0.25) : mid.clone().lerp(outer, (r / radius - 0.25) / 0.75);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { target, scatter, colors, count };
  }, []);

  const positions = useMemo(() => scatter.slice(), [scatter]);

  useFrame((state, delta) => {
    const p = progressRef.current;
    const t = smoothstep(clamp01(p / 0.28));
    const attr = geomRef.current?.attributes?.position;
    if (attr) {
      const arr = attr.array;
      for (let i = 0; i < count * 3; i++) arr[i] = scatter[i] + (target[i] - scatter[i]) * t;
      attr.needsUpdate = true;
    }
    if (group.current) {
      group.current.rotation.y += delta * (0.04 + p * 0.06);
      group.current.rotation.x = -0.15 + state.pointer.y * 0.05;
      group.current.rotation.z = state.pointer.x * 0.04;
    }
    // camera path: pull in as we scroll
    const cam = state.camera;
    const z = 10.5 - smoothstep(clamp01((p - 0.1) / 0.8)) * 4.5;
    const y = 4.2 - smoothstep(clamp01(p)) * 2.6;
    cam.position.lerp(new THREE.Vector3(state.pointer.x * 0.6, y, z), 0.06);
    cam.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry ref={geomRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      {/* galactic core glow */}
      <mesh>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshBasicMaterial color="#bfefff" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const LayerTicks = ({ active }) => (
  <div className="hidden md:flex flex-col gap-2 items-end" data-testid="galaxy-layer-ticks">
    {ARCHITECTURE.layers.map((l, i) => (
      <button key={l.name} className="group flex items-center gap-3" data-hover>
        <span
          className={`font-mono-orion text-[9px] tracking-[0.2em] uppercase transition-all duration-500 ${
            i === active ? "text-[#48cae4] opacity-100" : "text-[#94A3B8] opacity-40"
          }`}
        >
          {l.name.replace(" Layer", "")}
        </span>
        <span
          className={`h-px transition-all duration-500 ${i === active ? "w-10 bg-[#48cae4]" : "w-4 bg-white/20"}`}
          style={i === active ? { boxShadow: "0 0 8px #48cae4" } : {}}
        />
      </button>
    ))}
  </div>
);

export const GalaxySection = () => {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(containerRef, { margin: "600px 0px 600px 0px" });
  const progressRef = useRef(0);
  const [phase, setPhase] = useState(0); // 0 = intro, 1..9 = layers
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
    if (v < 0.14) setPhase(0);
    else setPhase(1 + Math.min(8, Math.floor(((v - 0.14) / 0.82) * 9)));
  });

  if (reduced) {
    return (
      <section id="architecture" data-testid="architecture-section" className="relative py-32 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-4">04 — {ARCHITECTURE.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl sm:text-6xl text-white mb-6">{ARCHITECTURE.title}</h2>
          <p className="text-[#94A3B8] max-w-2xl mb-16">{ARCHITECTURE.intro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {ARCHITECTURE.layers.map((l, i) => (
              <div key={l.name} className="bg-[#020308] p-8">
                <span className="font-mono-orion text-[10px] text-[#48cae4]/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-heading font-bold text-lg text-white">{l.name}</p>
                <p className="mt-2 text-sm text-[#94A3B8]">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const activeLayer = phase > 0 ? ARCHITECTURE.layers[phase - 1] : null;

  return (
    <section id="architecture" data-testid="architecture-section" ref={containerRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 3D galaxy */}
        <div className="absolute inset-0">
          {inView && (
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 4.2, 10.5], fov: 55 }} dpr={[1, 1.6]} gl={{ antialias: false, alpha: true }}>
                <GalaxyPoints progressRef={progressRef} />
              </Canvas>
            </Suspense>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, #020308 95%)" }} />

        {/* HUD frame */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 pointer-events-none">
          <div className="flex items-start justify-between pt-16">
            <div className="pointer-events-auto">
              <p className="font-mono-orion text-xs tracking-[0.3em] uppercase text-[#48cae4] mb-3 flex items-center gap-3">
                <span className="text-[#94A3B8]/40">04</span> {ARCHITECTURE.eyebrow}
              </p>
              <h2 data-testid="architecture-title" className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white max-w-2xl">
                {ARCHITECTURE.title}
              </h2>
            </div>
            <div className="pt-2 pointer-events-auto">
              <LayerTicks active={phase - 1} />
            </div>
          </div>

          <div className="pb-4 sm:pb-8">
            <AnimatePresence mode="wait">
              {phase === 0 ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-xl"
                  data-testid="galaxy-intro"
                >
                  <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">{ARCHITECTURE.intro}</p>
                  <p className="mt-4 font-mono-orion text-[10px] tracking-[0.3em] uppercase text-[#48cae4]/70 animate-pulse">Keep scrolling to traverse the network ↓</p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeLayer.name}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl"
                  data-testid="galaxy-layer-card"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-orion text-xs text-[#48cae4] tracking-[0.25em]">
                      {String(phase).padStart(2, "0")} / {String(ARCHITECTURE.layers.length).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 max-w-[80px] bg-[rgba(72,202,228,0.4)]" />
                  </div>
                  <p className="mt-3 font-heading font-bold text-3xl sm:text-5xl tracking-tight text-white">
                    {activeLayer.name.replace(" Layer", "")}
                    <span className="text-[#48cae4]"> Layer</span>
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-xl">{activeLayer.text}</p>
                  {/* progress bar */}
                  <div className="mt-6 flex gap-1.5">
                    {ARCHITECTURE.layers.map((_, i) => (
                      <span
                        key={i}
                        className={`h-[3px] flex-1 max-w-[40px] transition-all duration-500 ${i < phase ? "bg-[#48cae4]" : "bg-white/10"}`}
                        style={i === phase - 1 ? { boxShadow: "0 0 10px rgba(72,202,228,0.8)" } : {}}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* corner HUD deco */}
        <div className="absolute top-24 left-6 sm:left-12 w-8 h-8 border-l border-t border-[rgba(72,202,228,0.25)] pointer-events-none" />
        <div className="absolute bottom-6 right-6 sm:right-12 w-8 h-8 border-r border-b border-[rgba(72,202,228,0.25)] pointer-events-none" />
      </div>
    </section>
  );
};
