
function Footer() {
    const navigation = [
        { name: 'Contacto', href: '#contacto' },
        { name: 'Ubicación', href: '#contacto' },
        { name: 'Marcas', href: '#empresas' },
        // { name: 'FAQS', href: '#', current: false },
    ]

    return (
        <footer className="footer bg-gray-800 flex justify-between align-center gap-2 md-footer" id="ubicacion">

            <div className="flex flex-col align-center justify-start gap-2">
                <h4 className='log-omega text-xl'>OMEGA</h4>
                <p>Distribuidora mayorista de productos de limpieza</p>
                <div className="nav-footer">
                    {
                        navigation.map((item) => {
                            return <a
                                key={item.name}
                                href={item.href}
                                // aria-current={item.current ? 'page' : undefined}
                                className="flex"

                            >
                                {item.name}
                            </a>
                        }

                        )
                    }
                </div>

                <div className="flex gap-3 div-icon-footer">
                    <a href="https://www.instagram.com/omegasolucionesrl/"><i class="bi bi-instagram icons-footer"></i></a>

                    <a id="whatsapp" href="https://api.whatsapp.com/send?phone=3876195572&text=Hola%20,te%20asesoramos%20por
%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.">
                        <i class="bi bi-whatsapp icons-footer" ></i>
                    </a>

                </div>
            </div>



            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.9824116448995!2d-65.41391922485124!3d-24.761792177993815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3d95979d711%3A0x237a1b8d86568a6b!2sArias%20Vel%C3%A1squez%20733%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1720720275957!5m2!1ses-419!2sar" width="190" height="200"></iframe>








        </footer>
    )
}
export default Footer;