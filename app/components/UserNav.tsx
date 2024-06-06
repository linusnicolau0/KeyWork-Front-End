import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function UserNav ()
{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="bg-gray rounded-full px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3 dark:border-black dark:bg-lightGray2">

                    <img
                    src={
                        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt="Image of the user"
                    className="rounded-full h-9 w-9 hidden lg:block"
                    />

                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[200px]">
                <>
                    <DropdownMenuItem>
                        <Link href="/user-profile" className="w-full dark:text-black">Perfil</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Link href="/" className="w-full dark:text-black">Ajustes</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <button type="submit" className="w-full text-start">
                            Cerrar sesión
                        </button>
                    </DropdownMenuItem>

                </>            
            </DropdownMenuContent>

        </DropdownMenu>
    );
}