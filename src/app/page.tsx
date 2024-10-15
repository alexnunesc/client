"use client"
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Initial from "./components/initial/Initial";
import Projects from './components/project/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white dark:bg-white dark:text-slate-900 relative">
      <section className="scroll-container">
        <Initial />
        <About />
        <Projects />
        <Contact />
      </section>
      <a
        href="#header"
        className="fixed bottom-8 right-8 z-50 bg-gray-700 text-white w-auto px-4 h-[50px] rounded-md"
        style={{ lineHeight: "50px" }}
      >
        Voltar
      </a>
    </div>
  );
}
