import style from '../Footer/Footer.module.scss'
import { SignupForm } from '../SignupForm/SignupForm'

const 

export function Footer(props) {
    return (
        <>
            <section className={style.footerSection}>
                <div>
                    <SignupForm/>
                </div>
                <div>
                    <h5 className={style.footerSecondHeaders}>Quick Lines</h5>
                    <ul>
                        <li>Hjem</li>
                        <li>Om os</li>
                        <li>Prisliste</li>
                        <li>Booking</li>
                        <li>Newsletter</li>
                        <li>Kontakt</li>
                    </ul>
                    <h5 className={style.footerSecondHeaders}>Follow Us</h5>
                    <span className = {style.FooterCirces}></span>
                    <span className = {style.FooterCirces}></span>
                    <span className = {style.FooterCirces}></span>
                </div>
                <div>
                    <h5 className={style.footerSecondHeaders}>Find Us</h5>
                    <ul>
                        <li>WhatsApp</li>
                        <li>+45 23 43 43 43</li>
                    </ul>
                    <ul>
                        <li>Telefonnummer</li>
                        <li>+45 58 84 84 84</li>
                    </ul>
                    <ul>
                        <li>Adresse</li>
                        <li>Supergatan 56,</li>
                        <li>Oslo, Norway</li>
                    </ul>
                </div>
            </section>
        </>
    )
}