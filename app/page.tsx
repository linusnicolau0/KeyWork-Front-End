import { Separator } from "../components/ui/separator";
import { Carrousel } from "./components/Carrousel";
import { Offers } from "./components/Offers";

const listOfOffersExample = [
  {
    title: "Pulidor de madera",
    date: "30/05/24",
    salary: "12€/h",
    imageUrl: "https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ayudante de festival",
    date: "31/05/24",
    salary: "8€/h",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Guardia Urbano",
    date: "01/06/24",
    salary: "10€/h",
    imageUrl: "https://images.unsplash.com/photo-1570909776719-186852c5ea6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Profesor de matematicas y fisica",
    date: "02/06/24",
    salary: "9€/h",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Repartidor",
    date: "03/06/24",
    salary: "10€/h",
    imageUrl: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camarero",
    date: "04/06/24",
    salary: "13€/h",
    imageUrl: "https://images.unsplash.com/photo-1566670735914-b2038696981d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Home() {
  return (
    
    <>

    <Carrousel />

    <div className="bg-gray h-[180px] mx-40 content-center">

      <h1 className="text-white font-bold text-4xl mt-6" style={{ letterSpacing: '0.0em' }}>
        Ofertas destacadas
      </h1>
      <Separator className="mt-6 bg-gray2"/>

      <div id="ofertas" className="mt-6">
        <Offers offers={listOfOffersExample} />
      </div>

    </div>

    </>
  );
}
