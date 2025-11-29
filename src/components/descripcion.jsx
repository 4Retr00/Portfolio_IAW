export default function Descripcion() {
    return (
        <main>
            <div className="descripcion" id="descripcion">
                <section className="izquierda">
                    <h1>Mi descripcion</h1>

                    <p>
                        Un entusiasta por el mundo de la informática, cuento con un título en Sistemas Microinformáticos y Redes, y en estos tiempos, 
                        me encuentro aprendiendo un grado superior en Administración de Sistemas Informáticos y Redes. 
                    </p>

                    <p>
                        A lo largo de este viaje, he cultivado una fusión única de habilidades técnicas y visión creativa, plasmadas en cada rincón de mi portafolio. 
                        Sino también mi capacidad para dotar de vida a ideas a través de la tecnología. 
                        Te invito a sumergirte en este compendio que refleja mi pasión y dedicación por el mundo de la informática
                    </p>

                    <dl>
                        <dt>Nombre completo:</dt>
                        <dd>Antonio Fernandez</dd>

                        <dt>Fecha de nacimiento:</dt>
                        <dd>12/08/2003</dd>

                        <dt>Website:</dt>
                        <dd>retr0.com</dd>

                        <dt>Gmail:</dt>
                        <dd>afp00@iesemilidarder.com</dd>
                    </dl>
                </section>

                <aside className="derecha">
                    <img src="./assets/img/descripcion.jpg" alt="" className="fotodesc"/>
                </aside>

            </div>
        </main>
    )
}