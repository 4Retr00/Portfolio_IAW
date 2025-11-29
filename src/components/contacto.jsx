import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Contacto() {
    return(
        <footer>
            <h2 className="titulo3">Contacto</h2>
        
            <div className="footer">

                <section className="izquierda" id="contacto">
                    <div className="contact-form">
                        <input type="text" placeholder="Nombre Completo"/>
                        <input type="email" placeholder="Tu Email"/>
                        <textarea placeholder="Mensaje"></textarea>
                        <button type="submit">Enviar</button>
                    </div>
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