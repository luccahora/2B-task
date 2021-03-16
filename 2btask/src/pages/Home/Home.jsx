import React from "react";
import GlobalStyle from "../../styles/global";
import Navbar from "../../components/Navbar/Navbar";
import Board from "../../components/Board";
import Header from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Board />
      <GlobalStyle />
    </>
  );
};
