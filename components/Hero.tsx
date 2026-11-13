"use client";

import Image from "next/image";
import logo from "../public/assets/Xina_za_transparente.png";
import { motion } from "framer-motion";
import { Play, Mail, ChevronDown, Sun } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#FFF9EC]">

            {/* ─────────────────────── FUNDO TROPICAL ALEGRE ─────────────────────── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradiente base quente (areia/amanhecer) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9EC] via-[#FFE4B5] to-[#E0F7FA]" />

                {/* Sol amarelo brilhante (Canto superior direito) */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#FDB813] blur-[80px] sm:blur-[120px] mix-blend-multiply"
                />

                {/* Brilho verde natureza (Canto inferior esquerdo) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-20 -left-20 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#2ECC71] blur-[80px] sm:blur-[120px] mix-blend-multiply"
                />

                {/* Brilho azul oceano (Meio direita) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#3498DB] blur-[80px] sm:blur-[100px] mix-blend-multiply"
                />
            </div>

            {/* ─────────────────────── CONTEÚDO SPLIT ────────────────────────────── */}
            <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 py-16 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* ─────────── LADO ESQUERDO: LOGO ─────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* CONTENTOR PRINCIPAL: Define o tamanho exato do círculo e da imagem */}
                        <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]">

                            {/* Halo dourado atrás do logo */}
                            <div className="absolute inset-0 rounded-full bg-[#FDB813]/30 blur-[60px]" />

                            {/* Aro pontilhado a girar (ocupa 100% do contentor) */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-[#E67E22]/40"
                            />

                            {/* Imagem do logo (com padding para não tocar na borda do círculo) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="relative z-10 w-full h-full p-8 sm:p-12 flex items-center justify-center"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={logo}
                                    alt="Xina Za Logo"
                                    priority
                                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(253,184,19,0.3)]"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ─────────── LADO DIREITO: TEXTO + CTAs ─────────── */}
                    <div className="text-center lg:text-left text-[#3E2723]">

                        {/* Badge "EM BREVE" (Estilo sol nascente) */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#E67E22]/30 bg-white/60 backdrop-blur-md px-4 py-2 mb-6 shadow-sm"
                        >
                            <Sun size={16} className="text-[#E67E22]" />
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D35400]">
                                Em breve · 2026
                            </span>
                        </motion.div>

                        {/* Título */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6 drop-shadow-sm"
                        >
                            Aprende o dialecto.
                            <br />
                            <span className="bg-gradient-to-r from-[#FDB813] via-[#E67E22] to-[#2ECC71] bg-clip-text text-transparent drop-shadow-sm">
                                Sente a cultura.
                            </span>
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="mx-auto lg:mx-0 max-w-lg text-base sm:text-lg text-[#5D4037] mb-10 leading-relaxed font-medium"
                        >
                            Uma experiência imersiva e colorida para preservar e celebrar as línguas de São Tomé e Príncipe. Chegamos em breve — sê o primeiro a saber.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                        >
                            {/* Form de inscrição */}
                            <div className="flex w-full sm:w-auto items-center rounded-full border-2 border-white bg-white/80 backdrop-blur-md p-1.5 shadow-[0_8px_30px_rgba(253,184,19,0.2)] focus-within:ring-2 focus-within:ring-[#FDB813] transition-all">
                                <div className="hidden sm:block pl-4 text-[#D35400]">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Introduz o teu email"
                                    className="flex-1 sm:w-48 bg-transparent py-2 px-3 text-sm text-[#3E2723] placeholder-[#A1887F] outline-none font-medium"
                                />
                                <button className="rounded-full bg-[#FDB813] text-[#3E2723] px-6 py-2.5 text-sm font-bold hover:bg-[#F39C12] hover:text-white transition-all active:scale-95 whitespace-nowrap shadow-md">
                                    Inscrever
                                </button>
                            </div>

                            {/* Botão "Ver demonstração" */}
                            <button className="group flex items-center justify-center gap-2.5 rounded-full border-2 border-[#2ECC71] bg-[#2ECC71]/10 px-6 py-3 text-sm font-bold text-[#1E8449] hover:bg-[#2ECC71] hover:text-white transition-all active:scale-95 whitespace-nowrap shadow-sm">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/50 group-hover:bg-white/20 transition-colors">
                                    <Play size={12} fill="currentColor" className="ml-0.5" />
                                </span>
                                Ver demonstração
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll (Cores quentes) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D35400] font-bold">Explorar</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="bg-white/50 p-1 rounded-full shadow-sm"
                >
                    <ChevronDown size={18} className="text-[#D35400]" />
                </motion.div>
            </motion.div>
        </section>
    );
}