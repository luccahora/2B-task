import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { AuthProvider } from "./auth/AuthContext";
import { PrivateRoute } from "./auth/PrivateRoute";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/" component={Home} />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
