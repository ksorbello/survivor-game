import NextAuth from "next-auth";
import nextAuthConfig from "./auth.config";

export default NextAuth(nextAuthConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export { auth as middleware } from "./auth";