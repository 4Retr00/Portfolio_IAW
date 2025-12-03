export default function Proyectos() {
    return(
        <main>
            <div className="webs" id="webs" >
                <h1 className="titulo1">Trabajos</h1>
                <div className="trabajo">
                    <a href="https://academia-de-hackers-retr0.netlify.app" className="trabajo1" target="_blank">
                    <h1>React Notes</h1>
                    <img src="./assets/img/react_notes.png" alt=""/>
                    </a>

                    <a href="https://porta-aventura-retr0.netlify.app" className="trabajo1" target="_blank">
                        <h1>Rocket Store</h1>
                        <img src="./assets/img/rocket_store.png" alt=""/>
                    </a>

                    <a href="https://3djuegos-retr0.netlify.app" className="trabajo1" target="_blank">
                        <h1>Out Tours</h1>
                        <img src="./assets/img/tours.png" alt=""/>
                    </a>
                </div>
            </div>
        </main>
    )
}