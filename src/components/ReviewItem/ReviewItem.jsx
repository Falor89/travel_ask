import styles from './reviewItem.module.css';
import likeImg from '../../images/likeImg.svg'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Gallery from '../Gallery/Gallery';


const ReviewItem = ({ review, index, activeDot }) => {
    const [imagesPopup, setImagesPopup] = useState(false)
    const { name, avatar, text, city, images, date, comments, likes } = review;

    const checkLength = () => {
        if (images.length > 3) {
            return images.length - 3
        }

        return null
    }

    const newDate = new Date().getFullYear()


    const checkDate = (date) => {
        const regex = /\d+$/g
        const year = date.match(regex)
        if (newDate - Number(year) < 1) {
            return 'Менее 1 года назад'
        }
        return 'Более 1 года назад'
    }

    const sem = '\u00B7'

    const openImagesPopup = () => {
        setImagesPopup(true)
    }

    const closeImagesPopup = () => {
        setImagesPopup(false)
    }

    return (
        <li
            className={styles.reviewContainer}
        >
            <div
                className={styles.headerReview}
            >
                <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
                <span>{name}</span>
            </div>
            <div
                className={styles.about}
            >
                <div>
                    <span
                        className={styles.textRed}
                    >{city}</span>
                    <span> — О ГОРОДЕ:</span>
                </div>
                <span>{text}</span>
                <div
                    className={styles.images}
                >
                    {images.slice(0, 3).map((item, i) => <img onClick={openImagesPopup} className={styles.image} key={i} src={item} alt='Фото' />)}
                    {checkLength() ?
                        <div
                            className={styles.itemImgCounter}
                            style={{ backgroundImage: `url(${images[4]})` }}>
                            <p className={styles.par}>{`+${checkLength()}`}</p></div>
                        : null}
                </div>
            </div>
            <div
                className={styles.footerReview}
            >
                <span
                    className={styles.textFooter}
                >{checkDate(date)}</span>
                <span
                    className={styles.textFooter}
                >{sem} {comments} комментариев</span>
                <div
                    className={styles.likeContainer}
                >
                    <img src={likeImg} alt='Понравилось' />
                    <span
                        className={styles.textFooter}
                    >{likes}</span>
                </div>
            </div>
            {
                imagesPopup && (
                    <Modal onClose={closeImagesPopup}>
                        <Gallery images={images} />
                    </Modal>
                )
            }
        </li>
    )
}

export default ReviewItem;