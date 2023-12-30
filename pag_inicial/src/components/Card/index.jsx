import styles from './Card.module.css'

function Card(){
    return(
    < selection className={styles.card}>

        <h3> titulo do projeto
            <p> texto descritivo</p>
            <div className={styles.card_footer}> </div>
        </h3>
    </selection>
    )
}

export default Card;