"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import PropuestaValor from "@/components/sections/propuesta-valor";
import Beneficios from "@/components/sections/beneficios";
import DatosSector from "@/components/sections/datos-sector";
import Servicios from "@/components/sections/servicios";
import Bonos from "@/components/sections/bonos";
import Equipo from "@/components/sections/equipo";
import Testimonios from "@/components/sections/testimonios";
import Footer from "@/components/sections/footer";
import SophiaAssistant from "@/components/sophia-assistant";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header scrollY={scrollY} />

      <main>
        <Hero />
        <PropuestaValor />
        <Beneficios />
        <DatosSector />
        <Servicios />
        <Bonos />
        <Equipo />
        <Testimonios />
      </main>

      <Footer />

      {/* Floating Assistant Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      >
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          className="hidden sm:block px-3 py-1.5 bg-white rounded-full shadow-md text-sm font-medium text-[#1e3a5f] border border-slate-100"
        >
          {"¿Tienes dudas? ¡Chatea conmigo!"}
        </motion.span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAssistant(true)}
          className="w-14 h-14 bg-gradient-to-r from-[#1e3a5f] to-[#0ea5e9] rounded-full shadow-lg shadow-[#0ea5e9]/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#0ea5e9]/40 transition-all"
          aria-label="Abrir asistente virtual"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showAssistant && (
          <SophiaAssistant onClose={() => setShowAssistant(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
