"use client";

import { motion } from "framer-motion";
import { MapPin, Mic, Layers, ShieldCheck } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export default function FeaturesBento() {
    return (
        <section className="bg-[#FFF9EC] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
            <div className="mx-auto max-w-[1200px]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-10 sm:mb-12 text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3E2723]"
                >
                    Tudo o que precisas. <br className="sm:hidden" /> Num só lugar.
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[280px]"
                >
                    {/* Feature 1 - Mapeamento Cultural */}
                    <motion.div
                        variants={fadeUpItem}
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(253,184,19,0.08)] border border-[#FDB813]/20 hover:shadow-[0_8px_30px_rgba(253,184,19,0.15)] transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#3498DB]/20 text-[#2980B9] flex items-center justify-center mb-4 sm:mb-6 shadow-sm"
                            >
                                <MapPin size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3E2723] mb-2 sm:mb-3">
                                Mapeamento Cultural
                            </h3>
                            <p className="text-[#5D4037] font-medium max-w-sm text-sm sm:text-lg">
                                Descobre as nuances de cada ilha. O Xina Za contextualiza cada palavra com a sua região.
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-[0.08] transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                            <svg width="250" height="250" viewBox="0 0 100 100" fill="none" className="w-[150px] sm:w-[250px] h-auto">
                                <circle cx="50" cy="50" r="40" stroke="#3498DB" strokeWidth="8" strokeDasharray="10 10" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Feature 2 - Vozes Nativas */}
                    <motion.div
                        variants={fadeUpItem}
                        whileHover={{ y: -5 }}
                        className="bg-white/90 backdrop-blur-sm rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(253,184,19,0.08)] border border-[#FDB813]/20 hover:shadow-[0_8px_30px_rgba(253,184,19,0.15)] transition-all duration-300 group"
                    >
                        <div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#2ECC71]/20 text-[#27AE60] flex items-center justify-center mb-4 sm:mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                            >
                                <Mic size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3E2723] mb-2 sm:mb-3">
                                Vozes Nativas
                            </h3>
                            <p className="text-[#5D4037] font-medium text-sm sm:text-base">
                                Gravações em estúdio de locais.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Lições Inteligentes (Cartão Castanho Escuro) */}
                    <motion.div
                        variants={fadeUpItem}
                        whileHover={{ y: -5 }}
                        className="bg-[#3E2723] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between shadow-lg hover:shadow-[0_15px_40px_rgba(62,39,35,0.4)] transition-all duration-300 text-white group relative overflow-hidden"
                    >
                        {/* Brilho subtil no fundo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB813] opacity-10 blur-2xl rounded-full" />

                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white/10 text-[#FDB813] flex items-center justify-center mb-4 sm:mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110"
                            >
                                <Layers size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                                Lições Inteligentes
                            </h3>
                            <p className="text-[#D7CCC8] font-medium text-sm sm:text-base">
                                Do nível básico à fluência.
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 4 - Preservação Segura */}
                    <motion.div
                        variants={fadeUpItem}
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-[#FFF3E0] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(230,126,34,0.08)] border border-[#FFE0B2] hover:shadow-[0_8px_30px_rgba(230,126,34,0.15)] transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="relative z-10 w-full sm:w-2/3">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -10 }}
                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#FFE0B2] text-[#D35400] flex items-center justify-center mb-4 sm:mb-6 shadow-sm"
                            >
                                <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3E2723] mb-2 sm:mb-3">
                                Preservação Segura
                            </h3>
                            <p className="text-[#5D4037] font-medium text-sm sm:text-lg">
                                Um arquivo digital vivo que protege o património imaterial.
                            </p>
                        </div>

                        {/* Bolhas animadas (Amarelo Sol) */}
                        <div className="absolute right-4 sm:right-10 bottom-6 sm:bottom-10 flex gap-1 sm:gap-2 opacity-50 sm:opacity-100">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
                                    className="h-10 w-10 sm:h-16 sm:w-16 rounded-full border-2 sm:border-4 border-white shadow-sm bg-[#FDB813] flex items-center justify-center"
                                >
                                    <span className="text-[#3E2723] font-bold text-base sm:text-xl">{i}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}