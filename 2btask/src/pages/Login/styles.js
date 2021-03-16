import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #546099;
`;

export const Form = styled.form`
  background-color: #f0f0f5;
  width: 550px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;

  img {
    height: 70px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
    margin-bottom: 30px;
    color: #929292;
  }

  label {
    font-weight: bold;
  }

  input {
    color: #3a3a3a;
    width: 55%;
    height: 10px;
    padding: 10px;
    margin-top: 7px;
    margin-bottom: 12px;
    padding: 12px 20px;
    border-radius: 5px;
    border: 2px solid #fff;
    font-weight: bold;
    &:focus-within {
      border: 2px solid #fc6963;
    }
  }

  button {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #fc6963;
    height: 50px;
    border: 0;
    border-radius: 5px;
    margin-top: 10px;
    width: 60%;
    transition: background-color 0.3s;

    &:hover {
      background: #b54743;
    }
  }
`;
