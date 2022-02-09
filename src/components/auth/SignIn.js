import React from "react";
import firebase from "firebase/compat/app";
import styled from "styled-components";

import { auth } from "../../firebase";
import { Button } from "@material-ui/core";
import { Navbar } from "../Navbar";

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <SignInWrapper>
        <Button
          style={{
            padding: " 15px 30px",
            fontSize: "14px",
            borderRadius: "0",
            fontWeight: "500",
            color: "white",
            background: "#242526",
            border: "solid 1px grey",
          }}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </SignInWrapper>
    </>
  );
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #333;
`;
