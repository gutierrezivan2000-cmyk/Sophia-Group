"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  CreditCard,
  BookOpen,
  Bot,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573218530960";

const bonos = [
  {
    id: 1,
    titulo: "Portal Web de Transparencia",
    descripcion:
      "Acceso 24/7 a todos los documentos, estados financieros y actas de su propiedad horizontal.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "#0ea5e9",
    features: [
      "Documentos en l\u00ednea",
      "Estados financieros actualizados",
      "Historial de actas",
      "Notificaciones autom\u00e1ticas",
    ],
  },
  {
    id: 2,
    titulo: "Pasarela de Pagos en L\u00ednea",
    descripcion:
      "Pague las cuotas de administraci\u00f3n de forma segura y conveniente desde cualquier dispositivo.",
    icon: CreditCard,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    iconColor: "#10b981",
    features: [
      "M\u00faltiples m\u00e9todos de pago",
      "Comprobantes autom\u00e1ticos",
      "Historial de pagos",
      "Recordatorios de vencimiento",
    ],
  },
  {
    id: 3,
    titulo: "Biblioteca Inteligente con IA",
    descripcion:
      "Consulte la normatividad y documentaci\u00f3n legal con asistencia de inteligencia artificial.",
    icon: BookOpen,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    iconColor: "#0ea5e9",
    features: [
      "Ley 675 de 2001 actualizada",
      "Jurisprudencia relevante",
      "B\u00fasqueda inteligente",
      "Respuestas con IA",
    ],
  },
  {
    id: 4,
    titulo: "SOFIA PACK",
    descripcion:
      "Suite de asistentes de IA especializados para optimizar cada \u00e1rea de la administraci\u00f3n.",
    icon: Bot,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "#f59e0b",
    features: [
      "Asistente para actas",
      "Asistente jur\u00eddico",
      "Asistente de presupuesto",
      "An\u00e1lisis predictivo",
    ],
  },
];

export default function Bonos() {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-6"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-sm font-medium text-amber-600">
              Valor Agregado
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            El{" "}
            <span className="text-gradient bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Plus
            </span>{" "}
            de Sophia Group
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600"
          >
            {"Beneficios exclusivos que incluimos en nuestros servicios para brindarle la mejor experiencia en administraci\u00f3n de propiedad horizontal."}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {bonos.map((bono, index) => (
            <motion.div
              key={bono.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-slate-100 hover:shadow-card-hover hover:border-[#0ea5e9]/20 transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bono.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 ${bono.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <bono.icon
                        size={28}
                        style={{ color: bono.iconColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors mb-2">
                        {bono.titulo}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {bono.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {bono.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${bono.color}`}
                        />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9] hover:gap-3 transition-all"
                  >
                    {"M\u00e1s informaci\u00f3n"}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">
            {"Todos estos beneficios est\u00e1n incluidos en nuestros planes de administraci\u00f3n integral."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
