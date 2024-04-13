import React from "react";
import {About} from "./components/About";
import {Navbar} from "./components/Navbar";
import {Carousel} from "./components/Carousel";
import {Cards} from "./components/Cards";
import {Testimonials} from "./components/Testimonials";
import {Contact} from "./components/Contact";
import {Hamb} from "./components/Hamburger";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      {/* <Hamb /> */}
      <About />
      <Carousel />
      <Cards /> 
      <Testimonials />
      <Contact />
    </main>
  );
}
