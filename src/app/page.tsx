"use client"
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Initial from "./components/initial/Initial";
import Projects from './components/project/Projects';

export default function Home() {

  // useEffect(() => {
  //   const scrollContainer = document.querySelector('.scroll-container');

  //   const handleWheel = (event: WheelEvent) => {
  //     event.preventDefault();
  //     if (scrollContainer) {
  //       scrollContainer.scrollBy({
  //         top: event.deltaY > 0 ? window.innerHeight : -window.innerHeight,
  //         behavior: 'smooth',
  //       });
  //     }
  //   };

  //   if (scrollContainer) {
  //     scrollContainer.addEventListener('wheel', handleWheel as EventListener);
  //   }

  //   // Cleanup: remover o listener
  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener('wheel', handleWheel as EventListener);
  //     }
  //   };
  // }, []);

  return (
    <div className="scroll-container min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="scroll-container">
        <Initial />
        <About />
        <Projects />
      <Contact />
      </section>
    </div>
  );
}
