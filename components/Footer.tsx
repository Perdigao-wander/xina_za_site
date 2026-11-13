"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../public/assets/Xina_za_transparente.png";

// ── Parceiros ────────────────────────────────────────────────────────────────
const PARTNERS = [
    { name: "Parceiro 1", src: "https://fakelogo.com/api/logo/12" }, // Exemplo com URL direta
    { name: "Parceiro 2", src: "/assets/partners/logoipsum-1.svg" }, // Exemplo com ficheiro local
    { name: "Parceiro 3", src: "/assets/partners/logoipsum-2.svg" },
    { name: "Parceiro 4", src: "/assets/partners/logoipsum-3.svg" },
];

// ── Desenvolvedor ────────────────────────────────────────────────────────────
const DEVELOPER = {
    name: "Wanderley Perdigão D'Olvieira Neto",
    role: "Developer",
    href: "https://github.com/Perdigao-wander",
};

export default function Footer() {
    return (
        <footer className="border-t border-[#FDE0B2] bg-[#FFF9EC] px-4 sm:px-6 py-10 sm:py-14">
            <div className="mx-auto max-w-[1400px]">

                {/* ── Linha única: Logo app • Parceiros • Selo STP ───────────────── */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 mb-10">

                    {/* Logo do app */}
                    <Link href="/" className="flex items-center gap-2 text-[#3E2723] hover:text-[#E67E22] transition-colors cursor-pointer flex-shrink-0 group">
                        <Image
                            width={32}
                            height={32}
                            src={logo}
                            alt="Xina Za"
                            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-lg font-bold tracking-tight">Xina Za</span>
                    </Link>

                    {/* Parceiros */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D35400] mr-1">
                            Parceiros
                        </span>
                        {PARTNERS.map((partner) => (
                            <motion.div
                                key={partner.name}
                                whileHover={{ y: -3 }}
                                className="group flex items-center justify-center h-10 w-20 rounded-xl bg-white border border-[#FDE0B2] px-2 py-1 shadow-[0_2px_10px_rgba(253,184,19,0.05)] hover:shadow-[0_5px_15px_rgba(253,184,19,0.2)] transition-all duration-300"
                                title={partner.name}
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    width={80}
                                    height={32}
                                    className="max-h-6 w-auto object-contain transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Selo STP */}
                    <div className="flex gap-4 flex-shrink-0">
                        <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-[#FDB813] text-[#3E2723] text-xs font-black shadow-md cursor-pointer"
                        >
                            STP
                        </motion.div>
                    </div>
                </div>

                <div className="h-px w-full bg-[#FDE0B2] mb-8" />

                {/* ── Base: links legais • copyright + desenvolvedor ──────────────── */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#5D4037] font-medium text-center md:text-left">

                    {/* Links legais */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <Link href="#" className="hover:text-[#E67E22] transition-colors">
                            Privacidade
                        </Link>
                        <Link href="#" className="hover:text-[#E67E22] transition-colors">
                            Termos
                        </Link>
                        <Link href="#" className="hover:text-[#E67E22] transition-colors">
                            Sobre nós
                        </Link>
                    </div>

                    {/* Copyright + Desenvolvedor na mesma linha */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <span>
                            &copy; {new Date().getFullYear()} Xina Za. Todos os direitos reservados.
                        </span>

                        {/* Separador visual (opcional) */}
                        <span className="hidden sm:block h-4 w-px bg-[#FDE0B2]" aria-hidden />

                        <Link
                            href={DEVELOPER.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#3E2723] font-bold hover:text-[#E67E22] transition-colors group"
                            title={DEVELOPER.role}
                        >
                            <span className="h-6 w-6 rounded-full bg-[#FDB813] text-[#3E2723] flex items-center justify-center text-[10px] font-black transition-transform duration-300 group-hover:scale-110">
                                XZ
                            </span>
                            <span className="text-sm">Desenvolvido por {DEVELOPER.name}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}