import { clerkMiddleware } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const publicRoutes = ['/', '/products(.*)', '/about'];

export default clerkMiddleware({
  publicRoutes: publicRoutes
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};