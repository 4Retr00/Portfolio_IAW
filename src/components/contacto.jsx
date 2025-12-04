import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useState } from "react";
import Swal from 'sweetalert2'


export default function Contacto() {
    
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const mostrarAlerta = (e) => {
        e.preventDefault();

        // salta si no hay datos vacios
        if (!nombre || !email || !mensaje) {
            Swal.fire({
                title: "Faltan datos",
                text: "Por favor completa todos los campos.",
                icon: "error"
            });
            return;
        }

        // Si esta todo relleneado salta
        Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Tu mensaje ha sido enviado correctamente.",
            icon: "success"
        });

        // vacia los datos al acabar de enviar
        setNombre("");
        setEmail("");
        setMensaje("");
    };


    return(
        <footer>
            <h2 className="titulo3">Contacto</h2>
        
            <div className="footer">

                <section className="izquierda" id="contacto">
                    <form className="contact-form" onSubmit={mostrarAlerta}>
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Tu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                <button type="submit">Enviar</button>
                    </form>
                </section>

                <aside className="derecha">
                    <h1>Informacion de Contacto</h1>
                    <p className="numero">+34 245 259 458</p>
                    <p className="correo">
                        <a href="#">afp00@iesemilidarder.com</a>
                    </p>
                    <div className="social">
                        <a href="https://github.com/4Retr00?tab=repositories" target="_blank" ><FaGithub /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                    <p className="copy">Copyright &copy; 2023 Antonio Portfolio</p>
                    <div className="news">
                        <a href="/newsletter" className="newsletter">Newsletter</a>
                    </div>
                </aside>
            </div>
        </footer>
    )
}