import { useForm } from 'react-hook-form';
import styles from './formAdd.module.css';
import { useDispatch } from 'react-redux';
import { AddButton } from '../AddButton/AddButton';

const FormAdd = ({ create, role }) => {
    const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm({ mode: 'onSubmit' })

    const onSubmit = (data) => {
        console.log(role, data.text)
        create(role, data.text)
        reset()
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset
                className={styles.fieldset}
            >
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Напишите сообщение...'
                    {...register('text', {
                        required: 'Поле не может быть пустым',
                        minLength: {
                            value: 1,
                            message: 'Поле должно быть более 1 символа в длину!'
                        }
                    })}
                />
                <AddButton />
            </fieldset>
        </form>
    )
}

export default FormAdd