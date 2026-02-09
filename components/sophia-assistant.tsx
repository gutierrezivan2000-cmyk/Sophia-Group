"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  BookOpen,
  Building2,
  Scale,
  Calculator,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface QuickTopic {
  id: string;
  icon: React.ElementType;
  label: string;
  question: string;
}

interface SophiaAssistantProps {
  onClose: () => void;
}

const WHATSAPP_URL = "https://wa.me/573218530960";

const quickTopics: QuickTopic[] = [
  {
    id: "servicios",
    icon: Building2,
    label: "Nuestros Servicios",
    question: "\u00bfQu\u00e9 servicios ofrece Sophia Group?",
  },
  {
    id: "ley675",
    icon: Scale,
    label: "Ley 675 de 2001",
    question: "\u00bfQu\u00e9 es la Ley 675 de 2001?",
  },
  {
    id: "precios",
    icon: Calculator,
    label: "Precios",
    question: "\u00bfCu\u00e1nto cuesta la administraci\u00f3n?",
  },
  {
    id: "contacto",
    icon: MessageCircle,
    label: "Contacto",
    question: "\u00bfC\u00f3mo puedo contactarlos?",
  },
];

const phInfo: Record<string, string> = {
  "que es ph": `**\u00bfQu\u00e9 es la Propiedad Horizontal?**

La Propiedad Horizontal es un r\u00e9gimen de propiedad donde:
\u2022 Cada propietario tiene dominio exclusivo sobre su unidad privada (apartamento, casa, local)
\u2022 Existe propiedad com\u00fan sobre \u00e1reas compartidas (ascensores, zonas verdes, garajes comunes, salones sociales)
\u2022 Se rige por la Ley 675 de 2001 en Colombia

Este r\u00e9gimen requiere una administraci\u00f3n profesional para gestionar los recursos comunes y mantener la convivencia.`,

  "ley 675": `**Ley 675 de 2001**

Es la norma que regula la Propiedad Horizontal en Colombia:

**Aspectos principales:**
\u2022 Establece la figura del Administrador
\u2022 Define las obligaciones de copropietarios
\u2022 Regula las Asambleas y sus decisiones
\u2022 Establece el r\u00e9gimen de cuotas de administraci\u00f3n
\u2022 Define las sanciones por incumplimiento

En Sophia Group garantizamos cumplimiento total de esta ley.`,

  asamblea: `**Asambleas de Propiedad Horizontal**

Las asambleas son la m\u00e1xima autoridad de la PH:

**Tipos:**
\u2022 **Ordinarias:** Realizadas anualmente para aprobar presupuesto
\u2022 **Extraordinarias:** Convocadas para decisiones urgentes

**Qu\u00f3rum:**
\u2022 1\u00aa convocatoria: 60% de coeficientes
\u2022 2\u00aa convocatoria: 30% de coeficientes

Nosotros gestionamos todo el proceso de sus asambleas.`,

  coeficiente: `**Coeficiente de Copropiedad**

Es el porcentaje que determina:
\u2022 El valor de las cuotas de administraci\u00f3n
\u2022 El peso del voto en asambleas
\u2022 La responsabilidad en gastos comunes

Se calcula seg\u00fan:
\u2022 Metraje de la unidad privada
\u2022 Ubicaci\u00f3n dentro del edificio
\u2022 Uso de zonas comunes

Garantizamos c\u00e1lculos precisos y transparentes.`,

  cuota: `**Cuotas de Administraci\u00f3n**

Son los pagos mensuales que cada propietario debe realizar:

**Cobertura:**
\u2022 Servicios p\u00fablicos comunes
\u2022 Mantenimiento de \u00e1reas
\u2022 N\u00f3mina del personal
\u2022 Seguros
\u2022 Reservas para reparaciones

En Sophia Group elaboramos presupuestos claros y justos.`,

  pqrs: `**PQRS en Propiedad Horizontal**

Sistema de Peticiones, Quejas, Reclamos y Sugerencias:

**Gesti\u00f3n profesional de:**
\u2022 Peticiones de informaci\u00f3n
\u2022 Quejas por incumplimientos
\u2022 Reclamos de servicios
\u2022 Sugerencias de mejora

Ofrecemos atenci\u00f3n oportuna y trazabilidad completa.`,

  mantenimiento: `**Mantenimiento en PH**

Es fundamental para preservar el patrimonio:

**Tipos:**
\u2022 **Preventivo:** Programado peri\u00f3dicamente
\u2022 **Correctivo:** Reparaciones urgentes
\u2022 **Predictivo:** Basado en an\u00e1lisis de estado

Nuestra gesti\u00f3n incluye planificaci\u00f3n anual y proveedores calificados.`,
};

const sophiaKnowledge: Record<string, string> = {
  hola: `Hola! Bienvenido a Sophia Group.

Soy **Sophia**, tu asistente virtual especializada en Propiedad Horizontal. Estoy aqu\u00ed para ayudarte con:

\u2022 Informaci\u00f3n sobre nuestros servicios
\u2022 Consultas sobre Propiedad Horizontal
\u2022 Dudas sobre la Ley 675 de 2001
\u2022 Cotizaciones y contacto

\u00bfEn qu\u00e9 puedo asistirte hoy?`,

  "buenos dias": `Buenos d\u00edas! Soy Sophia, asistente virtual de Sophia Group.

Estoy lista para ayudarte con informaci\u00f3n sobre administraci\u00f3n de Propiedad Horizontal. \u00bfQu\u00e9 necesitas saber?`,

  "buenas tardes": `Buenas tardes! Bienvenido a Sophia Group.

Soy Sophia, tu asistente virtual. \u00bfEn qu\u00e9 puedo ayudarte sobre nuestros servicios de administraci\u00f3n de PH?`,

  "buenas noches": `Buenas noches! Gracias por contactar a Sophia Group.

Soy Sophia, asistente virtual. Aunque sea tarde, estoy aqu\u00ed para responder tus preguntas. \u00bfQu\u00e9 necesitas?`,

  servicios: `**Nuestros Servicios**

En Sophia Group ofrecemos soluciones integrales:

**1. ADMINISTRACI\u00d3N INTEGRAL**
\u2022 Planeaci\u00f3n estrat\u00e9gica anual
\u2022 Organizaci\u00f3n de asambleas
\u2022 Elaboraci\u00f3n de actas
\u2022 Gesti\u00f3n de proveedores
\u2022 Atenci\u00f3n PQRS
\u2022 Informes mensuales

**2. ASESOR\u00cdA CONTABLE/FINANCIERA**
\u2022 Estados financieros mensuales
\u2022 Presupuestos anuales
\u2022 Gesti\u00f3n de cartera
\u2022 Cumplimiento NIIF

**3. ASESOR\u00cdA JUR\u00cdDICA**
\u2022 Cobro prejur\u00eddico
\u2022 Habeas Data
\u2022 Reglamentos de convivencia
\u2022 Ley 675 de 2001

**4. AUDITOR\u00cdA Y REVISOR\u00cdA**
\u2022 Auditor\u00eda externa
\u2022 Revisor\u00eda fiscal

\u00bfTe gustar\u00eda m\u00e1s detalles de alg\u00fan servicio?`,

  precio: `**Inversi\u00f3n en su PH**

El valor de nuestros servicios depende de:

**Factores:**
\u2022 N\u00famero de unidades
\u2022 Metraje total
\u2022 \u00c1reas comunes
\u2022 Ubicaci\u00f3n
\u2022 Servicios requeridos

**Incluye:**
\u2022 Honorarios administrativos
\u2022 P\u00f3liza de cumplimiento
\u2022 Portal de transparencia
\u2022 Pasarela de pagos
\u2022 Biblioteca legal IA

**Solicita tu cotizaci\u00f3n personalizada:**
WhatsApp: +57 321 853 0960
Email: atencionalcliente@sophiagrouph.com`,

  contacto: `**Cont\u00e1ctanos**

Estamos listos para atenderte:

**WhatsApp:** +57 321 853 0960
**Email:** atencionalcliente@sophiagrouph.com
**Web:** www.sophiagrouph.com
**Ubicaci\u00f3n:** Colombia

**Horario de atenci\u00f3n:**
Lunes a Viernes: 8:00 am - 6:00 pm
S\u00e1bados: 9:00 am - 1:00 pm

Escr\u00edbenos y te responderemos en menos de 24 horas.`,

  equipo: `**Nuestro Equipo**

Profesionales certificados:

**Adolfo Ardila** - Director Ejecutivo
Experto en administraci\u00f3n de PH con +15 a\u00f1os de experiencia.

**Angela Cano** - Directora Financiera
Especialista en gesti\u00f3n contable y NIIF.

**Camilo Garc\u00e9s** - Director Jur\u00eddico
Abogado especializado en derecho inmobiliario.

**Juan C. Cardona** - Director de Operaciones
Experto en tecnolog\u00eda aplicada a la administraci\u00f3n.

Todos con certificaciones y capacitaci\u00f3n continua.`,
};

function generateResponse(input: string): {
  type: "sophia" | "ph" | "default";
  content: string;
} {
  const lowerInput = input.toLowerCase().trim();

  if (
    /^(hola|buenos dias|buenas tardes|buenas noches|hey|saludos|hi|hello)$/i.test(
      lowerInput
    )
  ) {
    return { type: "sophia", content: sophiaKnowledge["hola"] };
  }

  const sophiaKeywords = [
    {
      keys: ["servicio", "ofrecen", "hacen", "que hacen"],
      response: "servicios",
    },
    {
      keys: [
        "precio",
        "precios",
        "costo",
        "costos",
        "cuanto cuesta",
        "cu\u00e1nto cuesta",
        "valor",
        "tarifa",
      ],
      response: "precio",
    },
    {
      keys: ["contacto", "contactar", "escribir", "hablar"],
      response: "contacto",
    },
    {
      keys: ["equipo", "directores", "quienes son", "qui\u00e9nes son"],
      response: "equipo",
    },
  ];

  for (const item of sophiaKeywords) {
    if (item.keys.some((key) => lowerInput.includes(key))) {
      return { type: "sophia", content: sophiaKnowledge[item.response] };
    }
  }

  const phKeywords = [
    {
      keys: [
        "que es ph",
        "qu\u00e9 es ph",
        "propiedad horizontal",
        "que es una ph",
      ],
      response: "que es ph",
    },
    { keys: ["ley 675", "ley 675 de 2001"], response: "ley 675" },
    { keys: ["asamblea", "asambleas"], response: "asamblea" },
    {
      keys: ["coeficiente", "coeficientes", "copropiedad"],
      response: "coeficiente",
    },
    {
      keys: ["cuota", "cuotas", "administraci\u00f3n"],
      response: "cuota",
    },
    {
      keys: ["pqrs", "peticiones", "quejas", "reclamos"],
      response: "pqrs",
    },
    {
      keys: ["mantenimiento", "mantener", "reparaciones"],
      response: "mantenimiento",
    },
  ];

  for (const item of phKeywords) {
    if (item.keys.some((key) => lowerInput.includes(key))) {
      return {
        type: "ph",
        content: phInfo[item.response as keyof typeof phInfo],
      };
    }
  }

  if (
    /^(gracias|muchas gracias|te agradezco|agradecido)$/i.test(lowerInput)
  ) {
    return {
      type: "sophia",
      content:
        "De nada! Estoy aqu\u00ed para lo que necesites. \u00bfHay algo m\u00e1s en lo que pueda ayudarte?",
    };
  }

  if (
    /^(adios|adi\u00f3s|hasta luego|chao|bye|nos vemos)$/i.test(lowerInput)
  ) {
    return {
      type: "sophia",
      content:
        "Hasta luego! Gracias por contactar a Sophia Group. Que tengas un excelente d\u00eda. Recuerda que estoy aqu\u00ed cuando me necesites.",
    };
  }

  if (/^(ayuda|help|auxilio|no se|no s\u00e9)$/i.test(lowerInput)) {
    return {
      type: "sophia",
      content: `Claro que s\u00ed! Puedo ayudarte con:

**Sobre Sophia Group:**
\u2022 Nuestros servicios de administraci\u00f3n
\u2022 Precios y cotizaciones
\u2022 Contacto y ubicaci\u00f3n
\u2022 Nuestro equipo

**Sobre Propiedad Horizontal:**
\u2022 \u00bfQu\u00e9 es una PH?
\u2022 Ley 675 de 2001
\u2022 Asambleas y coeficientes
\u2022 Cuotas y mantenimiento

\u00bfSobre cu\u00e1l tema te gustar\u00eda informaci\u00f3n?`,
    };
  }

  return {
    type: "default",
    content: `Entiendo tu consulta. Perm\u00edteme ayudarte:

**Puedo asistirte con:**
\u2022 Informaci\u00f3n sobre nuestros servicios
\u2022 Dudas sobre Propiedad Horizontal
\u2022 Cotizaciones personalizadas
\u2022 Contacto directo

**Para atenci\u00f3n inmediata:**
WhatsApp: +57 321 853 0960

\u00bfTe gustar\u00eda que te explique algo espec\u00edfico sobre nuestros servicios o sobre Propiedad Horizontal?`,
  };
}

export default function SophiaAssistant({ onClose }: SophiaAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: sophiaKnowledge["hola"],
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInfoBox, setShowInfoBox] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowInfoBox(false);

    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: response.content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTopicClick = (topic: QuickTopic) => {
    handleSend(topic.question);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0c4a6e] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Sophia Assistant</h3>
            <p className="text-xs text-white/70">
              Experta en Propiedad Horizontal
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[380px] overflow-y-auto p-4 bg-slate-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${
                message.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.type === "user"
                    ? "bg-[#0ea5e9]"
                    : "bg-gradient-to-r from-[#1e3a5f] to-[#0c4a6e]"
                }`}
              >
                {message.type === "user" ? (
                  <User size={16} className="text-white" />
                ) : (
                  <Bot size={16} className="text-white" />
                )}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                  message.type === "user"
                    ? "bg-[#0ea5e9] text-white rounded-tr-sm"
                    : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm"
                }`}
                dangerouslySetInnerHTML={{
                  __html: message.content.replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </motion.div>
          ))}

          {/* Info Box - Temas de PH */}
          <AnimatePresence>
            {showInfoBox && messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-4 border border-[#0ea5e9]/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-[#0ea5e9]" />
                  <span className="font-semibold text-[#1e3a5f] text-sm">
                    Temas de Propiedad Horizontal
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      label: "\u00bfQu\u00e9 es una PH?",
                      query:
                        "\u00bfQu\u00e9 es la propiedad horizontal?",
                    },
                    {
                      label: "Ley 675",
                      query:
                        "\u00bfQu\u00e9 es la Ley 675 de 2001?",
                    },
                    {
                      label: "Asambleas",
                      query:
                        "\u00bfC\u00f3mo funcionan las asambleas?",
                    },
                    {
                      label: "Cuotas",
                      query:
                        "\u00bfQu\u00e9 son las cuotas de administraci\u00f3n?",
                    },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(item.query)}
                      className="text-left px-3 py-2 bg-white rounded-lg text-xs text-slate-600 hover:bg-[#0ea5e9] hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#1e3a5f] to-[#0c4a6e] flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0,
                    }}
                    className="w-2 h-2 bg-slate-400 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.15,
                    }}
                    className="w-2 h-2 bg-slate-400 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.3,
                    }}
                    className="w-2 h-2 bg-slate-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Topics */}
      <div className="px-4 py-3 bg-white border-t border-slate-100">
        <p className="text-xs text-slate-400 mb-2">Temas populares:</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {quickTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleTopicClick(topic)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-[#0ea5e9] hover:text-white rounded-full text-xs text-slate-600 transition-colors whitespace-nowrap"
            >
              <topic.icon size={12} />
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta sobre PH..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className="w-12 h-12 bg-gradient-to-r from-[#1e3a5f] to-[#0c4a6e] rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
          >
            <Send size={18} />
          </motion.button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-slate-400">
            Sophia responde sobre PH y servicios de Sophia Group
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0ea5e9] hover:underline"
          >
            {"¿Necesitas un humano? \u2192"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
