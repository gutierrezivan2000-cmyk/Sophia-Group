"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, User } from "lucide-react";

const testimonios = [
  {
    nombre: "Carlos Mart\u00ednez",
    rol: "Presidente del Consejo - Torres del Parque",
    contenido:
      "Desde que contratamos a Sophia Group, la administraci\u00f3n de nuestra propiedad horizontal cambi\u00f3 por completo. La transparencia, el profesionalismo y el uso de tecnolog\u00eda nos han dado tranquilidad total. Los informes son claros, las asambleas se organizan perfectamente y la comunicaci\u00f3n con los copropietarios mejor\u00f3 significativamente.",
    calificacion: 5,
  },
  {
    nombre: "Mar\u00eda Elena Rojas",
    rol: "Copropietaria - Edificio Altavista",
    contenido:
      "Como copropietaria, siempre tuve dudas sobre c\u00f3mo se manejaban los recursos del edificio. Con el portal de transparencia de Sophia Group, ahora puedo ver todos los estados financieros, las actas de asambleas y los proyectos de mantenimiento desde mi celular. La tranquilidad que esto me da no tiene precio.",
    calificacion: 5,
  },
];

export default function Testimonios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

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
            <Quote size={16} className="text-[#0ea5e9]" />
            <span className="text-sm font-medium text-[#0ea5e9]">
              Testimonios
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            Lo que dicen nuestros{" "}
            <span className="text-[#0ea5e9]">clientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600"
          >
            {"La satisfacci\u00f3n de nuestros clientes es nuestro mejor testimonio."}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#0ea5e9]/20 hover:shadow-card-hover transition-all duration-300 relative">
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center">
                  <Quote size={24} className="text-[#0ea5e9]" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonio.calificacion)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                  {`"${testimonio.contenido}"`}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                    <User size={24} className="text-slate-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e3a5f]">
                      {testimonio.nombre}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonio.rol}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { valor: "98%", label: "Satisfacci\u00f3n del Cliente" },
            { valor: "+100", label: "PH Administradas" },
            { valor: "+5000", label: "Copropietarios Atendidos" },
            { valor: "24/7", label: "Soporte Disponible" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#0ea5e9] mb-2">
                {stat.valor}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
