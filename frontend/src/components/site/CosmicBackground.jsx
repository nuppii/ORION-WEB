import { useEffect, useRef } from "react";

// Fixed 2D-canvas cosmic background: drifting stardust + occasional shooting stars.
// Sits behind all sections (z-index 0) so the cosmic journey feels continuous.
export const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w, h, dpr;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // stardust
    const DUST = 110;
    const dust = Array.from({ length: DUST }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.2,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.04,
      tw: Math.random() * Math.PI * 2,
      ts: 0.008 + Math.random() * 0.02,
      hue: Math.random() < 0.75 ? "72,202,228" : "148,163,184",
    }));

    // shooting stars
    let meteors = [];
    let nextMeteor = performance.now() + 1800 + Math.random() * 3000;
    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5;
      const angle = (25 + Math.random() * 20) * (Math.PI / 180);
      const speed = 9 + Math.random() * 7;
      meteors.push({
        x: fromLeft ? -60 : Math.random() * w * 0.9,
        y: fromLeft ? Math.random() * h * 0.45 : -40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 55 + Math.random() * 30,
        len: 90 + Math.random() * 110,
      });
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      dust.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.hue},0.35)`;
        ctx.fill();
      });
    };

    if (reduced) {
      drawStatic();
      return () => window.removeEventListener("resize", resize);
    }

    let raf;
    const loop = (now) => {
      ctx.clearRect(0, 0, w, h);

      // dust
      for (const d of dust) {
        d.x += d.vx;
        d.y += d.vy;
        d.tw += d.ts;
        if (d.x < -5) d.x = w + 5;
        if (d.x > w + 5) d.x = -5;
        if (d.y < -5) d.y = h + 5;
        if (d.y > h + 5) d.y = -5;
        const a = 0.14 + Math.abs(Math.sin(d.tw)) * 0.3;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.hue},${a})`;
        ctx.fill();
      }

      // meteors
      if (now > nextMeteor && meteors.length < 2) {
        spawnMeteor();
        nextMeteor = now + 2600 + Math.random() * 4800;
      }
      meteors = meteors.filter((m) => m.life < m.maxLife && m.x < w + 200 && m.y < h + 200);
      for (const m of meteors) {
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        const fade = Math.sin((m.life / m.maxLife) * Math.PI);
        const nx = m.vx / Math.hypot(m.vx, m.vy);
        const ny = m.vy / Math.hypot(m.vx, m.vy);
        const tx = m.x - nx * m.len;
        const ty = m.y - ny * m.len;
        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
        grad.addColorStop(0, `rgba(191,239,255,${0.9 * fade})`);
        grad.addColorStop(0.3, `rgba(72,202,228,${0.5 * fade})`);
        grad.addColorStop(1, "rgba(72,202,228,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        // head glow
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223,247,255,${fade})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="cosmic-background"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  );
};
