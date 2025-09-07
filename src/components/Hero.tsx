// src/components/Hero.js

import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { useEffect, useRef } from 'react';
import { FaTrophy, FaMedal, FaAward, FaUsers } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // --- NEW: Chess Piece Particle Class ---
    class ChessParticle {
      constructor() {
        // All chess pieces in Unicode
        const pieces = ['♔', '♕', '♖', '♗', '♘', '♙'];
        this.character = pieces[Math.floor(Math.random() * pieces.length)];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 15; // Larger size for visibility
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.05 + 0.02; // Very subtle
        this.baseOpacity = this.opacity;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
      }

      update() {
        // Drifting motion
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Mouse parallax effect
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        this.x += dx * 0.001;
        this.y += dy * 0.001;

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px "Segoe UI Symbol"`; // Font that supports chess symbols
        ctx.fillStyle = `hsl(var(--foreground))`;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillText(this.character, -this.size / 2, this.size / 2);
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width / 50); // Density based on screen width
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ChessParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => { resizeCanvas(); init(); });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background font-lato">
      {/* Canvas for animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-background/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 text-foreground"
            style={{ textShadow: '0 0 15px hsl(var(--primary)/0.3)' }} // Added glow effect
          >
            En Passant
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary mt-2">
              The ABESEC Chess Forum
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            The official chess club of ABESEC. We are a community of thinkers,
            strategists, and champions dedicated to mastering the art of chess.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group w-full sm:w-auto shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer">
                <LogIn className="w-5 h-5 mr-3" />
                Join The Club
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Social Proof / Achievements */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-muted-foreground">
            <p className="font-semibold text-foreground text-sm w-full sm:w-auto mb-2 sm:mb-0">
              Our Recent Wins:
            </p>
            <div className="flex items-center space-x-2">
              <FaTrophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Rann'25 Team 🏆
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMedal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                AKTU Zonals'24 Open 🥈
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUsers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                ICCC Spring'25 Teams 🥇🥈
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;