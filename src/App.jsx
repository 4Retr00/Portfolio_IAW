import Navbar from "./components/navbar.jsx";
import Newsletter from "./components/newsletter/newsletter.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/styles.css";


export default function App() {
  return (
    <BrowserRouter>

      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}