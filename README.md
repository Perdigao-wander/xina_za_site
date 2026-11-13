# 🇸🇹 Xina Za | Landing Page

> **Plataforma digital para preservação, estudo e ensino dos dialetos e línguas de São Tomé e Príncipe (Forro, Angolar, Lunguyê, etc.)**

[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

## 📖 Sobre o Projeto

A **Xina Za** nasceu com um propósito claro: democratizar o acesso e garantir a preservação digital do património imaterial e linguístico de São Tomé e Príncipe. 

Este repositório contém o código-fonte da **Landing Page** oficial da aplicação, desenhada com uma interface moderna, minimalista (inspirada no ecossistema Google/Material) e com animações fluidas para captar o interesse de futuros utilizadores, recolher inscrições (waitlist) e divulgar as funcionalidades da app.

### ✨ Principais Funcionalidades da Página
- **Design Moderno e Responsivo**: Layout limpo, focado na usabilidade, desenhado para funcionar perfeitamente em dispositivos móveis, tablets e desktops.
- **Animações Fluidas**: Utilização do `framer-motion` para animações de scroll, elementos flutuantes (como o telemóvel em destaque) e interações *hover* realistas.
- **Bento Box UI**: Funcionalidades da app apresentadas num formato de grelha assimétrica, otimizada para leitura rápida.
- **Otimização SEO e OpenGraph**: Metadados configurados nativamente para partilha perfeita no WhatsApp, Twitter, Facebook e motores de busca.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para renderização e estruturação.
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização rápida e responsiva.
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações físicas e declarativas para React.
- **[Lucide React](https://lucide.dev/)** - Ícones limpos e consistentes.
- **[Geist Font](https://vercel.com/font)** - Tipografia moderna otimizada pela Vercel.

---

## 🚀 Como Executar Localmente

Para correres este projeto na tua máquina, certifica-te de que tens o [Node.js](https://nodejs.org/) instalado.

1. **Clona o repositório:**
   ```bash
   git clone [https://github.com/teu-usuario/xina-za-landing.git](https://github.com/teu-usuario/xina-za-landing.git)
   cd xina-za-landing

```

2. **Instala as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install

```


3. **Inicia o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev

```


4. **Abre no navegador:**
   Navega até [http://localhost:3000](http://localhost:3000) para veres a página a funcionar. A página atualiza-se automaticamente conforme editas o ficheiro `app/page.tsx`.

---

## 📂 Estrutura Principal

* `app/layout.tsx`: Configuração global de HTML, fontes, metadados (SEO) e definições do viewport.
* `app/page.tsx`: A página inicial (Hero section, Mockup flutuante, Features em Bento Box, secção de demonstração de áudio).
* `app/globals.css`: Variáveis CSS globais e injeção do Tailwind.
* `public/assets/`: Diretório onde se encontram o logo e outras imagens estáticas da plataforma.

---

## 🌍 Contribuição e Contacto

A Xina Za é um projeto de raízes são-tomenses, feito para o mundo. Se és linguista, falante nativo de Forro, Angolar ou Lunguyê, ou simplesmente um apaixonado pela cultura de STP e queres colaborar com a aplicação, entra em contacto!

---

## ☁️ Deploy

O deploy mais rápido e recomendado para aplicações Next.js é através da [Vercel](https://vercel.com/).
Podes consultar a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

*Orgulhosamente desenvolvido para preservar a identidade de São Tomé e Príncipe.* 🇸🇹
