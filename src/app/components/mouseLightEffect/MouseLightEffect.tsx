"use client";
import React, { useEffect, useState } from 'react';

const MouseLightEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    // Atualiza a posição do mouse
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Adiciona e remove os listeners de mouse
  useEffect(() => {
    const handleMouseMoveWrapper = (event: MouseEvent) => {
      handleMouseMove(event);
    };

    window.addEventListener("mousemove", handleMouseMoveWrapper);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWrapper);
    };
  }, []);

  return (
    <div
      className="absolute rounded-full bg-cyan-300 opacity-50"
      style={{
        width: "200px",
        height: "200px",
        left: mousePosition.x - 100, // Ajusta a posição horizontal
        top: mousePosition.y - 100,   // Ajusta a posição vertical
        transition: "left 0.1s ease, top 0.1s ease", // Transição suave
        pointerEvents: "none", // Ignora eventos do mouse
        boxShadow: "0 0 30px rgba(255, 255, 0, 0.5)", // Efeito de luz
        filter: "blur(50px)", // Efeito de desfoque
        mixBlendMode: "overlay", // Modo de mesclagem para suavizar
      }}
    ></div>
  );
};

export default MouseLightEffect;
