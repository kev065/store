import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isFavoritesRoute = createRouteMatcher(['/favorites']);

export default clerkMiddleware(async (auth, req) => {
  // Await the resolved value of auth
  const authData = await auth();

  const userId = authData.userId;
  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  // Redirect unauthorized users from admin routes
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirect unauthenticated users from non-public routes
  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Handle authenticated access to `/favorites`
  if (isFavoritesRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
