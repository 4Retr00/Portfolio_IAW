import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./newsletter.css";


export default function Newsletter() {
    return(
        <body className="newsletter-container">
            <main>

                <header className="header-container">
                    <img src="../assets/img/newsletter-portada1.png" alt=""/>
                </header>

                <section className="section-container">

                    <h1>Convencion</h1>
                    <h2>Navideña!!</h2>
                    <img src="../assets/img/estrella.png" alt=""/>
                    <h5>VIDEOJUEGOS Y CONCURSOS</h5>
                    <p>¡Sabemos cómo hacer una gran convención! Deliciosa comida festiva, mucho espíritu navideño y mucha diversión forman parte del menú para una noche espléndida. ¡Trae a tus amigos y colegas a pasar un rato fabuloso en la mejor fiesta de Navidad!</p>

                    <a href="/">Informate mas</a>
                </section>

                <footer className="footer-container">
                    <div className="social">
                                <a href="https://github.com/4Retr00?tab=repositories" target="_blank"  className=""><FaGithub /></a>
                                <a href="#" class=""><FaTwitter /></a>
                                <a href="#" class=""><FaInstagram /></a>
                                <a href="#" class=""><FaLinkedin /></a>
                                <a href="#" class=""><FaYoutube /></a>
                    </div>
            
                    <p>
                        Si cree que este mensaje le fue enviado por error, puede cancelar su <a href="#"> subscripcion</a>.
                        <br/>
                        Consulte nuestra <a href="#"> política de privacidad </a> para obtener más información.
                    </p>
                </footer>
            </main>
        </body>
        
    )
}