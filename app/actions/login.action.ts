"use server";

import { cookies } from 'next/headers'

type LoginState = {
    errors: string[];
    success: string;
}

export async function login(state: LoginState, formData: FormData): Promise<LoginState> {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()

        if (!response.ok) {
            return {
                errors: [data.message || 'Error al iniciar sesión'],
                success: ''
            }
        }

        // Guardar el token en las cookies
        const cookieStore = await cookies()
        cookieStore.set('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // 7 días
        })

        return {
            errors: [],
            success: 'Inicio de sesión exitoso'
        }

    } catch (error) {
          console.error("Error al hacer login:", error);
        return {
            errors: ['Error al conectar con el servidor'],
            success: ''
        }
    }
} 