import React from "react";
import "./App.css";
import { Routes } from "routes";
import { Container } from "@chakra-ui/react";
import { NavBar } from "components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Container maxW="container.lg" centerContent>
        <Routes />
      </Container>
    </>
  );
}

export default App;
