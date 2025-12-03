import Presentacion from "./presentacion.jsx";
import Descipcion from "./descripcion.jsx";
import Proyectos from "./proyectos.jsx";
import Comentarios from "./comentarios.jsx";
import Contacto from "./contacto.jsx";

export default function Navbar() {
    return (
    <>
        <nav className="menu-nav">
            <div className="contenedor">
                
                <a href="/" className="titulo">Antonio Portfolio</a>

                <div className="categoria">
                    <ul>
                        <a href="#">Introduccion</a>
                        <a href="#descripcion">Sobre Mi</a>
                        <a href="#webs">Proyectos</a>
                        <a href="#comentarios">Comentarios</a>
                        <a href="#contacto">Contacto</a>
                    </ul>
                </div>
                <a href="./assets/img/foto1.jpg" download="foto1.jpg" className="descarga">Descargar</a>
            </div>

        </nav>

        <Presentacion/>
        <Descipcion/>
        <Proyectos/>
        <Comentarios/>
        <Contacto/>
    </>
    )
}