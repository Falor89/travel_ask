import styles from './gallery.module.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Gallery = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            spaceBetween={60}
            slidesPerView={1}
        >
            {
                images.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            className={styles.image}
                            src={item}
                            alt="Фото"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Gallery;