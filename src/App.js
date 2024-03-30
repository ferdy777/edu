import Aboutpage from "./Pages/Aboutpage";
import Campuspage from "./Pages/Campuspage";
import Contactpage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import Programpage from "./Pages/Programpage";
import Testimonialspage from "./Pages/Testimonialspage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
        <Route path="/programpage" element={<Programpage />}></Route>
        <Route path="/campuspage" element={<Campuspage />}></Route>
        <Route path="/testimonialspage" element={<Testimonialspage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
