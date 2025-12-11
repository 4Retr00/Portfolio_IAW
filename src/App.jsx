import Navbar from "./components/navbar.jsx";
import Newsletter from "./components/newsletter.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/styles.css";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

