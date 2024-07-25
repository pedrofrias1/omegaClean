import { Fragment, useState } from "react";
import "../commerce.css"
import Nav from "../ui/nav"
import Component from "../ui/commerce";

function Comerce() {

    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0)


    

    return (


        <Fragment>
            <Nav itemsMenu={"commerce"}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />

            <main>
                <Component
                    
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                />
            </main>
        </Fragment>

    )
}
export default Comerce;