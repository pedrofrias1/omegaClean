import { Link } from "react-router-dom";

function Card() {
    const buy = [
        { items: 'grey', title: 'Compra online de productos de limpieza', span: 'Aceptamos todos los medios de pago' },
        { items: 'img', title: 'Catálogo en PDF y más info', span: 'Accede desde aquí a toda la información' }
    ]
    return (
        <div className="flex flex-col gap-2">
            {
                buy.map((bey) => {
                    return <div className="card-header card-sm flex gap-2" id="cardHeader">
                        <div className="card-img ">
                            <a href="" className="elementor flex">
                                {bey.items === 'grey' ? <i class="bi bi-cart3 icons"></i> : <i class="bi bi-book icons"></i>}
                            </a>
                        </div>
                        <Link to={bey.items==="grey"?"/Comerce":"/"} className="flex flex-col  justify-center text-left">

                            <p className={bey.title === 'Compra online de productos de limpieza' ? "inerit" : "no-inerit"} >{bey.title}</p>
                            <span>{bey.span}</span>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}
export default Card;