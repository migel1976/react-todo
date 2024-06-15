import Header from "./components/Header";
// import {tabs } from "./data";
// import TodoList from "./components/TodoList";
// import Button from "./components/Button/Button";
import TodoSection from "./components/TodoSection";
import ButtonSection from "./components/ButtonSection";
import { Fragment } from "react";
// import { useState } from "react";

function App(){

  return(
    // <Fragment>
    <>
      <Header />
      <main>
          <TodoSection />
          <ButtonSection />
      </main>
    </>
    // </Fragment>
  )
}
export default App;