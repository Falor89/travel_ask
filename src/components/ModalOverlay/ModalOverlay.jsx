import styles from './modalOverlay.module.css';
import React from 'react';

const ModalOverlay = ({ close }) => {
    return (
        <div className={styles.overlay}
            onClick={close}
        >
        </div>
    )
}

export default ModalOverlay;