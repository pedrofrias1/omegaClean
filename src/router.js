import { BrowserRouter, Route , Routes } from "react-router-dom";
import React from "react";
import Home from "./home"
import Contacto from "./pages/contact";
import Comerce from "./pages/commerce";

function Router(params) {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contacto/>}/>
            <Route path="/Comerce" element={<Comerce/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router