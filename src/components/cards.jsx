import "./components.css"
function Card() {

    const content = [
        { title: 'NUESTRA VISIÓN', description: 'Nuesta visión apunta a trabajar en conjunto con las empresas más grandes de la región y convertirnos así, en un aliado estratégico para su desarrollo.' },
        { title: 'NUESTRA MISIÓN ', description: 'Nuestra misión es solucionar los problemas de abastecimiento de nuestros clientes, ofresiendoles todo lo que requieran sin importar el tipo de producto o servicio.' }
    ]
    
    return (
        <div className="flex justify-center items-center gap-4 mt-3 lg-card-main">
           
                {
                    content.map((cont) => {
                        return <div className={cont.title==='NUESTRA VISIÓN'?"card orange":"card gray"} id="md-card">
                            <h3 className="text-lg text-slate-950 leading-6 font-semibold">{cont.title} </h3>
                            <p>{cont.description} </p>
                        </div>

                    })
                }
            
        </div>

    )
}
export default Card