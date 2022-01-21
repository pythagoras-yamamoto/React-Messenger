import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { db, auth } from "../firebase";
import { Navbar } from "./Navbar";
import { SendMessage } from "./SendMessage";
import { SignOutButton } from "./auth/SignOutButton";

export const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <Navbar />
      <SignOutButton />
      <Wrapper>
        <MsgWrapper>
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))}
        </MsgWrapper>
      </Wrapper>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const MsgWrapper = styled.div`
  width: 70vw;

  @media screen and (max-width: 680px) {
    width: 100vw;
    margin: 0 20px;
  }
`;
