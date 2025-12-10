import { useEffect, useState } from "react";

export default function Comentarios() {

    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        fetch("data/comentarios.json")  // ← ruta correcta
            .then(res => res.json())
            .then(data => setComentarios(data.comentarios));
    }, []);

    return (
        <main>
            <div className="comentarios" id="comentarios">
                <h1>Lo que dice la gente</h1>

                <div className="coment">
                    {comentarios.map(persona => (
                        <div className="card" key={persona.id}>
                            <div className="header">
                                <img src={persona.foto} alt={persona.nombre} />
                                <p className="message">{persona.mensaje}</p>
                            </div>
                            <h2 className="name">{persona.nombre}</h2>
                            <h4 className="name2">{persona.Cargo}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
