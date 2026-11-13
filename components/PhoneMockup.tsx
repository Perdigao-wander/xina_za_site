"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function PhoneMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative flex justify-center lg:justify-end"
        >
            {/* Brilho decorativo (Amarelo Sol) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FDB813]/40 rounded-full blur-3xl opacity-70" />

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-[260px] sm:w-[320px] h-[550px] sm:h-[650px] bg-white rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-[#3E2723] shadow-[0_20px_50px_rgba(62,39,35,0.2)] flex flex-col overflow-hidden"
            >
                {/* Ecrã da App - Header (Amarelo) */}
                <div className="bg-[#FDB813] pt-10 sm:pt-12 pb-6 px-6 relative">
                    <div className="h-2 w-12 bg-[#3E2723]/20 rounded-full mb-6" />
                    <h3 className="text-[#3E2723] text-3xl font-black mb-1">Bom dia.</h3>
                    <p className="text-[#5D4037] text-sm font-medium">O que vamos aprender hoje?</p>
                </div>

                {/* Ecrã da App - Corpo (Creme) */}
                <div className="flex-1 bg-[#FFF9EC] p-4 space-y-4">

                    {/* Cartão 1 */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#FDE0B2]">
                        <div className="flex justify-between items-center mb-3">
                            <div className="h-3 w-16 bg-[#FDE0B2] rounded-full" />
                            <div className="h-7 w-7 rounded-full bg-[#FFF3E0] flex items-center justify-center shadow-sm">
                                <Play size={12} className="text-[#E67E22] ml-0.5" fill="currentColor" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-[#3E2723] mb-1">Moni ké?</h4>
                        <p className="text-sm text-[#5D4037] font-medium">Como estás?</p>
                    </div>

                    {/* Cartão 2 */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#FDE0B2] flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#2ECC71]/20 flex-shrink-0" />
                        <div className="space-y-2 w-full pt-1">
                            <div className="h-3 w-full bg-[#FDE0B2] rounded-full" />
                            <div className="h-3 w-2/3 bg-[#FDE0B2] rounded-full" />
                        </div>
                    </div>

                    {/* Cartão 3 (Exemplo de "Nova Lição") */}
                    <div className="bg-[#FFF3E0] p-4 rounded-2xl shadow-sm border border-[#FFE0B2] mt-2 opacity-80">
                        <div className="h-3 w-12 bg-[#FFE0B2] rounded-full mb-2" />
                        <div className="h-3 w-2/3 bg-[#FFE0B2] rounded-full" />
                    </div>
                </div>

                {/* Barra Home do Telemóvel */}
                <div className="bg-[#FFF9EC] pt-2 pb-4 flex justify-center">
                    <div className="h-1.5 w-1/3 bg-[#D7CCC8] rounded-full" />
                </div>
            </motion.div>
        </motion.div>
    );
}