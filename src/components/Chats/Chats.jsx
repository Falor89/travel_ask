import styles from './chats.module.css';
import ChatItem from "../ChatItem/ChatItem"


const Chats = () => {
    return (
        <section
            className={styles.section}
        >
            <div
                className={styles.chatContainer}
            >
                <h3
                    className={styles.title}
                >Чат с пользователем</h3>
                <ChatItem user='Наталья' />
            </div>
            <div
                className={styles.chatContainer}
            >
                <h3
                    className={styles.title}
                >Чат с aдминистратором</h3>
                <ChatItem admin='Админ' />
            </div>
        </section>
    )
}

export default Chats;