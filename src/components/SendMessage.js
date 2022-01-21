import React, { useState } from "react";
import firebase from "firebase/compat/app";
import styled from "styled-components";
import { Input, Button } from "@material-ui/core";

import { db, auth } from "../firebase";

export const SendMessage = ({ scroll }) => {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <SendMsg>
          <Input
            style={{
              width: "70vw",
              maxWidth: "680px",
              fontSize: "14px",
              color: "white",
              fontWeight: "500",
              margin: "15px 10px 20px 10px",
              borderBottomColor: "white",
            }}
            inputProps={{ "aria-label": "description" }}
            placeholder="メッセージを入力"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            variant="outlined"
            style={{
              height: "40px",
              width: "100px",
              color: "#CBD5E0",
              border: "solid 1px grey",
              fontSize: "12px",
              fontWeight: "600",
              margin: "10px",
            }}
            type="submit"
          >
            送信
          </Button>
        </SendMsg>
      </form>
    </div>
  );
};

const SendMsg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  border: solid 2px #333;
  background: #242526;
`;
