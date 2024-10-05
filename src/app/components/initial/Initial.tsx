"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import Header from "../header/Header";
import MouseLightEffect from "../mouseLightEffect/MouseLightEffect";

const Initial: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const options: TypedOptions = {
      strings: [
        "web developer.",
        "back-end.",
        "front-end."
      ],
      typeSpeed: 150,
      backSpeed: 100, // Velocidade para apagar o texto
      backDelay: 1000, // Tempo antes de começar a apagar o texto
      loop: true, // Para que ele continue repetindo
    };

    const typed = new Typed(el.current as HTMLSpanElement, options);

    return () => typed.destroy();
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MouseLightEffect />
      <Header />
      <div className="flex flex-col items-center justify-center h-full relative">
        <section className="text-center mb-8">
          <div className="flex flex-col items-center w-full mx-auto">
            <div>
              <div className="flex lg:items-start">
                <p className={`greeting-${theme} degrade-text-${theme} text-2xl md:text-3xl`}>Olá</p>
              </div>
              <h1 className={`degrade-text-${theme} font-bold text-center text-3xl md:text-6xl`}>
                Eu sou Bona <br />
              </h1>
            </div>
          </div>
          <span className="text-lg" style={{ whiteSpace: 'pre' }} ref={el}>.</span>
          <div className="flex flex-col items-center justify-end mx-auto">
            <p className="mt-4 flex text-center">
              Estou buscando conhecimento e oportunidades para crescer profissionalmente.
            </p>
            <p className="flex text-center">
              Sempre comprometido a aprender e a superar novos desafios que
              impulsionem meu conhecimento no desenvolvimento web.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <Link href="/cvbona.pdf" locale={false} target="_blank">
            <button className="px-4 py-2 bg-white text-gray-800 rounded shadow-lg hover:bg-gray-200 transition duration-300">Download CV</button>
          </Link>
          <Link href="#contact" target="_blank" rel="noopener noreferrer" className="ml-4">
            <button className="px-4 py-2 bg-white text-gray-800 rounded shadow-lg hover:bg-gray-200 transition duration-300">Sabe mais</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Initial;
