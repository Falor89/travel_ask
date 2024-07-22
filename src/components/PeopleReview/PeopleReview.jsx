import ReviewItem from '../ReviewItem/ReviewItem';
import styles from './peopleReview.module.css';
import { data } from '../../utils/data';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { SwipeDots } from '../SwipeDots/SwipeDots';
import { useState } from 'react';


const PeopleReview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const updateCurrentSlide = (e) => {
        setCurrentSlide(e.realIndex);
    };

    return (
        <section className={styles.section}>
            <h2
                className={styles.titleReview}
            >Отзывы о Барселоне</h2>
            <ul className={styles.reviewList}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    onSlideChange={updateCurrentSlide}
                    onSwiper={(swiper) => swiper.on('slideChange', updateCurrentSlide)}
                >
                    {
                        data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <ReviewItem review={item} key={i} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </ul>
            <SwipeDots state={currentSlide} />
        </section>
    )
}

export default PeopleReview;

