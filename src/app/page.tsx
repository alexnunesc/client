"use client"
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Initial from "./components/initial/Initial";
import Projects from './components/project/Projects';

export default function Home() {
  return (
    <div className="scroll-container min-h-screen bg-slate-900 text-white dark:bg-white dark:text-slate-900">
      <section className="scroll-container">
        <Initial />
        <About />
        <Projects />
        <Contact />
      </section>
    </div>
  );
}
