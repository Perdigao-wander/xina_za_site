"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Smartphone, ArrowRight } from "lucide-react";

export default function AudioSection() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section
            className="py-20 sm:py-32 px-4 sm:px-6 bg-[#FFF9EC] overflow-hidden relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Brilho de fundo (Amarelo Sol) */}
            <motion.div
                animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.15 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#FDB813] rounded-full pointer-events-none blur-2xl sm:blur-3xl mix-blend-multiply"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-4xl text-center relative z-10"
            >
                {/* Ícone de Áudio */}
                <div className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm border-2 border-[#FDB813]/30 shadow-sm mb-6 sm:mb-8 relative">
                    <motion.div
                        animate={{ rotate: isHovering ? [0, -10, 10, -10, 10, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Volume2 size={32} className="text-[#E67E22] sm:w-10 sm:h-10" />
                    </motion.div>

                    {/* Ripple (Ondas de som) */}
                    {isHovering && (
                        <motion.div
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full border-2 border-[#E67E22]"
                        />
                    )}
                </div>

                <h2 className="mb-4 sm:mb-6 text-3xl sm:text-[2.5rem] font-black text-[#3E2723] tracking-tight">
                    Simples de ouvir. Fácil de falar.
                </h2>

                <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-base sm:text-xl text-[#5D4037] font-medium px-2 leading-relaxed">
                    Toca numa palavra e ouve instantaneamente. O motor de áudio reproduz com clareza, permitindo abrandar para captar cada sílaba.
                </p>

                {/* Botão Principal */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#FDB813] px-6 sm:px-8 py-4 font-bold text-[#3E2723] hover:bg-[#F39C12] hover:text-white transition-all shadow-[0_8px_30px_rgba(253,184,19,0.3)] group"
                >
                    <Smartphone size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
                    Ver demonstração da App
                    <motion.div
                        animate={{ x: isHovering ? 5 : 0 }}
                        transition={{
                            repeat: isHovering ? Infinity : 0,
                            repeatType: "reverse",
                            duration: 0.6,
                        }}
                    >
                        <ArrowRight size={18} />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
}