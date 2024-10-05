"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

// Criação do contexto
const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void; buildWhatsAppLink: () => string; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<string>(initialTheme || "light");

  // Função para gerar link do WhatsApp
  function buildWhatsAppLink(): string {
    const phoneNumber = '5531971993632'; // sem o '+'
    const message = 'Olá, estou entrando em contato pelo seu site.';

    const query = new URLSearchParams({
      phone: phoneNumber,
      text: message,
    }).toString();

    return `https://api.whatsapp.com/send?${query}`;
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }


  // Efeito para buscar o tema do localStorage quando o componente monta
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Efeito para salvar o tema no localStorage quando ele muda
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  console.log(theme);
  

  return (
    <ThemeContext.Provider value={{ buildWhatsAppLink, theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acessar o contexto do tema
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
