import React from "react";
import { authConfig } from "../../auth/config";
import { Container, Cards } from "./styles";
import Navbar from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};
