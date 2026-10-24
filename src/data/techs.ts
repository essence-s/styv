import astro from '@assets/tech/icon-astro.svg';
import css from '@assets/tech/icon-css3.png';
import html from '@assets/tech/icon-html.png';
import js from '@assets/tech/icon-javascript.png';
import react from '@assets/tech/react.svg';
import nodejs from '@assets/tech/nodejs.svg';
import nextjs from '@assets/tech/nextjs.svg';
import tailwindcss from '@assets/tech/tailwindcss.svg';
import nestjs from '@assets/tech/nestjs.svg';
import prisma from '@assets/tech/prisma.svg';
import postgresql from '@assets/tech/postgresql.svg';
import electron from '@assets/tech/electron.svg';
import expo from '@assets/tech/expo.svg';
import slint from '@assets/tech/slint.svg';
import rust from '@assets/tech/rust.svg';

export const TECHS = {
  astro: { name: 'Astro', src: astro.src },
  css: { name: 'CSS', src: css.src },
  html: { name: 'HTML', src: html.src },
  js: { name: 'JavaScript', src: js.src },
  react: { name: 'React', src: react.src },
  nodejs: { name: 'Node.js', src: nodejs.src },
  nextjs: { name: 'Next.js', src: nextjs.src },
  tailwind: { name: 'Tailwind', src: tailwindcss.src },
  nestjs: { name: 'NestJS', src: nestjs.src },
  prisma: { name: 'Prisma', src: prisma.src },
  postgresql: { name: 'PostgreSQL', src: postgresql.src },
  electron: { name: 'Electron', src: electron.src },
  expo: { name: 'Expo', src: expo.src },
  slint: { name: 'Slint', src: slint.src },
  rust: { name: 'Rust', src: rust.src },
} as const;

export type TechKey = keyof typeof TECHS;
