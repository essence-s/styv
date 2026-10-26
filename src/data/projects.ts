import type { ImageMetadata } from 'astro';
import barrita from '@assets/projects/barrita.png';
import fondito from '@assets/projects/fondito.webp';
import ahiseve from '@assets/projects/ahiseve2.png';
import sonqu from '@assets/projects/sonqu.png';
import jhigger from '@assets/projects/jhigger.png';
import whatsapp from '@assets/projects/whatsappbsender.png';
import bot from '@assets/projects/bot-whatsapp.png';
import darkpan from '@assets/projects/darkpan.png';
import pokemon from '@assets/projects/poke.png';
import pesoIdeal from '@assets/projects/ApliIMC.png';
import landing from '@assets/projects/p1.png';
import type { TechKey } from './techs';

export type ProjectType = 'interface' | 'web' | 'app' | 'bot';
export type ProjectStatus = 'live' | 'beta' | 'wip' | 'archived';
export type ProjectKind = 'single' | 'collection';

export interface ProjectModule {
  name: string;
  description: string;
  icon: 'bar' | 'wallpaper' | 'dock' | 'menu';
  techs?: TechKey[];
  repo?: string;
  images?: ImageMetadata[];
}

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  video?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  type: ProjectType;
  kind?: ProjectKind;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  cover: ImageMetadata;
  coverAlt: string;
  images?: ImageMetadata[];
  techs: TechKey[];
  links: ProjectLinks;
  modules?: ProjectModule[];
  highlights?: string[];
}

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  interface: 'Interfaz',
  web: 'Web',
  app: 'App',
  bot: 'Bot',
};

export const PROJECTS: Project[] = [
  {
    slug: 'interfaz-escritorio',
    title: 'Interfaz de escritorio',
    tagline:
      'Un entorno de escritorio ligero para Linux: barra de estado, dock, wallpapers y menús rápidos.',
    description:
      'Conjunto de proyectos desarrollados con Rust y Slint para mejorar la interacción y personalización del escritorio Linux. Incluye una barra de estado con menús y accesos rápidos, además de un selector de fondos de pantalla con previsualización y organización por colecciones. Diseñado para ofrecer una experiencia ligera y eficiente en el uso de recursos.',
    type: 'interface',
    kind: 'collection',
    status: 'beta',
    featured: true,
    order: 1,
    cover: barrita,
    coverAlt:
      'Escritorio de Barrita con barra de estado, dock y gestor de ventanas',
    techs: ['rust', 'slint'],
    links: {},
    modules: [
      {
        name: 'Barrita',
        description:
          'Barra de estado con hora, batería, volumen, workspaces y accesos rápidos al sistema.',
        icon: 'bar',
        techs: ['rust', 'slint'],
        repo: 'https://github.com/essence-s/barrita',
        images: [barrita],
      },
      {
        name: 'Fondito',
        description:
          'Selector de fondos con previsualización, organización por colecciones y cambio al instante.',
        icon: 'wallpaper',
        techs: ['rust', 'slint'],
        images: [fondito],
        repo: 'https://github.com/essence-s/fondito',
      },
    ],
    highlights: [
      'Rust + Slint para mantener el consumo bajo.',
      'Barra de estado y selector de fondos de pantalla independientes.',
      'Diseñadas para integrarse con el escritorio Linux.',
    ],
  },
  {
    slug: 'ahiseve',
    title: 'Ahiseve',
    tagline:
      'Crea una sala con amigos y sincroniza, controla y transmite un video al mismo tiempo.',
    description:
      'Ahiseve es una sala virtual para ver videos acompañado. Permite crear una sala, compartir el enlace con amigos y mantener la reproducción sincronizada mientras se conversa. El proyecto está en beta y combina una interfaz minimalista con controles de reproducción compartidos.',
    type: 'web',
    status: 'beta',
    featured: true,
    order: 2,
    cover: ahiseve,
    coverAlt:
      'Pantalla de inicio de Ahiseve con el formulario para crear una sala',
    techs: ['js', 'html', 'css', 'react', 'astro'],
    links: {
      repo: 'https://github.com/essence-s/ahiseve',
      demo: 'https://ahiseve.vercel.app/',
      video: 'https://www.youtube.com/embed/0dwZc8lXNII',
    },
    highlights: [
      'Salas compartidas con enlace de invitación.',
      'Reproducción sincronizada para todos los participantes.',
      'Interfaz oscura y sin distracciones.',
    ],
  },
  {
    slug: 'jhigger',
    title: 'JHIGGER',
    tagline:
      'Web de juegos recreativos para niños con catálogo de imágenes e información.',
    description:
      'Sitio para una empresa de juegos recreativos infantiles. Incluye una portada promocional, un catálogo de productos con imágenes y fichas informativas, y una estructura pensada para que el negocio pueda mostrar su oferta de forma clara.',
    type: 'web',
    status: 'live',
    featured: false,
    order: 3,
    cover: jhigger,
    coverAlt: 'Portada de la web de JHIGGER',
    techs: ['nextjs', 'tailwind'],
    links: {
      demo: 'https://juegosjhigger.pe/',
    },
  },
  {
    slug: 'sonqu',
    title: 'SONQU',
    tagline:
      'Recetas de cocina con buscador, filtros por categoría y una experiencia editorial.',
    description:
      'SONQU es una web de recetas con un catálogo navegable, búsqueda por nombre y filtros por categoría. El proyecto incluye frontend, API y base de datos, cuidando la lectura de las recetas y la navegación desde el móvil.',
    type: 'web',
    status: 'live',
    featured: true,
    order: 4,
    cover: sonqu,
    coverAlt: 'Portada de SONQU con recetas destacadas',
    techs: ['nextjs', 'tailwind', 'nestjs', 'prisma', 'postgresql'],
    links: {
      demo: 'https://www.sonqu.pe/',
    },
    highlights: [
      'Buscador y filtros por categoría.',
      'Frontend y API construidos como un solo producto.',
      'Diseño responsive centrado en las recetas.',
    ],
  },
  {
    slug: 'whatsapp-bulk-sender',
    title: 'WhatsApp Bulk Sender',
    tagline:
      'Aplicación de escritorio para enviar mensajes, imágenes y archivos a varios contactos.',
    description:
      'Herramienta de escritorio que permite preparar una lista de contactos y enviar mensajes de WhatsApp con imágenes, archivos y documentos de forma rápida. La interfaz está pensada para trabajar con lotes grandes sin perder el control de lo que se envía.',
    type: 'app',
    status: 'live',
    featured: false,
    order: 5,
    cover: whatsapp,
    coverAlt: 'Interfaz de WhatsApp Bulk Sender',
    techs: ['electron', 'expo', 'tailwind', 'js', 'react'],
    links: {
      repo: 'https://github.com/essence-s/school-manager',
      video: 'https://www.youtube.com/embed/N_6wceSddAg',
    },
  },
  {
    slug: 'bot-whatsapp',
    title: 'Bot de WhatsApp',
    tagline:
      'Bot para buscar y descargar videos en distintas calidades desde una conversación.',
    description:
      'Bot de WhatsApp que recibe una búsqueda o un enlace y devuelve las opciones disponibles de video. El proyecto automatiza la descarga y la entrega de archivos, con una conversación simple como única interfaz.',
    type: 'bot',
    status: 'live',
    featured: false,
    order: 6,
    cover: bot,
    coverAlt: 'Conversación de ejemplo con el bot de WhatsApp',
    techs: ['nodejs'],
    links: {
      demo: 'mailto:styv2301@gmail.com',
      video: 'https://www.youtube.com/embed/WJa5N7iHHHs',
    },
  },
  {
    slug: 'darkpan',
    title: 'Darkpan',
    tagline:
      'Landing oscura con animaciones simples y un diseño cuidado al detalle.',
    description:
      'Ejercicio de diseño y maquetación: una landing page oscura con animaciones sutiles, secciones bien separadas y una jerarquía visual clara. El objetivo era construir una pieza visual atractiva sin sacrificar la legibilidad.',
    type: 'web',
    status: 'live',
    featured: false,
    order: 7,
    cover: darkpan,
    coverAlt: 'Portada de la landing Darkpan',
    techs: ['js', 'html', 'css', 'react'],
    links: {
      repo: 'https://github.com/essence-s/darkpan/',
      demo: 'https://essence-s.github.io/darkpan/',
    },
  },
  {
    slug: 'stats-pokemon',
    title: 'Stats Pokémon',
    tagline:
      'Busca cualquier Pokémon y consulta sus estadísticas, evoluciones y datos.',
    description:
      'Aplicación web que consume una API de Pokémon para mostrar estadísticas, tipos y evoluciones. Incluye búsqueda por nombre y una ficha visual con los datos principales de cada criatura.',
    type: 'web',
    status: 'live',
    featured: false,
    order: 8,
    cover: pokemon,
    coverAlt: 'Interfaz de Stats Pokémon',
    techs: ['js', 'html', 'css', 'react'],
    links: {
      repo: 'https://github.com/essence-s/poke/',
      demo: 'https://essence-s.github.io/poke/',
    },
  },
  {
    slug: 'peso-ideal',
    title: 'Peso ideal',
    tagline:
      'Calculadora que estima el peso ideal y muestra en qué rango se encuentra la persona.',
    description:
      'Aplicación pequeña que toma datos básicos de una persona y calcula su peso ideal, mostrando el resultado dentro de un rango. Un proyecto de práctica centrado en formularios, validación y respuesta inmediata.',
    type: 'web',
    status: 'live',
    featured: false,
    order: 9,
    cover: pesoIdeal,
    coverAlt: 'Calculadora de peso ideal',
    techs: ['js', 'html', 'css'],
    links: {
      demo: 'https://essence-s.github.io/ApliIMC/',
    },
  },
  {
    slug: 'landing-page',
    title: 'Landing Page',
    tagline:
      'Una landing pensada para captar la atención en los primeros segundos.',
    description:
      'Landing page con una portada directa, bloques de información y llamadas a la acción. El diseño prioriza el impacto visual y la lectura rápida en móvil y escritorio.',
    type: 'web',
    status: 'live',
    featured: false,
    order: 10,
    cover: landing,
    coverAlt: 'Portada de la landing page',
    techs: ['js', 'html', 'css', 'react'],
    links: {
      repo: 'https://github.com/essence-s/p1',
      demo: 'https://essence-s.github.io/p1/',
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export const CATALOG_PROJECTS = [...PROJECTS].sort((a, b) => a.order - b.order);

export const PROJECT_TYPE_COUNTS = PROJECTS.reduce(
  (counts, project) => {
    counts[project.type] = (counts[project.type] ?? 0) + 1;
    return counts;
  },
  {} as Record<ProjectType, number>
);

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);

export const getProjectHoverImages = (project: Project): ImageMetadata[] => {
  const images =
    project.kind === 'collection'
      ? (project.modules ?? []).flatMap((module) => module.images ?? [])
      : (project.images ?? []);

  const seen = new Set([project.cover.src]);

  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
};
