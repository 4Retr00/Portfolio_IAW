export default function Proyectos() {
    return(
        <main>
            <div className="webs" id="webs" >
                <h1 className="titulo1">Proyectos</h1>
                <div className="trabajo">
                    <a href="https://react-notes-afp.netlify.app/" className="trabajo1" target="_blank">
                    <h1>React Notes</h1>
                    <img src="./assets/img/react_notes.png" alt=""/>
                    </a>

                    <a href="https://rocket-store-afp.netlify.app/" className="trabajo1" target="_blank">
                        <h1>Rocket Store</h1>
                        <img src="./assets/img/rocket_store.png" alt=""/>
                    </a>

                    <a href="https://out-tours-afp.netlify.app/" className="trabajo1" target="_blank">
                        <h1>Out Tours</h1>
                        <img src="./assets/img/tours.png" alt=""/>
                    </a>
                </div>
            </div>
        </main>
    )
}