import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  const main = useRef();
  const scrollTween = useRef();
  const { contextSafe } = useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=200%",
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
          id: "panel-" + i,
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: main }
  );

  const goToSection = contextSafe((i: number) => {
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      id: "scrollTween",
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main}>
      <section className="description w-full h-screen panel light">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel w-full h-screen bg-black text-white">
        ONE
      </section>
      <section className="panel w-full h-screen bg-orange-600">TWO</section>
      <section className="panel w-full h-screen bg-green-600">THREE</section>
      <section className="panel w-full h-screen bg-red-500">FOUR</section>
    </main>
  );
}

export default App;
