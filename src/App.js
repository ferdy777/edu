import Aboutpage from "./Pages/Aboutpage";
import Campuspage from "./Pages/Campuspage";
import Contactpage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import Programpage from "./Pages/Programpage";
import Testimonialspage from "./Pages/Testimonialspage";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Programs/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import { Routes, Route } from "react-router-dom";
// import Videolayer from "./components/Videoplayer/Videolayer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
        <Route path="/programpage" element={<Programpage />}></Route>
        <Route path="/campuspage" element={<Campuspage />}></Route>
        <Route path="/testimonialspage" element={<Testimonialspage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
      {/* <Videolayer /> */}
    </>
  );
}

export default App;
