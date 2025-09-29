export const METADATA = {
  home: {
    es: {
      TITLE: "Inicio",
      DESCRIPTION: "Bitácora pública sobre desarrollo, proyectos y aprendizajes. Minimalista, sin publicidad.",
      KEYWORDS: "blog, desarrollo, proyectos, aprendizaje, transparencia, minimalismo",
      AUTHOR: "Héctor Gutiérrez"
    },
    en: {
      TITLE: "Home",
      DESCRIPTION: "Open journal on building, projects, and learning. Minimalist, ad-free.",
      KEYWORDS: "blog, development, projects, learning, transparency, minimalism",
      AUTHOR: "Héctor Gutiérrez"
    }
  },
  blog: {
    es: {
      TITLE: "Blog",
      DESCRIPTION: "Reflexiones, avances y errores sobre micro-SaaS, trading cuantitativo y crear en abierto.",
      KEYWORDS: "micro-SaaS, trading cuantitativo, desarrollo, reflexiones, aprendizaje, bitácora",
      AUTHOR: "Héctor Gutiérrez"
    },
    en: {
      TITLE: "Blog",
      DESCRIPTION: "Thoughts, progress, and mistakes on micro-SaaS, quant trading, and open creation.",
      KEYWORDS: "micro-SaaS, quant trading, development, reflections, learning, journal",
      AUTHOR: "Héctor Gutiérrez"
    }
  },
  projects: {
    es: {
      TITLE: "Proyectos",
      DESCRIPTION: "Listado de proyectos personales, ideas y experimentos en desarrollo.",
      KEYWORDS: "proyectos, desarrollo, ideas, experimentos, portfolio",
      AUTHOR: "Héctor Gutiérrez"
    },
    en: {
      TITLE: "Projects",
      DESCRIPTION: "List of personal projects, ideas, and experiments in progress.",
      KEYWORDS: "projects, development, ideas, experiments, portfolio",
      AUTHOR: "Héctor Gutiérrez"
    }
  }
};
import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sailing Notes",
  EMAIL: "hectorgutialo@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/hectorgutix",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Hecatonquiros"
  }
];
