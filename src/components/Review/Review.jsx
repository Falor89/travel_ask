import styles from './review.module.css';
import spanishBigImg from '../../images/spanishBigImg.svg'
import { useState } from 'react';

const Review = () => {
    const [reviewText, setReviewText] = useState(false)

    const toggleReviewText = () => {
        setReviewText(!reviewText)
    }

    const changeStates = (trueState, falseState) => {
        return reviewText ? trueState : falseState
    }

    return (
        <section className={styles.section}>
            <img src={spanishBigImg} alt="Фото сабора Испании" />
            <div className={styles.textContainer}>
                <h2 className={styles.text}>Барселона — обзор города</h2>
                {
                    reviewText ?
                        <>
                            <span>
                                Барселона с её золотистыми пляжами,
                                архитектурными шедеврами Гауди, многочисленными фестивалями
                                и гастрономическим разнообразием понравилась мне в первый же день
                                пребывания и стала местом, в котором хочется остаться навсегда.
                            </span>
                            <span>Вот некоторые из достопримечательностей Барселоны:</span>
                            <ol className={styles.text}>
                                <li>Храм Святого Семейства.</li>
                                <li>Гора Монжуик.</li>
                                <li>Парк Гуэля.</li>
                                <li>Музей современного искусства (MACBA).</li>
                                <li>Готический квартал.</li>
                            </ol>
                            <span>Атмосфера Барселоны — это неспешность, расслабленность, гедонизм и открытость.</span>
                        </>
                        :
                        <span>
                            Барселона с её золотистыми пляжами,
                            архитектурными шедеврами Гауди, многочисленными фестивалями
                            и гастрономическим разнообразием понравилась мне в первый же день
                            пребывания и стала местом, в котором...
                        </span>
                }
                <button
                    className={styles.btnToggle}
                    type='button'
                    onClick={toggleReviewText}
                >{changeStates('Убрать описание', 'Читать далее')}</button>
            </div>
        </section>
    )
}

export default Review;