"use client"

import { register } from "@/actions/create-account-action"
import { useActionState } from "react";
import { ErrrorMessage } from "../ui/ErrrorMessage";
import { SuccessMessage } from "../ui/SuccessMessage";
import { useEffect, useState } from "react";

export const RegisterForm = () => {
    const [state, dispatch] = useActionState(register, {
        errors: [],
        success: ''
    });

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    useEffect(() => {
        if(state.success && state.success !== '' && state.errors.length === 0) {
            setEmail('');
            setName('');
            setPassword('');
            setPasswordConfirmation('');
        }
    }, [state.success, state.errors]);
    
    return (
        <form
            className="mt-14 space-y-5"
            noValidate
            action={dispatch}
        >
            {state?.errors.map((error, index) => (
                <ErrrorMessage key={`error-${index}`}>{error}</ErrrorMessage>
            ))}
            
            {state?.success && <SuccessMessage>{state.success}</SuccessMessage>}

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="name"
                >Nombre</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password"
                >Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password_confirmation"
                >Repetir Password</label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Repite Password de Registro"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    name="password_confirmation"
                    autoComplete="new-password"
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
            />
        </form>
    )
}