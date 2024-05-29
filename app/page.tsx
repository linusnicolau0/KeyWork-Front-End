import { Separator } from "../components/ui/separator";
import { Carrousel } from "./components/Carrousel";

export default function Home() {
  return (
    
    <>

    <Carrousel />

    <div className="bg-gray h-[150px] mx-40 content-center">

      <h1 className="text-white font-bold text-4xl" style={{ letterSpacing: '0.0em' }}>
        Ofertas destacadas
      </h1>
      <Separator className="mt-6 bg-[#4e4e4e]"/>

    </div>

    </>
  );
}
