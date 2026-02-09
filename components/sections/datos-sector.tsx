"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Monitor, Users } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573218530960";

const estadisticas = [
  {
    icon: Building2,
    valor: "+70%",
    titulo: "viviendas urbanas en PH",
    descripcion:
      "La mayor\u00eda de las viviendas urbanas en Colombia son propiedad horizontal.",
    color: "from-blue-500 to-cyan-500",
    progreso: 70,
  },
  {
    icon: Monitor,
    valor: "60%",
    titulo: "con bajo nivel de digitalizaci\u00f3n",
    descripcion:
      "M\u00e1s del 60% de las administraciones tienen procesos manuales obsoletos.",
    color: "from-amber-500 to-orange-500",
    progreso: 60,
  },
  {
    icon: Users,
    valor: "8/10",
    titulo: "copropietarios exigen transparencia",
    descripcion:
      "Ocho de cada diez propietarios demandan mayor claridad en la gesti\u00f3n.",
    color: "from-emerald-500 to-green-500",
    progreso: 80,
  },
];

export default function DatosSector() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0c4a6e] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/30 rounded-full blur-3xl"
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Datos del Sector
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            La realidad de la{" "}
            <span className="text-[#0ea5e9]">Propiedad Horizontal</span> en
            Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70"
          >
            {"Entendemos los desaf\u00edos del sector y ofrecemos soluciones adaptadas a las necesidades reales."}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {estadisticas.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9]/20 to-[#0284c7]/20 rounded-xl flex items-center justify-center mb-6">
                  <stat.icon size={32} className="text-[#0ea5e9]" />
                </div>

                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.valor}
                </div>

                <h3 className="text-xl font-semibold text-white/90 mb-3">
                  {stat.titulo}
                </h3>

                <p className="text-white/60 mb-6">{stat.descripcion}</p>

                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${stat.progreso}%` } : {}
                    }
                    transition={{
                      delay: 0.8 + index * 0.2,
                      duration: 1,
                      ease: "easeOut",
                    }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6">
            {"Sophia Group est\u00e1 preparada para transformar la administraci\u00f3n de su propiedad horizontal."}
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-semibold rounded-xl shadow-lg shadow-[#0ea5e9]/25 hover:shadow-xl transition-all"
          >
            {"Descubre Nuestra Soluci\u00f3n"}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
