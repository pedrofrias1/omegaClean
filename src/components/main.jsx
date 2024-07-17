import Card from "./cards";
import limpieza from "../img/limpieza.jpg"
import BtnContac from "../ui/btn/btnContact";
import Marcas from "./marcas";
import { Link } from "react-router-dom";

function Main() {
    return (
        <main className="main">
            <section className="flex justify-around align-center xl-section " id="contacto">
                <article className="flex flex-col justify-center align-center gap-2 art-about ">
                    <h2 className="omega-header font-h2">QUIENES <span className="somos">SOMOS</span></h2>
                    <p>Somos una distribuidora mayorista de productos de limpieza para el hogar.</p>
                    <p>Nuestro objetivo primordial es poder suplir las necesidades de nuestros clientes, orientandonos en la rápida entrega de pedidos, precios competitivos y calidad de productos.</p>
                    <Card />
                    <div className="flex align-start justify-around pt-4 direction">

                        <div className="flex flex-col pt-3">
                            <div className="card-img">
                                <i class="bi bi-geo-alt icons"></i>
                            </div>
                            <span className="pt-2">DIRECCION</span>
                            <span className="text-center">ARIA VELAZQUEZ 773</span>
                        </div>

                        <div className="flex flex-col pt-3">
                            <div className="card-img">
                                <i class="bi bi-telephone  icons"></i>
                            </div>
                            <span className="pt-2">
                                TELEFONO & E-MAIL
                            </span>
                            <span>387-619-5572</span>
                            <span>omega.distribuciones.salta@gmail.com</span>
                        </div>

                    </div>
                   <Link to="/Contact"><BtnContac/></Link> 
                </article>
                <img src={limpieza} alt="limpieza" className="limpieza-img w-100 pt-4" />
            </section>

            <section className="pt-24 pb-24 ">
                <hr className="linea"/>
                <h2 className="text-center font-h2 omega-header" id="empresas">MARCAS QUE <span className="somos font-semibold">REPRESENTAMOS</span></h2>
                <Marcas/>
            </section>

        </main>
    )
}
export default Main;