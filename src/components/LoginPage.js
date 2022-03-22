import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './inputs/Input';
export default function HomePage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: '', emailError: '', password: '' })
    const [isPending, setIsPending] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    useEffect(() => {
        return token ? navigate('/table', { replace: true }) : null
    }, [token])

    //User these credentials
    //email: eve.holt@reqres.in
    //email: type any

    const handleSubmit = event => {
        event.preventDefault();
        setIsPending(true)
        axios.post('https://reqres.in/api/login', formData)
            .then(response => {
                setIsPending(false)
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token);
            }).catch(error => {
                setIsPending(false)
                setFormData({
                    ...formData, emailError: error.response.data.error
                })
            });
    }

    const handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData, [name]: value, emailError: ''
        })
    }

    const handleOnBlue = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value, emailError: ''
        })
    }

    return (
        <>
            <div className='mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        value={formData.email}
                        name="email"
                        required
                        onChangeCallback={handleOnChange}
                        onBlurCallback={handleOnBlue}
                        errorMessage={formData.emailError}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={formData.password}
                        name="password"
                        required
                        onChangeCallback={handleOnChange}
                        onBlurCallback={handleOnBlue}
                    />
                    <button
                        className="btn btn-primary"
                        disabled={isPending}
                    >

                        {isPending ? 'Logging in' : 'Login'}
                    </button>
                </form>
            </div>
        </>

    )
}