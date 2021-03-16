import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
  }

  button {
    width: 42px;
    height: 42px;
    border-radius: 18px;
    background: #3b5bfd;
    border: 0;
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
  }
`;