import React from "react";
import styles from "./App.module.scss";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Planet from "./pages/planet";
import Header from "./Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/planets/mercury/overview"} />} />
        <Route path={"/planets/:name"} element={<Planet />}>
          <Route path={"/planets/:name/:menu"} element={<Planet />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
