import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { authConfig } from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import { Container, Form } from "./styles";

export const Login = withRouter(({ history }) => {
  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await authConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
        alert("Insira seu email e senha ");
      }
    },
    [history]
  );

  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={loginHandler}>
        <h1>Oie, tudo bem?</h1>
        <p>Insira seu email e senha para acessar</p>

        <label>Email</label>
        <input type="email" name="email" />
        <label>Senha</label>
        <input type="password" name="password" />
        <button type="submit">ENTRAR</button>
      </Form>
    </Container>
  );
});
