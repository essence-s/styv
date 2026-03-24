import ahiseve from './../files/ahiseve2.png';
import bot from './../files/bot-whatsapp.png';
import darkpan from './../files/darkpan.png';
import ds from './../files/ds.png';
import ExternalLink from '../files/ExternalLink.astro';
import IconMail from '../files/IconMail.astro';
import p1 from './../files/p1.png';
import poke from './../files/poke.png';
import ApliIMC from './../files/ApliIMC.png';
import sonqu from './../files/sonqu.png';
import jhigger from './../files/jhigger.png';
import whatsappbsender from './../files/whatsappbsender.png';
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
} from '../files/tech';

const techs = {
  js: {
    name: 'Javascript',
    src: js.src,
  },
  html: {
    name: 'Html',
    src: html.src,
  },
  css: {
    name: 'Css',
    src: css.src,
  },
  ireact: {
    name: 'React',
    src: ireact.src,
  },
  astro: {
    name: 'Astro',
    src: astro.src,
  },
  nodejs: {
    name: 'Node',
    src: nodejs.src,
  },

  nextjs: {
    name: 'Next',
    src: nextjs.src,
  },
  tailwind: {
    name: 'Tailwind',
    src: tailwindcss.src,
  },
  nestjs: {
    name: 'Nestjs',
    src: nestjs.src,
  },
  prisma: {
    name: 'Prisma',
    src: prisma.src,
  },
  postgresql: {
    name: 'Postgresql',
    src: postgresql.src,
  },
  electron: {
    name: 'Electron',
    src: electron.src,
  },
  expo: {
    name: 'Expo',
    src: expo.src,
  },
};

export const PROJECTS = [
  {
    slug: 'ahiseve',
    imgWeb: ahiseve.src,

    video: 'https://www.youtube.com/embed/0dwZc8lXNII',
    techs: [techs.js, techs.html, techs.css, techs.ireact, techs.astro],
    title: 'Ahiseve',
    infoText:
      'En (BETA) Crea una sala con amigos y sincronice, controle, transmita un video',
    buttom: {
      title: 'Demo',
      icon: ExternalLink,
      link: 'https://ahiseve.vercel.app/',
    },
    repository_link: 'https://github.com/essence-s/ahiseve',
  },
  {
    slug: 'jhigger',
    imgWeb: jhigger.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.nextjs, techs.tailwind],
    title: 'JHIGGER',
    infoText: 'Web de juegos recreativos para niños',
    buttom: {
      title: 'Web',
      icon: ExternalLink,
      link: 'https://juegosjhigger.pe/',
    },
  },
  {
    slug: 'whatsapp-bulk-sender',
    imgWeb: whatsappbsender.src,
    video: 'https://www.youtube.com/embed/N_6wceSddAg',
    techs: [techs.electron, techs.expo, techs.tailwind, techs.js, techs.ireact],
    title: 'WhatsApp Bulk Sender Desktop App',
    infoText:
      'Una aplicación de escritorio que permite enviar mensajes de WhatsApp a múltiples contactos al mismo tiempo, incluyendo imágenes, archivos y documentos de forma rápida y sencilla.',
    buttom: {
      title: 'Ver Video',
      icon: ExternalLink,
    },
    repository_link: 'https://github.com/essence-s/school-manager',
  },
  {
    slug: 'sonqu',
    imgWeb: sonqu.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [
      techs.nextjs,
      techs.tailwind,
      techs.nestjs,
      techs.prisma,
      techs.postgresql,
    ],
    title: 'SONQU',
    infoText:
      'Una web de recetas de cocina , con un buscador y filtro de categorias',
    buttom: {
      title: 'Web',
      icon: ExternalLink,
      link: 'https://www.sonqu.pe/',
    },
  },

  {
    slug: 'landing-page',
    imgWeb: p1.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    title: 'Landing Page',
    infoText:
      'El diseño está optimizado para captar la atención de los visitantes en los primeros segundos',

    buttom: {
      title: 'Demo',
      icon: ExternalLink,
      link: 'https://essence-s.github.io/p1/',
    },
    repository_link: 'https://github.com/essence-s/p1',
  },
  {
    slug: 'bot-whatsapp',
    imgWeb: bot.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.nodejs],
    title: 'Bot de WhatsApp',
    infoText:
      'Permite buscar y descargar videos en diferentes calidades a traves del bot',
    buttom: {
      title: 'Pedir Prueba',
      icon: IconMail,
      link: 'mailto:styv2301@gmail.com',
    },
  },
  {
    slug: 'darkpan',
    imgWeb: darkpan.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    title: 'Darkpan',
    infoText: 'Este proyecto tiene animaciones simples y un diseño bonito.',
    buttom: {
      title: 'Demo',
      icon: ExternalLink,
      link: 'https://essence-s.github.io/darkpan/',
    },
    repository_link: 'https://github.com/essence-s/darkpan/',
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
  {
    slug: 'stats-pokemon',
    imgWeb: poke.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.js, techs.html, techs.css, techs.ireact],
    title: 'Stats Pokemon',
    infoText:
      'Buscar cualquier pokemon y ver sus estadisticas, evoluciones, etc.',
    buttom: {
      title: 'Demo',
      icon: ExternalLink,
      link: 'https://essence-s.github.io/poke/',
    },
    repository_link: 'https://github.com/essence-s/poke/',
  },
  {
    slug: 'peso-ideal',
    imgWeb: ApliIMC.src,
    // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techs: [techs.js, techs.html, techs.css],
    title: 'PESO IDEAL',
    infoText:
      'El proyecto calcula el peso ideal de una persona, te dice en que promedio estas.',
    buttom: {
      title: 'Demo',
      icon: ExternalLink,
      link: 'https://essence-s.github.io/ApliIMC/',
    },
  },
  // {
  //   imgWeb: VQ.src,
  //   link: "https://essence-s.github.io/video-question/",
  //   techs: [techs.js, techs.html, techs.css, techs.ireact],
  //   infoText: 'web - responder las preguntas con un video o audio',
  //
  // },
];
