import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Six from "./pages/Six";
import Seven from "./pages/Seven";
import Eight from "./pages/Eight";
import Nine from "./pages/Nine";
import Ten from "./pages/Ten";
import Eleven from "./pages/Eleven";
import Twelve from "./pages/Twelve";
import Thirteen from "./pages/Thirteen";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
            <Route path="three" element={<Three />} />
            <Route path="four" element={<Four />} />
            <Route path="five" element={<Five />} />
            <Route path="six" element={<Six />} />
            <Route path="seven" element={<Seven />} />
            <Route path="eight" element={<Eight />} />
            <Route path="nine" element={<Nine />} />
            <Route path="ten" element={<Ten />} />
            <Route path="eleven" element={<Eleven />} />
            <Route path="twelve" element={<Twelve />} />

            <Route path="thirteen" element={<Thirteen />}>
              <Route path="/thirteen/home" element={<Twelve />} />
              <Route path="/thirteen/about" element={<About />} />
              <Route path="/thirteen/contact" element={<Contact />} />
              <Route path="/thirteen/login" element={<Twelve />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
