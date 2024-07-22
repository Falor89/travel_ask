import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import { useEffect } from 'react';

const modalContainer = document.getElementById('modal')

const Modal = ({ onClose, children }) => {

    const handleClose = (e) => {
        e.key === 'Escape' && onClose()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleClose)
        return (() => {
            document.removeEventListener('keydown', handleClose)
        })
    }, [])
    return createPortal(
        (<>
            <div className={styles.container}>
                <button type="button" className={styles.closeButton}>

                </button>
                {children}
            </div>
            <ModalOverlay close={onClose} />
        </>),
        modalContainer
    )
}

export default Modal