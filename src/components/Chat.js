import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { db, auth } from "../firebase";
import { Navbar } from "./Navbar";
import { SendMessage } from "./SendMessage";

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
      <Wrapper>
        <MsgWrapper>
          {messages.map(({ id, text, photoURL, uid }) => (
            <MsgItem
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <Photo src={photoURL} alt="" />
              <TextWrapper>
                <Text>{text}</Text>
              </TextWrapper>
            </MsgItem>
          ))}
        </MsgWrapper>
      </Wrapper>
      <SendMessage />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #242521;
`;

const MsgWrapper = styled.div`
  width: 70vw;
  margin: 80px 0;

  @media screen and (max-width: 680px) {
    width: 85vw;
  }
`;

const MsgItem = styled.div`
  display: flex;
`;

const Photo = styled.img`
  border-radius: 50%;
  margin: 20px;
  height: 50px;
  width: 50px;
`;

const TextWrapper = styled.div`
  border-radius: 5px;
  margin: 10px;
  display: flex;
  min-width: 150px;
  align-items: center;
  background: #0084ff;
`;

const Text = styled.p`
  padding-left: 14px;
  font-size: 16px;
  word-break: normal;

  color: white;
`;
