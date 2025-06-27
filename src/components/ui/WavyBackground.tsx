"use client";
import { cn } from "../../../lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 30,
  speed = "fast",
  waveOpacity = 0.8,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const noiseOffsetRef = useRef<number>(0);

  const getSpeed = useCallback(() => (speed === "fast" ? 0.002 : 0.001), [speed]);

  const waveColors = colors ?? ["#FFD700", "#EDEDED", "#aa2000", "#FFA41B", "#FF5151"];

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
  }, [blur]);

  const drawWave = (ctx: CanvasRenderingContext2D, width: number, height: number, n: number) => {
    noiseOffsetRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < width; x += 3) {
        const y = noise(x / 1000, 0.2 * i, noiseOffsetRef.current) * 200;
        ctx.lineTo(x, y + height * 0.1);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height); // Only clear instead of filling the entire background
    drawWave(ctx, width, height, 5);

    animationRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    resizeCanvas();
    render();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas, render]);

  return (
    <div className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
      <canvas className="absolute inset-0 z-0" ref={canvasRef} id="canvas"></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
