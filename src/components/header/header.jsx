import "../components.css"
// import { motion } from "framer-motion"
import Card from "./card";
import Carrusel from "./carrusel";
import { Fragment } from "react";

function Header() {
    return (
        <Fragment>


            <header className="header-mx header flex pt-5 justify-between items-center pb-10 lg-header header-container-sm">
                <div className="flex flex-col gap-2 header-container ">
                    <h2 className="omega-header font-h2">OMEGA</h2>
                        <h1 className="limpieza font-h1 font-phone-h1">LIMPIEZA</h1>
                            <div className="limpieza-header">
                               <p className="p-all">Mayorista de productos de limpieaza para el hogar</p>  
                            </div>
                    <Card />
                </div>

                <div className="big-circle ">
                    <Carrusel />

                </div>

            </header>
        </Fragment>
    )
}
export default Header;
