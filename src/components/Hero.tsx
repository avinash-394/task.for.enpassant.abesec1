import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, Trophy, Medal, Users } from "lucide-react";
import { useEffect, useRef } from 'react';

// Note: The custom icons (Discord, Whatsapp) are no longer needed
// and have been replaced with icons from lucide-react.

const Hero = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.maxOpacity = this.opacity;
        this.color = this.getRandomColor();
        this.originalX = this.x;
        this.originalY = this.y;
        this.angle = Math.random() * Math.PI * 2;
        this.drift = Math.random() * 0.02 + 0.01;
        this.pulseSpeed = Math.random() * 0.015 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }
      
      // UPDATED: New color palette for the chess club theme
      getRandomColor() {
        const colors = [
          'rgba(232, 73, 30, ',   // Primary Orange: hsl(14 82% 51%)
          'rgba(245, 245, 245, ', // Off-White
          'rgba(239, 103, 58, ',  // Lighter Orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.drift;
        this.pulsePhase += this.pulseSpeed;
        
        const floatX = Math.sin(this.angle) * 20;
        const floatY = Math.cos(this.angle * 0.7) * 15;
        
        this.x = this.originalX + floatX + this.speedX;
        this.y = this.originalY + floatY + this.speedY;
        
        this.opacity = this.maxOpacity + Math.sin(this.pulsePhase) * 0.05;

        // Wrap around edges
        if (this.x < -20) { this.x = canvas.width + 20; this.originalX = this.x; }
        if (this.x > canvas.width + 20) { this.x = -20; this.originalX = this.x; }
        if (this.y < -20) { this.y = canvas.height + 20; this.originalY = this.y; }
        if (this.y > canvas.height + 20) { this.y = -20; this.originalY = this.y; }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x -= dx * force * 0.015;
          this.y -= dy * force * 0.015;
          this.opacity = Math.min(this.maxOpacity * 2, this.opacity + force * 0.2);
          this.size = Math.min(4, this.size + force * 1);
        } else {
          this.size = Math.max(1, this.size - 0.03);
        }
      }

      draw() {
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color + this.opacity + ')';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
        
        ctx.restore();
      }
    }

    const initElements = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resizeCanvas();
    initElements();
    animate();

    window.addEventListener('resize', () => { resizeCanvas(); initElements(); });
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background font-lato">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 text-foreground">
            En Passant
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary mt-2">The ABESEC Chess Forum</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            The official chess club of ABESEC. We are a community of thinkers, strategists, and champions dedicated to mastering the art of chess.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group w-full sm:w-auto"
            >
              <a href="https://www.chess.com/club/en-passant-abesec">
                <LogIn className="w-5 h-5 mr-3" />Join The Club
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
          </div>

          {/* Social Proof / Achievements */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-muted-foreground">
            <p className="font-semibold text-foreground text-sm w-full sm:w-auto mb-2 sm:mb-0">Our Recent Wins:</p>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Rann'25 Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Medal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AKTU Zonals'24 Open</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">ICCC Spring'25 Teams</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;