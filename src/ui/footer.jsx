import { Link } from "react-router-dom";

function Footer() {


    return (
        <footer className="footer bg-gray-800 flex justify-between align-center gap-2 md-footer w-100" id="ubicacion">
            <div>
                <h4 className='log-omega text-xl'>OMEGA</h4>
                <p>Distribuidora mayorista de productos de limpieza</p>
            </div>

            <div className="flex flex-col align-center justify-center">
                <ul className="flex align-center gap-2">
                <Link to="/Contact"><li>Contacto</li></Link>
                    <li>Comprar</li>
                    <li>Ubicación</li>
                </ul>

                <span className="">2024 © ALL RIGHTS RESERVED</span>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex align-center gap-2">
                    <a href="https://www.instagram.com/omegasolucionesrl/"><i class="bi bi-instagram icons-footer"></i></a>

                    <a id="whatsapp" href="https://api.whatsapp.com/send?phone=3876195572&text=Hola%20,te%20asesoramos%20por
%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.">
                        <i class="bi bi-whatsapp icons-footer" ></i>
                    </a>
                </div>
                <div className="flex">
                    <span>omega.distribuciones.salta@gmail.com</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;