// import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import modalStyle from './Modal.module.css'

const Modal = ({ modalIsOpen, setIsOpen }) => {
    // const {data, setData} = useState({})

    const { register, reset, handleSubmit } = useForm({
        mode: 'onChange',
    })

    const logIn = (data) => {
        console.log(data)

        reset()
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(logIn)}
                className={modalStyle.modalWindow}
            >
                <input
                    {...register('name', { required: true })}
                    placeholder='Name'
                />
                <input
                    {...register('password', { required: true })}
                    placeholder='Password'
                />
                <button>Вход</button>
            </form>
            <IoIosCloseCircleOutline
                size={30}
                className={modalStyle.closeModalWindow}
                onClick={() =>setIsOpen(!modalIsOpen)}
            />
        </div>
    )
}

export default Modal
