import "../components.css"
import { motion } from "framer-motion"
import Card from "./card";
import Carrusel from "./carrusel";
import { Fragment } from "react";
import triangle from "../../img/triangle.png"

function Header() {
    return (
        <Fragment>


            <header className="header-mx header flex pt-5 justify-around items-center pb-10 lg-header">
                <div className="flex flex-col gap-2 items-center ">
                    <motion.div initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20
                        }}>
                        <h2 className="omega-header font-h2">OMEGA</h2>
                        <h1 className="limpieza font-h1 font-phone-h1">LIMPIEZA</h1>
                        <p className="limpieza-header">Mayorista de productos de limpieaza para el hogar</p>
                        <Card />
                    </motion.div>
                </div>

                <div className="big-circle ">
                    <Carrusel />

                </div>

            </header>
        </Fragment>
    )
}
export default Header;
