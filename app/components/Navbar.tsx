import Image from "next/image"
import Link from "next/link"
{/*Desktop logo se usara para navegacion con PC*/}
import KeyworkLogo from '../icons/keywork_icon.png'
import { UserNav } from "./UserNav";
import { Button } from "@/components/ui/button";

export function Navbar() 
{
    return (
        <nav className="bg-black h-[100px] flex justify-center items-center px-6 py-4">

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

                {/*Boton de inicio de sesion*/}
                <Button className="bg-white mr-10 mt-1.5 hover:bg-[#b3b4b6] rounded-xl">
                    <h1 className="text-black">Iniciar Sesion</h1>
                </Button>

                {/*Boton de registro*/}
                <Button className="bg-white mr-4 mt-1.5 hover:bg-[#b3b4b6] rounded-xl">
                    <h1 className="text-black">Registrarse</h1>
                </Button>

                {/*Foto de usuario*/}
                <UserNav />

            </div>
        </nav>
    );
}