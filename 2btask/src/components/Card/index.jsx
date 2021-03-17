import React, { useRef, useContext } from "react";
import { useDrag } from "react-dnd";

import { Container, Label, Prioridade } from "./style";

export default function Card({ data }) {
  return (
    <Container>
      <p>{data.content}</p>
      <Prioridade>{data.priority}</Prioridade>
    </Container>
  );
}
