import style from '../Preview/Preview.module.scss'
import preview1 from '../../images/preview1.png'
import preview2 from '../../images/preview2.png'

export function Preview(props) {
    return (
        <>
            <section className={style.previewSection}>
                <div className={style.previewContainer}>
                    <figure className={style.previewFigures} style={{ backgroundImage: `url(${preview1})` }}>
                        <div className={style.backgroundDarken}>
                            <h3 className={style.previewHeaders}>{props.previewHeaderText1}</h3>
                            <p>{props.previewText}</p>
                            <button className={style.previewButtons}>{props.previewButton1}</button>
                        </div>
                    </figure>
                    <figure className={style.previewFigures} style={{ backgroundImage: `url(${preview2})` }}>
                        <div className={style.backgroundDarken}>
                            <h3 className={style.previewHeaders}>{props.previewHeaderText2}</h3>
                            <p>{props.previewText}</p>
                            <button className={style.previewButtons}>{props.previewButton2}</button>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    )
}