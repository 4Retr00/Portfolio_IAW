export default function Comentarios() {
    return(
        <main>
            <div className="comentarios" id="comentarios">
                <h1>Lo que dice la gente</h1>
                <div className="coment">

                    <div className="card">
                        <div className="header">
                            <img src="./assets/img/coment01.jpg" alt=""/>
                            <p className="message">Tu página destaca con un diseño visualmente impactante</p>
                        </div>
                        <h2 className="name">Ben</h2>
                        <h4 className="name2">Director de Arte</h4>
                    </div>

                    <div className="card">
                        <div className="header">
                            <img src="./assets/img/coment02.jpg" alt=""/>
                            <p className="message">La página es fácil sumergirse fácilmente en el portafolio.</p>
                        </div>
                        <h2 className="name">Maria</h2>
                        <h4 className="name2">Consultora de Marketing</h4>
                    </div>

                    <div className="card">
                        <div className="header">
                            <img src="./assets/img/coment03.jpg" alt=""/>
                            <p className="message">La navegación es intuitiva, para los visitantes explorar sin esfuerzo</p>
                        </div>
                        <h2 className="name">Jen</h2>
                        <h4 className="name2">Manager</h4>
                    </div>

                    <div className="card">
                        <div className="header">
                            <img src="./assets/img/coment04.jpg" alt=""/>
                            <p className="message">La página impresiona con su diseño atractivo.</p>
                        </div>

                        <h2 className="name">Wilson</h2>
                        <h4 className="name2">Desarrollador Web</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}