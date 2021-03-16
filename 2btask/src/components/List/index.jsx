import React from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card";

import { Container } from "./style";

export default function List() {
  return (
    <Container>
      <header>
        <h2>Tarefa</h2>

        <button type="button">
          <MdAdd size={24} color="#FFF" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}