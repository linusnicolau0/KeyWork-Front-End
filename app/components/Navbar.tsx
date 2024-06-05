"use client"

import Image from "next/image"
import Link from "next/link"
{/*Desktop logo se usara para navegacion con PC*/}
import KeyworkLogo from '../icons/keywork_icon.png'
import { UserNav } from "./UserNav";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import axios from "../api/axios.js";

export function Navbar() 
{
    let userAuth;

    useEffect(() => {
        axios.get('/api/user').then((response: any) => {
            userAuth = response.data;
            console.log(userAuth);
        });
    }, []);


    return (
        <nav className="bg-gray h-[100px] flex justify-center items-center px-6 py-4">

            {/*Boton para cambiar el tema de la web*/}
            <div className="mr-auto">

                {/*Logos*/}
                <Link href="/">

                    {/*Logo Keywork*/}
                    <Image 
                    src={KeyworkLogo} 
                    alt="Keywork logo" 
                    className="w-1/3 hidden lg:block"/>

                </Link>

            </div>

            <div className="ml-auto flex">

                {/* Borrar això quan estigui el login funcionant */}
                <Button className="bg-slate-100 mr-10 mt-1.5 hover:bg-[#b3b4b6] rounded-xl" asChild>
                    <Link href="/create-offer">
                        <h1 className="text-black">Añadir oferta</h1>
                    </Link>
                </Button>
                <UserNav />
                {/* Fins aquí */}

                {userAuth === null ? (
                    <>
                        <div>
                            <h1 className="text-white">hola</h1>
                        </div>

                        <Button className="bg-slate-100 mr-10 mt-1.5 hover:bg-[#b3b4b6] rounded-xl" asChild>
                            <Link href="/create-offer">
                                <h1 className="text-black">Añadir oferta</h1>
                            </Link>
                        </Button>

                        {/*Foto de usuario*/}
                        <UserNav />

                    </>
                ) : (
                    <>
                        <Button className="bg-slate-100 mr-10 mt-1.5 hover:bg-[#b3b4b6] rounded-xl">
                            <Link href="/login">
                                <h1 className="text-black">Iniciar Sesion</h1>
                            </Link>
                        </Button>

                        <Button className="bg-slate-100 mr-6 mt-1.5 hover:bg-[#b3b4b6] rounded-xl">
                            <Link href="/register">
                                <h1 className="text-black">Registrarse</h1>
                            </Link>
                        </Button>
                    </>
                )}

            </div>
        </nav>
    );
}