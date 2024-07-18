import cif from "../img/commerce/cif.jpg";
import cifLavan from "../img/commerce/cif-lavandina.jpg";
import glade from "../img/commerce/glade.jpg";
import raidcuca from "../img/commerce/raid-cuca.jpg";
import raidgreen from "../img/commerce/raid-green.jpg";


function Component() {
    return (
        <div className="w-100 component-container mt-10">
            <section className="section-component section-component-lg section-component-md section-component-sm  ">
                <ul className="flex align-center ul-component w-100">
                    <div className="flex flex-col w-100 ">
                        <li className="box-li w-100 flex justify-center align-center">
                            <img src={cif} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <p className="text-black">Cif pisos</p>
                            <p className="text-black">Desinfectante 450ml </p>
                            <p className="text-black">$999,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div>

                    <div className="flex flex-col w-100">
                        <li className="box-li flex justify-center align-center">
                            <img src={cifLavan} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <h4 className="text-black">Cif gel</h4>
                            <p className="text-black">con lavandina 500ml </p>
                            <p className="text-black">$2.199,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div>

                    <div className="flex flex-col w-100">
                        <li className="box-li flex justify-center align-center">
                            <img src={glade} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <h4 className="text-black">Glade</h4>
                            <p className="text-black">vainilla 390ml </p>
                            <p className="text-black">$1.799,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div>

                    <div className="flex flex-col w-100">
                        <li className="box-li flex justify-center align-center">
                            <img src={raidcuca} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <h4 className="text-black">Raid Max</h4>
                            <p className="text-black">cucarachas y arañas 390ml </p>
                            <p className="text-black">$4.699,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div>


                    <div className="flex flex-col w-100">
                        <li className="box-li flex justify-center align-center">
                            <img src={raidgreen} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <h4 className="text-black">Raid (verde)</h4>
                            <p className="text-black">Polillas aerosol 390ml</p>
                            <p className="text-black">$2.999,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div>

                </ul>
            </section>
        </div>
    )
}
export default Component