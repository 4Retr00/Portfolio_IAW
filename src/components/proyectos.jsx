export default function Proyectos() {
    return(
        <main>
            <div className="webs" id="webs" >
                <h1 className="titulo1">Trabajos</h1>
                <div className="trabajo">
                    <a href="https://academia-de-hackers-retr0.netlify.app" className="trabajo1" target="_blank">
                    <h1>Academia Hackers</h1>
                    <img src="./assets/img/academiahackers.png" alt=""/>
                    </a>

                    <a href="https://porta-aventura-retr0.netlify.app" className="trabajo1" target="_blank">
                        <h1>Porta Aventura</h1>
                        <img src="./assets/img/portaaventura.png" alt=""/>
                    </a>

                    <a href="https://3djuegos-retr0.netlify.app" className="trabajo1" target="_blank">
                        <h1>3D Juegos</h1>
                        <img src="./assets/img/3djuegos.png" alt=""/>
                    </a>
                </div>
            </div>
        </main>
    )
}