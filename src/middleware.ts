import type { MiddlewareHandler } from 'astro';

// Redirect root "/" to "/es/" by default. Adjust as needed.
export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url } = context;
  const { pathname } = new URL(url);
  if (pathname === '/') {
    return context.redirect('/es/');
  }
  return next();
};
