import React from "react";
import "./components.css"
import BlemLogo from "../img/marcas/Blem-logo.png";
import Cif from "../img/marcas/cif.avif";
import epson from "../img/marcas/epson.svg";
import higienol from "../img/marcas/higienol.png";
// import homelite from "../img/homelite.png";
import philips from "../img/marcas/Philips.png";
import poett from "../img/marcas/poett.svg";
import media from "../img/marcas/Media-Naranja.png";
// import wassington from "../img/wassington.png";
import lysoform from "../img/marcas/Lysoform.png"
import rotoplas from "../img/marcas/rotoplas.svg";
import sony from "../img/marcas/Sony.png";
import kanji from "../img/marcas/kanji.svg"


export default function Marcas() {
   

    const imagenes = [
        { img: BlemLogo, href: "https://www.blem.com.ar/es-ar" },
        { img: Cif, href: "https://www.cif.com.ar/" },
        { img: epson, href: 'https://epson.com.ar/' },
        { img: higienol, href: 'https://www.higienol.com.ar/' },
        // { img: homelite, href: 'https://espanol.homelite.com/' },
        { img: philips, href: 'https://www.tienda.philips.com.ar/' },
        { img: poett, href: 'https://argentina.poett.com/' },
        { img: media, href: 'https://www.medianaranja.com.ar/' },
        { img: sony, href: 'https://store.sony.com.ar/' },
        // { img: wassington, href: 'https://wassington.com.ar/' },
        { img: lysoform, href: 'https://www.lysoform.com.ar/' },
        { img: rotoplas, href: 'https://rotoplas.com.ar/' },
        { img: kanji, href: 'https://kanji.com.ar/' }
    ]
    return (

        <div className="flex justify-around align-center pt-5 xl-marcas lg-marcas">

            {
                imagenes.map((imgen) => {
                    return <div className="">
                        <a href={imgen.href} target="_blank" rel="noreferrer">
                            <img src={imgen.img} alt="alt" className="img-marcas" />
                            </a>
                    </div>


                })
            }

        </div>








    );
}