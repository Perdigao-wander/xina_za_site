"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Heart } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const infoPoints = [
    {
        icon: Target,
        iconBg: "bg-[#3498DB]/20", // Azul oceano translúcido
        iconColor: "text-[#2980B9]", // Azul escuro para contraste
        title: "O nosso objetivo",
        text: "Salvaguardar a herança linguística do Forro, Angolar e Lunguyê através de uma plataforma digital interativa, moderna e de fácil acesso.",
    },
    {
        icon: BookOpen,
        iconBg: "bg-[#2ECC71]/20", // Verde natureza translúcido
        iconColor: "text-[#27AE60]", // Verde escuro para contraste
        title: "Como funciona",
        text: "Uma metodologia baseada em lições práticas, repetição inteligente, áudios gravados por nativos e muito contexto sociocultural de cada ilha.",
    },
    {
        icon: Heart,
        iconBg: "bg-[#FDB813]/20", // Amarelo sol translúcido
        iconColor: "text-[#D35400]", // Laranja queimado para contraste
        title: "Para quem é",
        text: "Desenhada para a diáspora são-tomense, turistas, curiosos e locais que desejam reconectar-se orgulhosamente com as suas raízes.",
    },
];

export default function HeroSplit() {
    return (
        <section className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-[1200px] mx-auto overflow-hidden bg-[#FFF9EC]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <PhoneMockup />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
                    className="text-left"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723] mb-6 leading-tight tracking-tight">
                        Um arquivo vivo <br className="hidden lg:block" /> da nossa identidade.
                    </h2>
                    <p className="text-lg text-[#5D4037] mb-10 leading-relaxed font-medium">
                        A Xina Za nasceu com um propósito claro: democratizar o acesso e garantir a preservação digital dos dialetos de São Tomé e Príncipe. É muito mais do que uma app de línguas; é uma ponte entre gerações.
                    </p>

                    <div className="space-y-8">
                        {infoPoints.map(({ icon: Icon, iconBg, iconColor, title, text }) => (
                            <div key={title} className="flex gap-5 group">
                                <div className={`h-14 w-14 rounded-2xl ${iconBg} ${iconColor} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                                    <Icon size={26} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#3E2723] mb-2">{title}</h4>
                                    <p className="text-[#5D4037] leading-relaxed">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}