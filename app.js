const canvas = document.querySelector("#networkCanvas");
const ctx = canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let width = 0;
let height = 0;
let nodes = [];

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = canvas.width = Math.floor(window.innerWidth * ratio);
  height = canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  const count = Math.min(78, Math.max(34, Math.floor(window.innerWidth * window.innerHeight / 18000)));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.2 * ratio,
    vy: (Math.random() - 0.5) * 0.2 * ratio,
    radius: (index % 5 === 0 ? 2.2 : 1.35) * ratio,
    phase: Math.random() * Math.PI * 2
  }));
}

function drawNetwork(time = 0) {
  ctx.clearRect(0, 0, width, height);

  nodes.forEach((node, index) => {
    if (!prefersReducedMotion) {
      node.x += node.vx + Math.sin(time * 0.00032 + node.phase) * 0.08;
      node.y += node.vy + Math.cos(time * 0.00028 + node.phase) * 0.08;
    }

    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;

    for (let next = index + 1; next < nodes.length; next++) {
      const target = nodes[next];
      const distance = Math.hypot(node.x - target.x, node.y - target.y);
      const limit = 150 * (window.devicePixelRatio || 1);

      if (distance < limit) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(89, 221, 255, ${0.15 - distance / limit * 0.15})`;
        ctx.lineWidth = Math.max(1, window.devicePixelRatio || 1);
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.fillStyle = "rgba(114, 255, 217, 0.62)";
    ctx.shadowColor = "rgba(89, 221, 255, 0.9)";
    ctx.shadowBlur = 18 * (window.devicePixelRatio || 1);
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  if (!prefersReducedMotion) {
    requestAnimationFrame(drawNetwork);
  }
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawNetwork();
revealOnScroll();
