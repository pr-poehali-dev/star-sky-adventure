import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/50904505-1487-4ac7-8b32-88500ce6ef5a/files/1ad3c753-ee01-4cee-9bca-fe6eb3bdf992.jpg"
          alt="Придорожная закусочная"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ПОЕШЬ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Горячая еда прямо у дороги — останови машину и перекуси по-домашнему
        </p>
        <a
          href="#menu"
          className="inline-block mt-8 border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Смотреть меню
        </a>
      </div>
    </div>
  );
}
