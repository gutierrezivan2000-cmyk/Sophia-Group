"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  Calculator,
  Scale,
  ClipboardCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573218530960";

const serviciosPrincipales = {
  titulo: "Administraci\u00f3n Integral",
  icon: Briefcase,
  descripcion:
    "Gesti\u00f3n completa de su propiedad horizontal con enfoque profesional y tecnol\u00f3gico.",
  items: [
    "Planeaci\u00f3n estrat\u00e9gica anual",
    "Organizaci\u00f3n y convocatoria de asambleas",
    "Elaboraci\u00f3n de actas y documentaci\u00f3n",
    "Gesti\u00f3n de proveedores y contratos",
    "Atenci\u00f3n de PQRS",
    "Informes mensuales detallados",
  ],
};

const serviciosApoyo = [
  {
    id: "contable",
    titulo: "Asesor\u00eda Contable / Financiera",
    icon: Calculator,
    descripcion:
      "Gesti\u00f3n financiera profesional bajo normas internacionales.",
    items: [
      "Estados financieros mensuales",
      "Presupuesto anual detallado",
      "Gesti\u00f3n de cartera y cobranza",
      "Cumplimiento NIIF",
      "Conciliaciones bancarias",
    ],
  },
  {
    id: "juridica",
    titulo: "Asesor\u00eda Jur\u00eddica",
    icon: Scale,
    descripcion:
      "Protecci\u00f3n legal integral para su propiedad horizontal.",
    items: [
      "Cobro prejur\u00eddico de cuotas",
      "Cumplimiento Habeas Data",
      "Reglamentos de convivencia",
      "Asesor\u00eda en Ley 675 de 2001",
      "Mediaci\u00f3n de conflictos",
    ],
  },
  {
    id: "auditoria",
    titulo: "Auditor\u00eda y Revisor\u00eda",
    icon: ClipboardCheck,
    descripcion: "Control y vigilancia de la gesti\u00f3n administrativa.",
    items: [
      "Auditor\u00eda externa anual",
      "Revisor\u00eda fiscal",
      "Verificaci\u00f3n de estados financieros",
      "Control de cumplimiento normativo",
      "Informes de gesti\u00f3n",
    ],
  },
];

export default function Servicios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

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
              Nuestros Servicios
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4"
          >
            Portafolio de{" "}
            <span className="text-[#0ea5e9]">Servicios</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-600"
          >
            {"Ofrecemos una soluci\u00f3n integral para la administraci\u00f3n de propiedad horizontal, respaldada por tecnolog\u00eda y experiencia."}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0c4a6e] rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm text-white mb-4">
                  <serviciosPrincipales.icon size={16} />
                  <span>Servicio Central</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {serviciosPrincipales.titulo}
                </h3>
                <p className="text-white/80 mb-6">
                  {serviciosPrincipales.descripcion}
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex px-6 py-3 bg-white text-[#1e3a5f] font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  {"Solicitar Informaci\u00f3n"}
                </motion.a>
              </div>

              <div className="hidden lg:block relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="http://sophiagrouph.com/wp-content/uploads/2026/02/a-city-skyline-with-a-tall-building-in-the-middle-2026-01-09-10-26-59-utc-scaled.jpg"
                  alt="Administraci\u00f3n de propiedad horizontal"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] via-[#1e3a5f]/70 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {serviciosPrincipales.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
            >
              <CheckCircle2
                size={20}
                className="text-[#0ea5e9] flex-shrink-0"
              />
              <span className="text-slate-700 text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl font-bold text-[#1e3a5f] mb-6"
          >
            Servicios de Apoyo
          </motion.h3>

          {serviciosApoyo.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveTab(
                    activeTab === servicio.id ? null : servicio.id
                  )
                }
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center">
                    <servicio.icon size={24} className="text-[#0ea5e9]" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-[#1e3a5f]">
                      {servicio.titulo}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: activeTab === servicio.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={24} className="text-slate-400" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: activeTab === servicio.id ? "auto" : 0,
                  opacity: activeTab === servicio.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-16 grid sm:grid-cols-2 gap-3">
                    {servicio.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
