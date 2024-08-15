import style from '../About/About.module.scss'

export function About(props) {
    return (
        <>
            <section className={style.aboutSection}>
                <h2 className={style.aboutHeader}>{props.aboutHeaderText}</h2>
                <p>{props.aboutParagraphText}</p>
                <button className = {style.aboutButton}>{props.aboutButtonText}</button>
            </section>
        </>
    )
}