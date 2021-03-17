import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { AuthProvider } from "./auth/AuthContext";
import { PrivateRoute } from "./auth/PrivateRoute";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <BrowserRouter>
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/" component={Home} />
        </BrowserRouter>
      </AuthProvider>
    </DndProvider>
  );
}

export default App;
