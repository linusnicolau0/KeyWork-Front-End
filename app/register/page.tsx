import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Register() {
    return (
        <div className="mt-[120px] flex justify-center">
            <div className="w-1/5 h-96 bg-[#f2f2f0] rounded-3xl flex flex-col justify-center items-center space-y-4">
                <div className="w-2/3 flex justify-center mb-3">
                    <h1 className="font-bold text-2xl">Registro de empresa</h1>
                </div>
                <div className="w-2/3">
                    <Input type="form" placeholder="Ingrese el nombre de empresa" className="bg-[#c9c9c9] text-muted-foreground"></Input>
                </div>
                <div className="w-2/3">
                    <Input type="email" placeholder="Ingrese su email" className="bg-[#c9c9c9] text-muted-foreground"></Input>
                </div>
                <div className="w-2/3">
                    <Input type="password" placeholder="Ingrese su contraseña" className="bg-[#c9c9c9] text-muted-foreground"></Input>
                </div>
                <div className="w-2/3">
                    <div className="flex space-x-3">
                        <Checkbox id="terms1" required />
                        <div className="grid gap-2 leading-none">
                            <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            Esta de acuerdo con nuestros términos y condiciones
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 flex justify-center">
                    <Button type="submit" className="bg-[#ff6725] text-black mt-6">
                        Registrarse
                    </Button>
                </div>
            </div>
        </div>
    )
}