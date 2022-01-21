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
              maxWidth: "700px",
              fontSize: "14px",
              fontWeight: "500",
              marginRight: "14px",
              // marginBottom: "-5px",
            }}
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
              fontSize: "12px",
              fontWeight: "600",
              // margin: "5px",
              // margin: "4px 5% -13px 5%",
              // maxWidth: "200px",
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
`;
