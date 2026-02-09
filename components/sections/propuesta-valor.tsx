"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export default function PropuestaValor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="nosotros"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="http://sophiagrouph.com/wp-content/uploads/2026/02/vancouver-cityscape-in-autumn-2026-01-07-02-28-52-utc-scaled.jpg"
                alt="Ciudad moderna"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-xl flex items-center justify-center">
                  <Sparkles size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1e3a5f]">+10</p>
                  <p className="text-sm text-slate-500">
                    {"A\u00f1os de Experiencia"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ea5e9]/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
              <span className="text-sm font-medium text-[#0ea5e9]">
                Nuestra Propuesta
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight"
            >
              {"Transformamos la administraci\u00f3n tradicional en una gesti\u00f3n "}
              <span className="text-[#0ea5e9]">profesional y confiable</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed mb-8"
            >
              En{" "}
              <strong className="text-[#1e3a5f]">SOPHIA GROUP</strong>{" "}
              {"transformamos la administraci\u00f3n tradicional en una gesti\u00f3n profesional, estructurada y confiable, respaldada por equipo experto, cumplimiento normativo y tecnolog\u00eda aplicada."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              {[
                "Equipo certificado y especializado",
                "Procesos estandarizados y documentados",
                "Tecnolog\u00eda de punta con Inteligencia Artificial",
                "Cumplimiento total de la Ley 675 de 2001",
                "P\u00f3liza de cumplimiento incluida",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[#0ea5e9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
