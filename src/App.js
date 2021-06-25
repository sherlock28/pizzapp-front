import React from "react";
import { Routes } from "routes";
import { Container } from "@chakra-ui/react";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container maxW="container.lg" centerContent>
        <Routes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
