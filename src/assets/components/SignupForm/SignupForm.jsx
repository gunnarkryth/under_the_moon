import style from '../SignupForm/SignupForm.module.scss'

export function SignupForm(props) {
    return (
        <form className={style.formStyling}>
            <h4 className={style.formHeader}>{props.footerFormHeaderText}</h4>
            <input type="text" id="fName" placeholder="Full name" />
            <input type="text" id="email" placeholder="Email" />
            <input className={style.formButton} type="submit" value={props.footerButton} />
        </form>
    )
}