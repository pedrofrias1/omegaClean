import { Fragment } from "react";
import Nav from "./ui/nav"
import Main from "./components/main";
import Header from "./components/header/header";
import Footer from "./ui/footer";
function Home (){
    return(
        <Fragment>
                <Nav/>
                <Header/>
                <Main/>
                <Footer/>
        </Fragment>
    )
}
export default Home;