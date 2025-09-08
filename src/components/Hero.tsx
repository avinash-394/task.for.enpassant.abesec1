// src/components/Hero.js

import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { useEffect, useRef } from 'react';
import { FaTrophy, FaMedal, FaAward, FaUsers } from "react-icons/fa";

const Hero = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  

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
          A welcoming space for chess lovers to connect, learn, and enjoy the game together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
<Button
  asChild
  size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group w-full sm:w-auto shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
>
              <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer">
                
    Join us on Chess.com
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