import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
    return (
        <div className="mt-[120px] flex justify-center">
            <div className="w-1/5 h-96 bg-[#f2f2f0] rounded-3xl flex flex-col justify-center items-center space-y-5">
                <div className="w-2/3 flex justify-center mb-6">
                    <h1 className="font-bold text-2xl">Inicio de sesión</h1>
                </div>
                <div className="w-2/3">
                    <Input type="email" placeholder="Ingrese su email" className="bg-[#c9c9c9] text-muted-foreground"></Input>
                </div>
                <div className="w-2/3">
                    <Input type="password" placeholder="Ingrese su contraseña" className="bg-[#c9c9c9] text-muted-foreground"></Input>
                </div>
                <div className="w-2/3">
                    <h1 className="text-[#6765ff] text-xs font-bold">¿Olvidaste tu contraseña?</h1>
                </div>
                <div className="w-2/3 flex justify-center">
                    <Button type="submit" className="bg-[#ff6725] text-black mt-6">
                        Iniciar sesión
                    </Button>
                </div>
            </div>
        </div>
    )
}