"use server";

import { signIn, signOut } from "../../../auth";

export const userLogin = async (formData) => {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
};

export const userLogout = async () => {
  await signOut({ redirectTo: "/" });
};
