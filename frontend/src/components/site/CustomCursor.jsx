import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = -100, my = -100, rx = -100, ry = -100, raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target.closest("a, button, [data-hover], input, textarea");
      ringRef.current?.classList.toggle("is-hover", !!target);
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      if (ringRef.current) {
        const s = ringRef.current.offsetWidth / 2;
        ringRef.current.style.transform = `translate(${rx - s}px, ${ry - s}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};
