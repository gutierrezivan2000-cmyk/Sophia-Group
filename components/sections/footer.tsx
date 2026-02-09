"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573218530960";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Equipo", href: "#equipo" },
  { name: "Contacto", href: "#contacto" },
];

const serviciosLinks = [
  "Administraci\u00f3n Integral",
  "Asesor\u00eda Contable",
  "Asesor\u00eda Jur\u00eddica",
  "Auditor\u00eda Externa",
  "Revisor\u00eda Fiscal",
  "Portal de Transparencia",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contacto"
      className="bg-[#0f172a] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1e3a5f]/20 rounded-full blur-3xl" />

      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0c4a6e] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {"¿Listo para transformar su Propiedad Horizontal?"}
                </h3>
                <p className="text-white/70 max-w-xl">
                  {"Cont\u00e1ctenos hoy mismo y descubra c\u00f3mo Sophia Group puede llevar la administraci\u00f3n de su PH al siguiente nivel."}
                </p>
              </div>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Solicitar Propuesta
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl mb-6">
              SOPHIA<span className="text-[#0ea5e9]">GROUP</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              {"Expertos en Propiedad Horizontal con IA. Protegemos el patrimonio com\u00fan con tecnolog\u00eda y profesionalismo."}
            </p>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0ea5e9] transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">
              {"Enlaces R\u00e1pidos"}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-[#0ea5e9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {serviciosLinks.map((servicio, index) => (
                <li key={index}>
                  <span className="text-white/60">{servicio}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:atencionalcliente@sophiagrouph.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#0ea5e9] transition-colors"
                >
                  <Mail size={20} className="text-[#0ea5e9]" />
                  atencionalcliente@sophiagrouph.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.sophiagrouph.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#0ea5e9] transition-colors"
                >
                  <Globe size={20} className="text-[#0ea5e9]" />
                  www.sophiagrouph.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#0ea5e9] transition-colors"
                >
                  <Phone size={20} className="text-[#0ea5e9]" />
                  +57 321 853 0960
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={20} className="text-[#0ea5e9]" />
                  Colombia
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              {"Copyright \u00a9 2026 Sophia Group. Todos los derechos reservados."}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {"Pol\u00edtica de Privacidad"}
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {"T\u00e9rminos de Servicio"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
