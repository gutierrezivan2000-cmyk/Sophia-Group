"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  ShieldCheck,
  Eye,
  TrendingUp,
  Users,
  Scale,
} from "lucide-react";

const beneficios = [
  {
    icon: Zap,
    title: "Gesti\u00f3n moderna y eficiente",
    description:
      "Uso de tecnolog\u00eda e IA para optimizar tiempos y procesos administrativos.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Tranquilidad para el Consejo",
    description:
      "Informes claros y decisiones respaldadas por datos y an\u00e1lisis.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    description:
      "Acceso permanente a documentos y trazabilidad completa de operaciones.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Control financiero efectivo",
    description: "Presupuestos estructurados y flujo de caja optimizado.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: Users,
    title: "Menos conflictos",
    description:
      "Procesos claros, asesor\u00eda jur\u00eddica y gesti\u00f3n eficiente de PQRS.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Scale,
    title: "Cumplimiento normativo",
    description:
      "Alineaci\u00f3n total con la Ley 675 y normas complementarias.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
];

export default function Beneficios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="beneficios"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
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
            <span className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
            <span className="text-sm font-medium text-[#0ea5e9]">
              Beneficios
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            {"¿Por qu\u00e9 elegir "}
            <span className="text-[#0ea5e9]">Sophia Group</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600"
          >
            {"Nuestros servicios est\u00e1n dise\u00f1ados para brindar tranquilidad, transparencia y eficiencia en la administraci\u00f3n de su propiedad horizontal."}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-slate-100 hover:shadow-card-hover hover:border-[#0ea5e9]/20 transition-all duration-300">
                <div
                  className={`w-14 h-14 ${beneficio.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
                >
                  <beneficio.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#0ea5e9] transition-colors">
                  {beneficio.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
