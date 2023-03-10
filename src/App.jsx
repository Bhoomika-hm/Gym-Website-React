import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Join from "./components/Join";
import Form from "./components/Form";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Feature/>
      <Join/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
