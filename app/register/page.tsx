"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!termsAccepted) {
            setError("Debes aceptar los términos y condiciones.");
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            if (response.status === 200) {
                window.location.href = '/login'; // Redirigir al login o dashboard
            }
        } catch (error) {
            console.error("Error durante el registro:", error);
            if ((error as any).response && (error as any).response.data) {
                setError((error as any).response.data.message);
            } else {
                setError("Error durante el registro");
            }
        }
    };

    return (
        <div className="mt-[120px] flex justify-center">
            <div className="w-1/5 h-auto bg-[#f2f2f0] rounded-3xl flex flex-col justify-center items-center p-8">
                <div className="w-full flex justify-center mb-3">
                    <h1 className="font-bold text-2xl">Registro de usuario</h1>
                </div>
                <form className="w-2/3 flex flex-col space-y-4" onSubmit={handleRegister}>
                    <div className="w-full">
                        <Input
                            type="text"
                            placeholder="Ingrese su nombre"
                            className="w-full bg-[#c9c9c9] text-muted-foreground"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            type="email"
                            placeholder="Ingrese su email"
                            className="w-full bg-[#c9c9c9] text-muted-foreground"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            className="w-full bg-[#c9c9c9] text-muted-foreground"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            type="password"
                            placeholder="Confirme su contraseña"
                            className="w-full bg-[#c9c9c9] text-muted-foreground"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex items-center space-x-3">
                        <input
                            id="terms1"
                            type="checkbox"
                            required
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Está de acuerdo con nuestros términos y condiciones
                        </label>
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="w-full flex justify-center">
                        <Button type="submit" className="bg-[#ff6725] text-black mt-6">
                            Registrarse
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
