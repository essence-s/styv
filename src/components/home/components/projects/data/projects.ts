import ahiseve from './../files/ahiseve2.png';
import bot from './../files/bot-whatsapp.png';
import darkpan from './../files/darkpan.png';
import p1 from './../files/p1.png';
import poke from './../files/poke.png';
import ApliIMC from './../files/ApliIMC.png';
import sonqu from './../files/sonqu.png';
import jhigger from './../files/jhigger.png';
import whatsappbsender from './../files/whatsappbsender.png';
import barrita from './../files/barrita.png';
import {
  astro,
  css,
  electron,
  expo,
  html,
  ireact,
  js,
  nestjs,
  nextjs,
  nodejs,
  postgresql,
  prisma,
  tailwindcss,
  slint,
  rust,
} from '../files/tech';

const techs = {
  js: { name: 'Javascript', src: js.src },
  html: { name: 'Html', src: html.src },
  css: { name: 'Css', src: css.src },
  ireact: { name: 'React', src: ireact.src },
  astro: { name: 'Astro', src: astro.src },
  nodejs: { name: 'Node', src: nodejs.src },
  nextjs: { name: 'Next', src: nextjs.src },
  tailwind: { name: 'Tailwind', src: tailwindcss.src },
  nestjs: { name: 'Nestjs', src: nestjs.src },
  prisma: { name: 'Prisma', src: prisma.src },
  postgresql: { name: 'Postgresql', src: postgresql.src },
  electron: { name: 'Electron', src: electron.src },
  expo: { name: 'Expo', src: expo.src },
  slint: { name: 'Slint', src: slint.src },
  rust: { name: 'Rust', src: rust.src },
};

export const PROJECTS = [
  {
    slug: 'ahiseve',
    imgWeb: ahiseve.src,
    title: 'Ahiseve',
    infoText:
      'En (BETA) Crea una sala con amigos y sincronice, controle, transmita un video',
    techs: [techs.js, techs.html, techs.css, techs.ireact, techs.astro],
    video: 'https://www.youtube.com/embed/0dwZc8lXNII',
    repository: 'https://github.com/essence-s/ahiseve',
    demo: { text: 'Demo', url: 'https://ahiseve.vercel.app/' },
  },
  {
    slug: 'statusbar',
    imgWeb: barrita.src,
    title: 'Barrita',
    infoText: 'Una barra de estado para mostrar informacion basica del sistema',
    techs: [techs.rust, techs.slint],
    // video: 'https://www.youtube.com/embed/0dwZc8lXNII',
    repository: 'https://github.com/essence-s/barrita',
    // demo: { text: 'Demo', url: 'https://ahiseve.vercel.app/' },
  },
  {
    slug: 'jhigger',
    imgWeb: jhigger.src,
    title: 'JHIGGER',
    infoText: 'Web de juegos recreativos para niños',
    techs: [techs.nextjs, techs.tailwind],
    demo: { text: 'Demo', url: 'https://juegosjhigger.pe/' },
  },
  {
    slug: 'whatsapp-bulk-sender',
    imgWeb: whatsappbsender.src,
    title: 'WhatsApp Bulk Sender Desktop App',
    infoText:
      'Una aplicación de escritorio que permite enviar mensajes de WhatsApp a múltiples contactos al mismo tiempo, incluyendo imágenes, archivos y documentos de forma rápida y sencilla.',
    techs: [techs.electron, techs.expo, techs.tailwind, techs.js, techs.ireact],
    video: 'https://www.youtube.com/embed/N_6wceSddAg',
    repository: 'https://github.com/essence-s/school-manager',
    // demo: { text: 'Ver Video', url: 'https://www.youtube.com/watch?v=N_6wceSddAg' },
  },
  {
    slug: 'sonqu',
    imgWeb: sonqu.src,
    title: 'SONQU',
    infoText:
      'Una web de recetas de cocina , con un buscador y filtro de categorias',
    techs: [
      techs.nextjs,
      techs.tailwind,
      techs.nestjs,
      techs.prisma,
      techs.postgresql,
    ],
    demo: { text: 'Web', url: 'https://www.sonqu.pe/' },
  },
  {
    slug: 'landing-page',
    imgWeb: p1.src,
    title: 'Landing Page',
    infoText:
      'El diseño está optimizado para captar la atención de los visitantes en los primeros segundos',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    repository: 'https://github.com/essence-s/p1',
    demo: { text: 'Demo', url: 'https://essence-s.github.io/p1/' },
  },
  {
    slug: 'bot-whatsapp',
    imgWeb: bot.src,
    title: 'Bot de WhatsApp',
    infoText:
      'Permite buscar y descargar videos en diferentes calidades a traves del bot',
    techs: [techs.nodejs],
    video: 'https://www.youtube.com/embed/WJa5N7iHHHs',
    demo: { text: 'Pedir Prueba', url: 'mailto:styv2301@gmail.com' },
  },
  {
    slug: 'darkpan',
    imgWeb: darkpan.src,
    title: 'Darkpan',
    infoText: 'Este proyecto tiene animaciones simples y un diseño bonito.',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    repository: 'https://github.com/essence-s/darkpan/',
    demo: { text: 'Demo', url: 'https://essence-s.github.io/darkpan/' },
  },
  {
    slug: 'stats-pokemon',
    imgWeb: poke.src,
    title: 'Stats Pokemon',
    infoText:
      'Buscar cualquier pokemon y ver sus estadisticas, evoluciones, etc.',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    repository: 'https://github.com/essence-s/poke/',
    demo: { text: 'Demo', url: 'https://essence-s.github.io/poke/' },
  },
  {
    slug: 'peso-ideal',
    imgWeb: ApliIMC.src,
    title: 'PESO IDEAL',
    infoText:
      'El proyecto calcula el peso ideal de una persona, te dice en que promedio estas.',
    techs: [techs.js, techs.html, techs.css],
    demo: { text: 'Demo', url: 'https://essence-s.github.io/ApliIMC/' },
  },
  // {
  //   slug: 'web-empresarial',
  //   imgWeb: ds.src,
  //   link: 'https://essence-s.github.io/ds/',
  //   // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  //   techs: [techs.js, techs.html, techs.css, techs.ireact],
  //   title: 'Web Empresarial',
  //   infoText: 'Web con diseño mas empresarial, con slider hero.',
  //   buttom: {
  //     title: 'Demo',
  //     icon: ExternalLink,
  //   },
  //   repository_link: 'https://github.com/essence-s/ds/',
  // },
  // {
  //   imgWeb: VQ.src,
  //   link: "https://essence-s.github.io/video-question/",
  //   techs: [techs.js, techs.html, techs.css, techs.ireact],
  //   infoText: 'web - responder las preguntas con un video o audio',
  //
  // },
];
