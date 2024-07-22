import styles from './swipeDots.module.css'
import { data } from '../../utils/data';

export const SwipeDots = ({ state }) => {
    return (
        <div
            className={styles.pagination}
        >
            {Array.from({ length: data.length }, (_, i) => (
                <div
                    key={i}
                    className={state === i ? styles.paginationActive : styles.paginationDot}
                ></div>
            ))
            }
        </div>
    )
}

