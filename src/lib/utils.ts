import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { translations } from "./i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string, lang: 'es' | 'en' = 'en') {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  const t = translations[lang];
  return `${readingTimeMinutes} ${t.readingTime}`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

export function getLanguageSwitchURL(currentPath: string, currentLang: 'es' | 'en', relatedSlug?: string): string {
  const targetLang = currentLang === 'es' ? 'en' : 'es';
  
  // Si estamos en la home
  if (currentPath === '/es/' || currentPath === '/en/') {
    return `/${targetLang}/`;
  }
  
  // Si estamos en blog o projects index
  if (currentPath === '/es/blog' || currentPath === '/en/blog') {
    return `/${targetLang}/blog`;
  }
  if (currentPath === '/es/projects' || currentPath === '/en/projects') {
    return `/${targetLang}/projects`;
  }
  
  // Si estamos en un post/proyecto específico y tiene relacionado
  if (relatedSlug) {
    if (currentPath.includes('/blog/')) {
      return `/${targetLang}/blog/${relatedSlug}`;
    }
    if (currentPath.includes('/projects/')) {
      return `/${targetLang}/projects/${relatedSlug}`;
    }
  }
  
  // Fallback: ir al índice correspondiente
  if (currentPath.includes('/blog/')) {
    return `/${targetLang}/blog`;
  }
  if (currentPath.includes('/projects/')) {
    return `/${targetLang}/projects`;
  }
  
  // Fallback general: home
  return `/${targetLang}/`;
}