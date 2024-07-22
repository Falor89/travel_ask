import styles from './message.module.css';

const Message = ({ message }) => {

    const { text, role, avatar, date } = message;


    return (
        <li className={role === 'admin' ? styles.messageUser : styles.messageAdmin}>
            <img
                className={styles.image}
                src={avatar} alt='аватар' />
            <div
                className={styles.textContainer}
            >
                <p
                    className={styles.text}
                >{text}</p>
                <span
                    className={styles.date}
                >{date}</span>
                <span
                    className={styles.date}
                >{role === 'admin' ? 'Администратор' : 'Пользователь'}</span>
            </div>
        </li>
    )
}

export default Message;