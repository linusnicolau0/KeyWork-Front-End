"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "../api/axios.js";
import { useEffect, useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    /*useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response: any) => {
                console.log(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    console.error("Unauthorized access - redirecting to login");
                    window.location.href = '/login';
                } else {
                    console.error("Error fetching user data:", error);
                }
            });
        } else {
            console.error("No token found");
            window.location.href = '/login';
        }
    }, []);*/

    const handleLogin = () => {
        axios.post('/api/login', {
            email: email,
            password: password
        })
        .then((response) => {
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                // Redirigir o hacer algo después del login exitoso
                window.location.href = '/';
            }
        })
        .catch((error) => {
            console.error("Error during login:", error);
        });
    };
    
    
    
    return (
        <div className="mt-[120px] flex justify-center">
            <div className="w-1/5 h-96 bg-[#f2f2f0] rounded-3xl flex flex-col justify-center items-center space-y-5">
                <div className="w-2/3 flex justify-center mb-6">
                    <h1 className="font-bold text-2xl">Inicio de sesión</h1>
                </div>
                <div className="w-2/3">
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Ingrese su email" 
                        className="bg-[#c9c9c9] text-muted-foreground" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="w-2/3">
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Ingrese su contraseña" 
                        className="bg-[#c9c9c9] text-muted-foreground" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="w-2/3">
                    <h1 className="text-[#6765ff] text-xs font-bold">¿Olvidaste tu contraseña?</h1>
                </div>
                <div className="w-2/3 flex justify-center">
                    <Button type="submit" onClick={handleLogin} className="bg-[#ff6725] text-black mt-6">
                        Iniciar sesión
                    </Button>
                </div>
            </div>
        </div>

    )
}