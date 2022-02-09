import React from "react";

import { auth } from "../../firebase.js";
import { Button } from "@material-ui/core";

export const SignOutButton = () => {
  return (
    <Button
      style={{
        padding: "20px",
        fontSize: "15px",
        borderRadius: "0",
        fontWeight: "600",
        color: "white",
        // zIndex: "1000",
      }}
      onClick={() => auth.signOut()}
    >
      Sign Out
    </Button>
  );
};
