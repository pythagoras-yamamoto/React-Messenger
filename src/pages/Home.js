import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "../components/SignIn";
import { Chat } from "../components/Chat";

export const Home = () => {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />};</>;
};
