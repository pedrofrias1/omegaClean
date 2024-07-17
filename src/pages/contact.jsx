import Nav from "../ui/nav"
import Footer from "../ui/footer"
import Header from "../components/contacto/header"
import Form from "../ui/form"
import { Fragment } from "react"

function Contacto(params) {
    return (
        <Fragment>
            <Nav/>
            <Header/>
            <main className="w-100 grey">
                <Form/>
            </main>

            <Footer/>

        </Fragment>
    )
}
export default Contacto