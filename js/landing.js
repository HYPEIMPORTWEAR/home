/* =========================================
   LANDING PAGE SCRIPT
   Minimal script for the landing page with effects
   ========================================= */

// Custom Cursor Logic
function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    if (!dot || !outline) return;

    // Movement
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline follows with slight delay
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover Effects
    const interactables = document.querySelectorAll('a, button, .category-card, input, label');

    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Click Animation
    window.addEventListener('mousedown', () => {
        outline.classList.add('clicking');
    });

    window.addEventListener('mouseup', () => {
        outline.classList.remove('clicking');
    });
}

// Ripple Effect
function initRipple() {
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';

        // Size of the ripple
        const size = 100;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - size / 2}px`;
        ripple.style.top = `${e.clientY - size / 2}px`;

        document.body.appendChild(ripple);

        // Remove after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Background Particles (Charged & Reactive)
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    function setSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setSize();

    let particlesArray = [];
    // Adjust density based on screen size (Increased for better density)
    const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 5000), 400);

    let mouse = {
        x: null,
        y: null,
        radius: 180 // Repel radius
    }

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;

            // Random initial velocity (Further reduced for a cinematic look)
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;

            this.color = '#ccff00'; // Primary neon color
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204, 255, 0, ${this.opacity})`;
            ctx.fill();
        }

        update() {
            // Random Brownian-like motion (Reduced Jitter for smoothness)
            this.vx += (Math.random() - 0.5) * 0.015;
            this.vy += (Math.random() - 0.5) * 0.015;

            // Cap the velocity (Stricter limit for calm motion)
            const speedLimit = 0.6;
            this.vx = Math.max(Math.min(this.vx, speedLimit), -speedLimit);
            this.vy = Math.max(Math.min(this.vy, speedLimit), -speedLimit);

            // Cursor Repulsion
            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);

                    // Push away
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                }
            }

            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges with friction
            if (this.x < 0) {
                this.x = 0;
                this.vx *= -0.8;
            } else if (this.x > canvas.width) {
                this.x = canvas.width;
                this.vx *= -0.8;
            }

            if (this.y < 0) {
                this.y = 0;
                this.vy *= -0.8;
            } else if (this.y > canvas.height) {
                this.y = canvas.height;
                this.vy *= -0.8;
            }

            this.draw();
        }
    }

    function createParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Reset shadow for most operations to keep it fast
        ctx.shadowBlur = 0;

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        setSize();
        createParticles();
    });

    createParticles();
    animate();
}

// Back to Top Button
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initRipple();
    initParticles();
    initBackToTop();
});

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable common developer tool keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
});
