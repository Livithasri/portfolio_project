import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}>
        </Route>
        <Route path="/services" element={<Services/>}/>
       
        <Route path="/works" element={<Works/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

     
      <Footer/>
      
    </div>
  );
}

export default App;
