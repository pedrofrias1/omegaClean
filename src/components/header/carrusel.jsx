import blem from "../../img/blem.png"
import blemLimon from "../../img/blem-limon.png"
import blemNaranja from "../../img/blem-naranja.png"

function Carrusel() {

    const img = [
        { img: blem , alt:'imagen-1', span:'Blem brillo y protección'},
        { img: blemLimon , alt:'imagen-2', span:'Blem brillo y protección' },
        { img: blemNaranja, alt:'imagen-3', span:'Blem brillo y protección' }
    ]

    return (
        <div id="carouselExample" className="carousel slide ">
            <div className="carousel-inner ">
                {
                    img.map((imagen) => {
                        return <div className="carousel-item active" data-bs-interval="10000">
                            <img src={imagen.img} className="w-50 img-carousel ml-20 mt-12 " alt={imagen.alt} />
                            {/* <span className="text-center">{imagen.span} </span> */}
                        </div>
                    })
                }


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carrusel;