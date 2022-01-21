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
      <S>
        <Wrapper>
          {/* <SignOutButton /> */}
          <MsgWrapper>
            {messages.map(({ id, text, photoURL, uid }) => (
              <div>
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
              </div>
            ))}
          </MsgWrapper>
        </Wrapper>
      </S>{" "}
      1
      <SendMessage />
    </>
  );
};

const S = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #242526;
`;

const MsgWrapper = styled.div`
  width: 70vw;
  margin: 80px 0;
  // border-right: solid 2px #333;
  // border-left: solid 2px #333;

  @media screen and (max-width: 680px) {
    width: 85vw;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  margin: 20px;
  height: 50px;
  width: 50px;
`;

const MsgItem = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1em;
  word-break: normal;

  color: white;
`;
