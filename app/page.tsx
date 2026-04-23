"use client";

import Image from "next/image";
import logo from "../public/assets/Xina_za_header_transparente_preview.png";
import Link from "next/link";
import {
  BookOpen,
  Globe,
  Volume2,
  Users,
  TrendingUp,
  Headphones,
  MessageCircle,
  PlayCircle,
  Smartphone,
  Apple,
  Construction,
  Clock,
  Mail,
  Bell,
} from "lucide-react";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
        {/* Header/Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <Image
                  width={150}
                  height={40}
                  src={logo}
                  alt="Xina Za Logo"
                  className="h-20 w-auto object-contain"
              />
            </div>

            <div className="flex gap-2">
{/*              <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Entrar
              </Link>*/}
              <button
                  disabled
                  className="rounded-lg bg-gray-400 px-4 py-2 text-sm font-medium text-white cursor-not-allowed"
              >
                Em Breve
              </button>
            </div>
          </div>
        </nav>

        <main>
          {/* Banner de Desenvolvimento */}
          <div className="bg-yellow-500/90 backdrop-blur-sm py-2 px-4">
            <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 text-sm font-medium text-yellow-900">
              <Construction size={16} />
              <span>🚧 Xina Za está em desenvolvimento - Lançamento previsto para breve!</span>
              <Bell size={16} />
            </div>
          </div>

          {/* Hero Section com Mockup do App */}
          <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Texto da Esquerda */}
                <div className="text-center lg:text-left">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1">
                  <span className="text-xs font-semibold text-green-700">
                    🇸🇹 Preservação Cultural
                  </span>
                  </div>
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Aprende Dialetos de
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {" "}
                      São Tomé e Príncipe
                  </span>
                  </h1>
                  <p className="mx-auto mb-8 text-lg text-gray-600 lg:mx-0">
                    Xina Za aproxima-te da riqueza linguística e cultural dos
                    dialetos de São Tomé e Príncipe. Aprende com áudios reais de
                    falantes nativos e lições estruturadas.
                  </p>

                  {/* Badge de Desenvolvimento */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
                    <Clock size={18} className="text-orange-600" />
                    <span className="text-sm font-semibold text-orange-700">
                    Em Desenvolvimento • Lançamento em Breve
                  </span>
                  </div>

                  {/* Botões de Download Desabilitados com Notificação */}
                  <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                    <button
                        disabled
                        className="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-6 py-3 text-white cursor-not-allowed transition-all opacity-60"
                    >
                      <Apple size={20} />
                      <div className="text-left">
                        <p className="text-xs">Em breve na</p>
                        <p className="text-sm font-semibold">App Store</p>
                      </div>
                    </button>
                    <button
                        disabled
                        className="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-6 py-3 text-white cursor-not-allowed transition-all opacity-60"
                    >
                      <Smartphone size={20} />
                      <div className="text-left">
                        <p className="text-xs">Em breve no</p>
                        <p className="text-sm font-semibold">Google Play</p>
                      </div>
                    </button>
                  </div>

                  {/* Formulário de Notificação */}
                  <div className="mt-8 rounded-xl bg-white/60 p-4 backdrop-blur-sm">
                    <p className="mb-2 text-sm font-semibold text-gray-700">
                      📧 Recebe novidades em primeira mão:
                    </p>
                    <div className="flex gap-2">
                      <input
                          type="email"
                          placeholder="O teu email"
                          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-400 focus:outline-none"
                      />
                      <button className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-sm font-medium text-white hover:from-green-700 hover:to-emerald-700">
                        Notificar-me
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Prometemos não enviar spam. Apenas novidades do lançamento!
                    </p>
                  </div>
                </div>

                {/* Mockup do Celular com Overlay "Em Breve" */}
                <div className="relative mx-auto flex justify-center">
                  <div className="relative">
                    {/* Sombra do celular */}
                    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-2xl" />

                    {/* Badge "Em Breve" sobre o mockup */}
                    <div className="absolute -top-3 -right-3 z-20 rounded-full bg-orange-500 px-3 py-1 shadow-lg">
                      <span className="text-xs font-bold text-white">🚧 Em Breve</span>
                    </div>

                    {/* Moldura do Celular com Overlay */}
                    <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[2.5rem] border-4 border-gray-800 bg-white shadow-2xl">
                      {/* Overlay de desenvolvimento */}
                      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <Construction size={40} className="mx-auto mb-2 text-white" />
                          <p className="text-sm font-bold text-white">Em Desenvolvimento</p>
                          <p className="text-xs text-white/80">Lançamento em breve</p>
                        </div>
                      </div>

                      {/* Tela do App (borrada) */}
                      <div className="h-full bg-gradient-to-b from-green-500 to-emerald-600 p-3 blur-[2px]">
                        {/* Status Bar */}
                        <div className="mb-2 flex justify-between text-xs text-white">
                          <span>9:41</span>
                          <span>📶 🔋</span>
                        </div>

                        {/* App Header */}
                        <div className="mb-3 flex items-center gap-1">
                          <div className="h-6 w-6 rounded-lg bg-white/20" />
                          <span className="text-xs font-bold text-white">
                          Xina Za
                        </span>
                        </div>

                        {/* Lição Atual */}
                        <div className="mb-3 rounded-xl bg-white/10 p-2">
                          <p className="text-[10px] text-white/70">LIÇÃO 1</p>
                          <p className="text-sm font-bold text-white">Saudações</p>
                          <div className="mt-1 h-1 w-full rounded-full bg-white/20">
                            <div className="h-1 w-2/3 rounded-full bg-white" />
                          </div>
                        </div>

                        {/* Card de Frase */}
                        <div className="mb-2 rounded-xl bg-white p-2">
                          <p className="text-xs font-semibold text-gray-800">
                            &quot;Moni ké?&quot;
                          </p>
                          <p className="text-[10px] text-gray-500">Como estás?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white/50 py-12 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">4+</p>
                  <p className="text-sm text-gray-600">Dialetos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">200+</p>
                  <p className="text-sm text-gray-600">Lições</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">1k+</p>
                  <p className="text-sm text-gray-600">Frases</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-sm text-gray-600">Falantes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold text-gray-900">
                  Como Funciona?
                </h2>
                <p className="text-gray-600">
                  Uma experiência completa para aprender dialetos
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Globe size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Exploração por Região
                  </h3>
                  <p className="text-gray-600">
                    Descobre dialetos organizados por região, com descrições
                    detalhadas e notas culturais autênticas.
                  </p>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Lições Estruturadas
                  </h3>
                  <p className="text-gray-600">
                    Aprende de forma progressiva com lições organizadas por nível
                    de dificuldade e temas do dia a dia.
                  </p>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Volume2 size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Áudio Nativo
                  </h3>
                  <p className="text-gray-600">
                    Cada frase tem gravações reais de falantes nativos para
                    praticares a pronúncia correta.
                  </p>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Frases Contextuais
                  </h3>
                  <p className="text-gray-600">
                    Aprende com frases completas, tradução clara e contexto de
                    uso para comunicar naturalmente.
                  </p>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Users size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Perfis de Falantes
                  </h3>
                  <p className="text-gray-600">
                    Conhece os falantes reais, com informações sobre região,
                    idade e autenticidade dos áudios.
                  </p>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Progresso Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Acompanha o teu desempenho e continua de onde paraste numa
                    jornada única e adaptada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Audio Preview Section */}
          <section className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-7xl text-center">
              <Headphones className="mx-auto mb-4 h-12 w-12" />
              <h2 className="mb-4 text-3xl font-bold">Ouve a Diferença</h2>
              <p className="mx-auto mb-8 max-w-2xl text-green-100">
                Experimenta o áudio autêntico de falantes nativos dos dialetos
                são-tomenses
              </p>
              <button disabled className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 font-semibold text-white cursor-not-allowed">
                <PlayCircle size={20} />
                Disponível em Breve
              </button>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <Mail className="mx-auto mb-4 h-12 w-12 text-green-600" />
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  Fica a par do lançamento!
                </h2>
                <p className="mb-6 text-gray-600">
                  Subscreve a newsletter e recebe novidades, dicas e acesso antecipado
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                      type="email"
                      placeholder="O teu melhor email"
                      className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:border-green-400 focus:outline-none"
                  />
                  <button className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white hover:from-green-700 hover:to-emerald-700">
                    Quero ser notificado
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-400">
                  🔒 Prometemos não partilhar o teu email. Apenas informações sobre a Xina Za.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Prepara-te para começar a tua jornada!
              </h2>
              <p className="mb-8 text-gray-600">
                Junta-te à comunidade Xina Za e preserva os dialetos de São Tomé
                e Príncipe
              </p>
              <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-8 py-3 font-semibold text-white shadow-lg cursor-not-allowed"
              >
                <Clock size={18} />
                Lançamento em Breve
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white/50 px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
              <div className="flex items-center gap-2">
                <Image
                    width={32}
                    height={32}
                    src={logo}
                    alt="Xina Za"
                    className="h-8 w-auto object-contain"
                />
                <span className="text-sm text-gray-600">
                Xina Za — Preservação Linguística
              </span>
              </div>
              <div className="flex gap-6">
                <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-green-600"
                >
                  Sobre
                </Link>
                <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-green-600"
                >
                  Privacidade
                </Link>
                <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-green-600"
                >
                  Termos
                </Link>
                <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-green-600"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}