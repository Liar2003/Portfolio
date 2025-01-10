import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Firework = () => {
  const mode = useSelector((state) => state.theme.mode);
  const canvasRef = useRef(null);
  const duration = 8000; // Duration of each animation cycle
  const str = ["WELCOME"]; // Text to display
  let particles, chars, ctx, w, h, current;
  let trails = [];
  let explosions = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    initializeCanvas();
    window.addEventListener("resize", initializeCanvas);

    let animationFrame;
    const startAnimation = (time) => {
      if (Math.random() < 0.03) {
        trails.push(generateFirework()); // Add new firework trail
      }
     
      ctx.fillStyle =
        mode === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgb(243 ,244, 246, 0.2)";

      //ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      //ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Fading trail effect
      ctx.fillRect(0, 0, w, h);

      // Update trails
      trails = trails.filter((trail) => animateTrail(trail, time));

      // Update explosions
      updateExplosions(time);

      // Existing character animations
      makeChars(time);
      chars.forEach((pts, i) => firework(time, i, pts));

      animationFrame = requestAnimationFrame(startAnimation);
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", initializeCanvas);
    };
  }, [mode]);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = w < 400 ? 50 : 100;
    chars = [];
    current = null;
  };

  const generateFirework = () => {
    const startX = Math.random() * w; // Random horizontal position at the bottom
    const startY = h; // Start from the bottom of the screen
    const targetX = startX; // Target remains directly above the starting position
    const targetY = Math.random() * (h * 0.8); // Random target y-position (top half of the screen)
    return { startX, startY, targetX, targetY, startTime: performance.now() };
  };

  const animateTrail = (trail, time) => {
    const { startX, startY, targetX, targetY, startTime } = trail;
    const duration = 3000; // Duration for the trail to reach the target
    const elapsed = time - startTime;

    if (elapsed > duration) {
      // Trigger explosion
      const explosionParticles = [];
      for (let i = 0; i < particles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        explosionParticles.push({
          x: targetX,
          y: targetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        });
      }
      explosions.push({ particles: explosionParticles, startTime: time });
      return false; // Remove the trail
    }

    const progress = elapsed / duration;
    const x = startX + (targetX - startX) * easeOutQuad(progress);
    const y = startY + (targetY - startY) * easeOutQuad(progress);

    // Draw the trail
    ctx.fillStyle = `hsl(${progress * 360}, 80%, 60%)`;
    circle(x, y, 2);
    return true; // Keep the trail
  };

  const updateExplosions = (time) => {
    explosions.forEach((explosion, index) => {
      const { particles, startTime } = explosion;
      const elapsed = time - startTime;
      const duration = 1000; // Duration of the explosion
      if (elapsed > duration) {
        explosions.splice(index, 1); // Remove completed explosions
        return;
      }

      const progress = elapsed / duration;
      ctx.fillStyle = `hsl(${progress * 360}, 80%, 60%)`;
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98; // Slow down over time
        particle.vy *= 0.98;
        circle(particle.x, particle.y, 2);
      });
    });
  };

  const makeChar = (c) => {
    const size = w < 400 ? 150 : 250;
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = tmpCanvas.height = size;
    const tmpCtx = tmpCanvas.getContext("2d");
    tmpCtx.font = `bold ${size}px Arial`;
    tmpCtx.fillStyle = "white";
    tmpCtx.textBaseline = "middle";
    tmpCtx.textAlign = "center";
    tmpCtx.fillText(c, size / 2, size / 2);

    const imageData = tmpCtx.getImageData(0, 0, size, size);
    const charParticles = [];
    while (charParticles.length < particles) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const offset = (Math.floor(y) * size + Math.floor(x)) * 4;
      if (imageData.data[offset] > 0) {
        charParticles.push([x - size / 2, y - size / 2]);
      }
    }
    return charParticles;
  };

  const makeChars = (time) => {
    const actual = Math.floor(time / duration) % str.length;
    if (current === actual) return;
    current = actual;
    chars = [...str[actual]].map(makeChar);
  };

  const firework = (time, i, pts) => {
    const localTime = (time - i * 200) % duration;
    const progress = localTime / duration;

    const dx = ((i + 1) * w) / (chars.length + 1);
    const dy = h * 0.3; // Explosion point near the top

    if (progress < 0.3) {
      rocket(dx, dy, progress / 0.3); // Normalize progress for rocket phase
    } else {
      normalExplosion(pts, dx, dy, (progress - 0.3) / 0.7); // Normal explosion
    }
  };

  const rocket = (x, targetY, t) => {
    const y = h - (h - targetY) * easeOutQuad(t); // Smooth ascent to targetY
    const size = 3 - 2 * t; // Shrink rocket as it ascends
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
    gradient.addColorStop(0, `hsl(${t * 360}, 80%, 60%)`);
    gradient.addColorStop(1, `hsl(${(t * 360 + 180) % 360}, 80%, 40%)`);
    ctx.fillStyle = gradient;
    circle(x, y, Math.max(0.1, size));
  };

  const normalExplosion = (pts, x, y, t) => {
    const expand = Math.min(1, Math.max(0, t));
    const radius = 1 + expand * 1; // Reduced explosion particle size

    ctx.fillStyle = `hsl(${expand * 360}, 80%, 60%)`;
    const explosionScale = 0.7; // Control the explosion width
    pts.forEach(([px, py]) => {
      circle(
        x + px * expand * explosionScale,
        y + py * expand * explosionScale,
        Math.max(0.1, radius)
      );
    });
  };

  const easeOutQuad = (t) => t * (2 - t); // Easing function for smooth motion

  const circle = (x, y, r) => {
    if (r <= 0) return; // Prevent negative radius error
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default Firework;
