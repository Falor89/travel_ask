import styles from './chatItem.module.css';
import flag from '../../images/redFlag.svg'
import Message from '../Message/Message';
import FormAdd from '../../ui/FormAdd/FormAdd';
import { useDispatch, useSelector } from 'react-redux';
import { create, } from '../../services/store/reducers/messages';
import { useEffect, useRef } from 'react';

const ChatItem = ({ user, admin }) => {
    const dispatch = useDispatch()
    const { messages } = useSelector(state => state.messages)

    const createNewMessage = (role, text) => {
        dispatch(create({ role, text }))
    }

    const messageRef = useRef(null);

    useEffect(() => {
        messageRef.current?.scrollIntoView()
    }, [messages]);

    return (
        <>
            {
                admin ?
                    <div
                        className={styles.chatBox}
                    >
                        {console.log(messages)}
                        <div
                            className={styles.chatHeader}
                        >
                            <img
                                className={styles.avatar}
                                src='https://i.pravatar.cc/300' alt="Аватар администратора" />
                            <div
                                className={styles.info}
                            >
                                <h4
                                    className={styles.title}
                                >Администратор</h4>
                                <div
                                    className={styles.about}
                                >
                                    <img src={flag} alt="Флаг" />
                                    <span
                                        className={styles.textRed}
                                    >Travel Ask</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.messageBox}
                        >
                            <ul
                                className={styles.messagesContainer}
                            >
                                {
                                    messages.map((message, index) => (
                                        <Message
                                            key={index}
                                            message={message}
                                        />
                                    ))
                                }
                                <div ref={messageRef} />

                            </ul>
                        </div>
                        <div
                            className={styles.chatBottom}
                        >
                            <img
                                className={styles.avatar}
                                src='https://i.pravatar.cc/300' alt="Аватар пользователя" />
                            <FormAdd create={createNewMessage} role='admin' />
                        </div>
                    </div>
                    :
                    <div
                        className={styles.chatBox}
                    >
                        <div
                            className={styles.chatHeader}
                        >
                            <img
                                className={styles.avatar}
                                src='https://i.pravatar.cc/300' alt="Аватар администратора" />
                            <div
                                className={styles.info}
                            >
                                <h4
                                    className={styles.title}
                                >{user}</h4>
                                <div
                                    className={styles.about}
                                >
                                    <img src={flag} alt="Флаг" />
                                    <span
                                        className={styles.textRed}
                                    >Гид по Баварии, фото</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.messageBox}
                        >
                            <ul
                                className={styles.messagesContainer}
                            >
                                {
                                    messages.map((message, index) => (
                                        <Message
                                            key={index}
                                            message={message}
                                        />
                                    ))
                                }
                                <div ref={messageRef} />
                            </ul>
                        </div>
                        <div
                            className={styles.chatBottom}
                        >
                            <img
                                className={styles.avatar}
                                src='https://i.pravatar.cc/300' alt="Аватар пользователя" />
                            <FormAdd create={createNewMessage} role='user' />
                        </div>
                    </div>
            }
        </>
    )
}

export default ChatItem;