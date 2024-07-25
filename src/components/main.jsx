import Card from "./cards";
import limpieza from "../img/limpieza.jpg"
import BtnContac from "../ui/btn/btnContact";
import Marcas from "./marcas";
import { Link } from "react-router-dom";

function Main() {
    return (
        <main className="main">
            <section className="flex justify-around align-center xl-section " id="contacto">
                <article className="flex flex-col justify-center align-center gap-2 art-about w-100">
                    <h2 className="omega-header font-h2">QUIENES <span className="somos">SOMOS</span></h2>
                    <p className="">Somos una distribuidora mayorista de productos de limpieza para el hogar.</p>
                    <p className="">Nuestro objetivo primordial es poder suplir las necesidades de nuestros clientes, orientandonos en la rápida entrega de pedidos, precios competitivos y calidad de productos.</p>
                    <Card />
                    <div className="flex align-start justify-between pt-4 direction">

                        <div className="flex flex-col pt-3">
                            <div className="card-img">
                                <i class="bi bi-geo-alt icons"></i>
                            </div>
                            <span className="pt-2">DIRECCION</span>
                            <span className="pt-2">ARIA VELAZQUEZ 773</span>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.9824116448995!2d-65.41391922485124!3d-24.761792177993815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3d95979d711%3A0x237a1b8d86568a6b!2sArias%20Vel%C3%A1squez%20733%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1720720275957!5m2!1ses-419!2sar" width="190" height="200"></iframe>

                        </div>

                        <div className="flex flex-col pt-3">
                            <div className="card-img">
                                <i class="bi bi-telephone  icons"></i>
                            </div>
                            <span className="pt-2">
                                TELEFONO & E-MAIL
                            </span>
                            <span className="pt-2">387-619-5572</span>
                            <span className="pt-2">omega.distribuciones.salta@gmail.com</span>
                        </div>

                    </div>
                   <Link to="/Contact"><BtnContac/></Link> 
                </article>
                <img src={limpieza} alt="limpieza" className="w-100 pt-4" />
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