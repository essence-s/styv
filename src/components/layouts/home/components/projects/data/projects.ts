import ahiseve from './../files/ahiseve.png';
import bot from './../files/bot-whatsapp.png';
import darkpan from './../files/darkpan.png';
import ds from './../files/ds.png';
import ExternalLink from './../files/ExternalLink.astro';
import IconMail from './../files/IconMail.astro';
import p1 from './../files/p1.png';
import poke from './../files/poke.png';
import ApliIMC from './../files/ApliIMC.png';
import sonqu from './../files/sonqu.png';
import jhigger from './../files/jhigger.png';
import {
	astro,
	css,
	html,
	ireact,
	js,
	nestjs,
	nextjs,
	nodejs,
	postgresql,
	prisma,
	tailwindcss,
} from './../files/tech';

const techs = {
	js: {
		name: 'javascript',
		src: js.src,
	},
	html: {
		name: 'html',
		src: html.src,
	},
	css: {
		name: 'css',
		src: css.src,
	},
	ireact: {
		name: 'react',
		src: ireact.src,
	},
	astro: {
		name: 'astro',
		src: astro.src,
	},
	nodejs: {
		name: 'node',
		src: nodejs.src,
	},

	nextjs: {
		name: 'next',
		src: nextjs.src,
	},
	tailwind: {
		name: 'tailwind',
		src: tailwindcss.src,
	},
	nestjs: {
		name: 'nestjs',
		src: nestjs.src,
	},
	prisma: {
		name: 'prisma',
		src: prisma.src,
	},
	postgresql: {
		name: 'postgresql',
		src: postgresql.src,
	},
};

export const PROJECTS = [
	{
		imgWeb: ahiseve.src,
		link: 'https://ahiseve.vercel.app/',
		techs: [techs.js, techs.html, techs.css, techs.ireact, techs.astro],
		title: 'Ahiseve',
		infoText:
			'En (BETA) Crea una sala con amigos y sincronize, controle, transmita un video',
		buttom: {
			title: 'Demo',
			icon: ExternalLink,
		},
		repository_link: 'https://github.com/essence-s/ahiseve',
	},
	{
		imgWeb: bot.src,
		link: 'mailto:styv2301@gmail.com',
		techs: [techs.nodejs],
		title: 'Bot de WhatsApp',
		infoText:
			'Permite buscar y descargar videos en diferentes calidades a traves del bot',
		buttom: {
			title: 'Pedir Prueba',
			icon: IconMail,
		},
		// repository_link: 'https://github.com/essence-s',
	},
	{
		imgWeb: p1.src,
		link: 'https://essence-s.github.io/p1/',
		techs: [techs.js, techs.html, techs.css, techs.ireact],
		title: 'Landing Page',
		infoText:
			'El diseño está optimizado para captar la atención de los visitantes en los primeros segundos',

		buttom: {
			title: 'Demo',
			icon: ExternalLink,
		},
		repository_link: 'https://github.com/essence-s/p1',
	},

	{
		imgWeb: sonqu.src,
		link: 'https://www.sonqu.pe/',
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
		},
	},
	{
		imgWeb: jhigger.src,
		link: 'https://juegosjhigger.pe/',
		techs: [techs.nextjs, techs.tailwind],
		title: 'JHIGGER',
		infoText: 'Web de juegos recreativos para niños',
		buttom: {
			title: 'Web',
			icon: ExternalLink,
		},
	},
	{
		imgWeb: darkpan.src,
		link: 'https://essence-s.github.io/darkpan/',
		techs: [techs.js, techs.html, techs.css, techs.ireact],
		title: 'Landing Page',
		infoText: 'Este proyecto tiene animaciones simples y un diseño bonito.',
		buttom: {
			title: 'Demo',
			icon: ExternalLink,
		},
		repository_link: 'https://github.com/essence-s/darkpan/',
	},

	{
		imgWeb: ds.src,
		link: 'https://essence-s.github.io/ds/',
		techs: [techs.js, techs.html, techs.css, techs.ireact],
		title: 'Web Empresarial',
		infoText: 'Web con diseño mas empresarial, con slider hero.',
		buttom: {
			title: 'Demo',
			icon: ExternalLink,
		},
		repository_link: 'https://github.com/essence-s/ds/',
	},
	{
		imgWeb: poke.src,
		link: 'https://essence-s.github.io/poke/',
		techs: [techs.js, techs.html, techs.css, techs.ireact],
		title: 'Stats Pokemon',
		infoText:
			'Buscar cualquier pokemon y ver sus estadisticas, evoluciones, etc.',
		buttom: {
			title: 'Demo',
			icon: ExternalLink,
		},
		repository_link: 'https://github.com/essence-s/poke/',
	},

	{
		imgWeb: ApliIMC.src,
		link: 'https://essence-s.github.io/ApliIMC/',
		techs: [techs.js, techs.html, techs.css],
		title: 'PESO IDEAL',
		infoText:
			'El proyecto calcula el peso ideal de una persona, te dice en que promedio estas.',
		buttom: {
			title: 'Demo',
			icon: ExternalLink,
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
