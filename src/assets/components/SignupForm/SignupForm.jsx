import style from '../SignupForm/SignupForm.module.scss'

export function Footer(props) {
    return (
        <form className={style.footerForm}>
            <h4 className={style.footerFormHeader}>{props.footerFormHeaderText}</h4>
            <input type="text" id="fName" placeholder={"Full name"} />
            <input type="text" id="email" placeholder="Email" />
            <input type="submit" value={props.footerButton} />
        </form>
    )
}