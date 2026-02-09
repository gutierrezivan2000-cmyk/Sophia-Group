"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Shield, FileCheck } from "lucide-react";

const equipo = [
  {
    nombre: "Adolfo Ardila",
    cargo: "Director Ejecutivo",
    descripcion:
      "Experto en administraci\u00f3n de PH con m\u00e1s de 15 a\u00f1os de experiencia.",
    foto: "http://sophiagrouph.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-10.38.52-PM.jpeg",
  },
  {
    nombre: "Angela Cano",
    cargo: "Directora Financiera",
    descripcion:
      "Especialista en gesti\u00f3n contable y financiera bajo NIIF.",
    foto: "http://sophiagrouph.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-7.48.54-PM-1.jpeg",
  },
  {
    nombre: "Camilo Garc\u00e9s",
    cargo: "Director Jur\u00eddico",
    descripcion:
      "Abogado especializado en derecho inmobiliario y propiedad horizontal.",
    foto: "http://sophiagrouph.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-7.50.12-PM.jpeg",
  },
  {
    nombre: "Juan C. Cardona",
    cargo: "Director de Operaciones",
    descripcion:
      "Experto en procesos y tecnolog\u00eda aplicada a la administraci\u00f3n.",
    foto: "http://sophiagrouph.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-7.48.54-PM.jpeg",
  },
];

const garantias = [
  {
    icon: Award,
    titulo: "Equipo Certificado",
    descripcion:
      "Profesionales con certificaciones y capacitaci\u00f3n continua.",
  },
  {
    icon: FileCheck,
    titulo: "Procesos Estandarizados",
    descripcion: "Metodolog\u00edas documentadas y mejora continua.",
  },
  {
    icon: Shield,
    titulo: "P\u00f3liza de Cumplimiento",
    descripcion:
      "Garant\u00eda de cumplimiento de obligaciones contractuales.",
  },
];

export default function Equipo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="equipo"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ea5e9]/10 rounded-full mb-6"
          >
            <Users size={16} className="text-[#0ea5e9]" />
            <span className="text-sm font-medium text-[#0ea5e9]">
              Nuestro Equipo
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            Conozca a nuestro{" "}
            <span className="text-[#0ea5e9]">equipo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600"
          >
            {"Profesionales dedicados a transformar la administraci\u00f3n de su propiedad horizontal."}
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {equipo.map((miembro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 hover:shadow-card-hover hover:border-[#0ea5e9]/20 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={miembro.foto}
                    alt={miembro.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">
                    {miembro.nombre}
                  </h3>
                  <p className="text-sm text-[#0ea5e9] font-medium mb-3">
                    {miembro.cargo}
                  </p>
                  <p className="text-sm text-slate-600">
                    {miembro.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-gradient-to-br from-[#1e3a5f] to-[#0c4a6e] rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {"Nuestra Garant\u00eda de Calidad"}
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                {"Comprometidos con la excelencia en cada aspecto de nuestra gesti\u00f3n."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {garantias.map((garantia, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 bg-[#0ea5e9]/20 rounded-xl flex items-center justify-center mb-4">
                    <garantia.icon size={24} className="text-[#0ea5e9]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {garantia.titulo}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {garantia.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
