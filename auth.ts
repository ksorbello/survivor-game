import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import nextAuthConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...nextAuthConfig,
  providers: [Credentials({}), GitHub],
});
