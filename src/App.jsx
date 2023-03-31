import React from "react";
import styles from "./App.module.scss"
import { Link, Route, Routes } from "react-router-dom";
import Planet from "./pages/planet";
import Header from "./Header";


function App() {

  

  return (
    <main>
      
      <Header />

      <Routes>
          <Route
            path={"/planets/:name"}
            element={<Planet />}
          />
      </Routes>

    </ main>
  );
}

export default App;
