import BtnContact from "../../ui/contact-btn";
import CardCont from "./cardCont";

function Header() {
    return (
        <header className="grey">
            <section className="section-contact relative">
                <div className="elementor-381 flex wrap align-start relative w-100">
                <div class="elementor-background-overlay absolute w-100"></div>
                    <div className="elementor-text w-100 text-center">
                        <h2 className="font-h2 contactanos">CONTACTATANOS</h2>
                    </div>
                </div>

            </section>
            <BtnContact/>

            <CardCont/>
        </header>
    )
}
export default Header;