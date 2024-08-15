import style from '../Footer/Footer.module.scss'
import { SignupForm } from '../SignupForm/SignupForm'

const formHeader = 'Subscribe to newsletter'
const buttonText = 'Sign up'

export function Footer() {
    return (
        <>
            <section className={style.footerSection}>
                <div>
                    <SignupForm footerFormHeaderText={formHeader} footerButton={buttonText} />
                </div>
                <div>
                    <h5 className={style.footerHeaders}>Quick Lines</h5>
                    <ul className={style.footerLists}>
                        <li>Hjem</li>
                        <li>Om os</li>
                        <li>Prisliste</li>
                        <li>Booking</li>
                        <li>Newsletter</li>
                        <li>Kontakt</li>
                    </ul>
                    <h5 className={style.footerHeaders}>Follow Us</h5>
                    <div className={style.circleContainer}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div>
                    <h5 className={style.footerHeaders}>Find Us</h5>
                    <ul className={style.footerLists}>
                        <li>WhatsApp</li>
                        <li>+45 23 43 43 43</li>
                    </ul>
                    <ul className={style.footerLists}>
                        <li>Telefonnummer</li>
                        <li>+45 58 84 84 84</li>
                    </ul>
                    <ul className={style.footerLists}>
                        <li>Adresse</li>
                        <li>Supergatan 56,</li>
                        <li>Oslo, Norway</li>
                    </ul>
                </div>
            </section>
        </>
    )
}