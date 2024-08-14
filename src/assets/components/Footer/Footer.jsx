import style from '../Footer/Footer.module.scss'

export function Footer(props) {
    return (
        <>
            <section className={style.footerSection}>
                <div>
                    <form className={style.footerForm}>
                        <h4 className={style.footerFormHeader}>{props.footerFormHeaderText}</h4>
                        <input type="text" id="fName" placeholder={"Full name"} />
                        <input type="text" id="email" placeholder="Email" />
                        <input type="submit" value={props.footerButton} />
                    </form>
                </div>
                <div>
                    <h5>Quick Lines</h5>
                    <ul>
                        <li>Hjem</li>
                        <li>Om os</li>
                        <li>Prisliste</li>
                        <li>Booking</li>
                        <li>Newsletter</li>
                        <li>Kontakt</li>
                    </ul>
                    <h5>Follow Us</h5>
                    <figure></figure>
                    <figure></figure>
                    <figure></figure>
                </div>
                <div>
                    <h5>Find Us</h5>
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