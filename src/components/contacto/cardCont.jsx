import "../components.css"
function CardCont() {

    const contenido = [
        { bi: 'bi bi-chat-text', title: 'Ayuda', sub: 'Telefonó & e-mail', parrafo: '387-619-5572', parrEmail:'omega.distribuciones.salta@gmail.com'},
        { bi: 'bi bi-geo-alt', title: 'Dirección', sub: 'Oficina', parrafo: 'ARIA VELAZQUEZ 773, Salta Capital' },
        { bi: 'bi bi-share-fill', title: 'Comunicación', sub: 'Formulario de contacto', parrafo: 'Envia tu consulta al formulario' }
    ]
    return (
        <section class="elementor-section elementor-element relative elementor mt-3" id="bajar">
            <div class="elementor-container relative flex lg-wrap sm:wrap ">

                {
                    contenido.map((cont) => {
                        return <div class="elementor-column relative flex elementor w-100">
                            <div class="elementor-widget-wrap elementor-element-populated w-100">
                                <div className="elementor-element elementor-widget">
                                    <div className="elementor-widget-container">
                                        <i className={cont.bi} id="icons-elementor"></i>
                                    </div>

                                </div>
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                        <h3 className="font-h3 title-cont">{cont.title} </h3>
                                    </div>

                                </div>
                                <div className="elementor-element">
                                        <div className="elementor-widget-container">
                                            <hr />
                                        </div>
                                </div>
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                            <h5 className="font-h5">{cont.sub} </h5>
                                    </div>
                                </div>
                                <div className="elementor-element">
                                    <div className="elementor-widget-container">
                                        <p className="p-elementor">{cont.parrafo} </p>
                                        <p className="p-elementor title-cont pointer">{cont.parrEmail} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
export default CardCont;