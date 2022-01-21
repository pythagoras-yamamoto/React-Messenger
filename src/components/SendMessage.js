import React, { useState } from "react";
import { db, auth } from "../firebase";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import { Input, Button } from "@material-ui/core";
import styled from "styled-components";

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
              width: "70%",
              fontSize: "14px",
              fontWeight: "500",
              marginRight: "10px",
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
              width: "10%",
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
  padding-top: 30px;
`;
