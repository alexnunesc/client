"use client";
import React, { createContext, ReactNode, useState } from "react";

// Criação do contexto
const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void; buildWhatsAppLink: () => string; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('dark');

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
    document.documentElement.setAttribute('data-theme', theme);
    // localStorage.setItem('theme', theme);
  }

  // useEffect(() => {
  //   const localTheme = localStorage.getItem('theme');
  //   if (localTheme) {
  //     document.documentElement.setAttribute('data-theme', localTheme);
  //     setTheme(localTheme);
  //   } else {
  //     localStorage.setItem('theme', theme);
  //     document.documentElement.setAttribute('data-theme', theme);
  //   }
  // }, []);

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
