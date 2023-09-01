import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";



const App = () => {
 return (
  <>
  <Sidebar />
  <main className='main'>
    <Home />
    <Work />
    <About />
    <Contact />
    <Resume />

  </main>
  </>
 )
  
}

export default App;
