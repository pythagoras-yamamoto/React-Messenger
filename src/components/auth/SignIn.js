import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { Button } from "@material-ui/core";
import { Navbar } from "../Navbar";

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            padding: "30px",
            fontSize: "20px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    </>
  );
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};