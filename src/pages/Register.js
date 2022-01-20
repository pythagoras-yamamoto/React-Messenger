import React from "react";
import styled from "styled-components";

export const Register = () => {
  return (
    <WWrapper>
      <Wrapper>
        <h2>アカウントを作成してチャットに参加！</h2>
        <Form>
          <div className="input-container">
            <input type="text" name="name" placeholder="ユーザー名" />
          </div>
          <div className="input-container">
            <input type="text" name="name" placeholder="パスワード" />
          </div>
        </Form>
      </Wrapper>
    </WWrapper>
  );
};

const WWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 70vw;z
`;

const Form = styled.form`
  margin: 0px 40px;

  .input-container {
    margin: 10px 0px;

    input {
      padding: 10px;
    }
  }
`;
