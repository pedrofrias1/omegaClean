import { data } from "../data";

function Component({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) {

    const onnAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products])
        }

        setTotal(total+ product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    }
    
    
    return (
        <div className="w-100 component-container mt-10">
            
            <section className="section-component section-component-lg section-component-md section-component-sm  ">
                <ul className="flex align-center ul-component ul-lg w-100">


                    {data.map((product) =>
                        <div className="flex flex-col w-100 ">
                            <li className="box-li w-100 flex justify-center align-center">
                                <img src={product.img} alt="" className="img-component" />
                            </li>
                            <div className="cont-commerce w-100 py-2" data-id="1826">
                                <p className="text-black">{product.nameProduct} </p>
                                <p className="text-black">{product.desc} </p>
                                <p className="text-black">$ {product.price}</p>
                                <a className="btn " onClick={() => onnAddProduct(product)} data-product_id="1826">Añadir al carrito</a>
                            </div>

                        </div>
                    )}



                    {/* <div className="flex flex-col w-100">
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

                    </div> */}


                    {/* <div className="flex flex-col w-100">
                        <li className="box-li flex justify-center align-center">
                            <img src={raidgreen} alt="" className="img-component" />
                        </li>
                        <div className="cont-commerce w-100 ">
                            <h4 className="text-black">Raid (verde)</h4>
                            <p className="text-black">Polillas aerosol 390ml</p>
                            <p className="text-black">$2.999,00</p>
                            <button className="btn">Añadir</button>
                        </div>

                    </div> */}

                </ul>
            </section>
        </div>
    )
}
export default Component