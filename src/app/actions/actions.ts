"use server";

import { signIn } from "../../../auth";

export const userSignIn = async (provider) => {
  console.log("in signin");
  await signIn(provider);
};
