import React from "react";
/* import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; */
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
