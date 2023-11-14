import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {

    // const {data, setData} = useState({})

    const {register, reset, handleSubmit} = useForm({
        mode: 'onChange'
    })

    const logIn = (data) => {

        console.log(data)

        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(logIn)}>
                <input 
                    {...register('name', {required: true})}
                    placeholder='Name' 
                />
                <input 
                    {...register('password', {required: true})}
                    placeholder='Password'
                />
                <button>Вход</button>
            </form>
        </div>
    );
}

export default Modal;
