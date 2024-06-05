"use client";

import { useEffect, useState } from "react";

import { Separator } from "../components/ui/separator";
import { Carrousel } from "./components/Carrousel";
import { Footer } from "./components/Footer";
import { Offers } from "./components/Offers";
import { OfferType } from "./types";

import axios from "./api/axios.js";

const listOfOffersExample = [
  {
    id: 1,
    title: "Pulidor de madera",
    date: "30/05/24",
    salary: 12,
    imageUrl: "https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pulidor de madera para trabajar en taller de carpinteria. Se requiere experiencia previa en el sector.",
    hours: 5,
    companyName: "Carpinteria Madera S.L.",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  },
  {
    id: 2,
    title: "Ayudante de festival",
    date: "31/05/24",
    salary: 8,
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca ayudante para montaje y desmontaje de escenarios en festival de musica. Se requiere disponibilidad horaria.",
    hours: 10,
    companyName: "Festival de musica de Madrid",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Disponibilidad horaria", "Carnet de conducir"]
  },
  {
    id: 3,
    title: "Guardia Urbano",
    date: "01/06/24",
    salary: 10,
    imageUrl: "https://images.unsplash.com/photo-1570909776719-186852c5ea6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca guardia urbano para trabajar en el centro de la ciudad. Se requiere experiencia previa en el sector.",
    hours: 8,
    companyName: "Ayuntamiento de Madrid",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  },
  {
    id: 4,
    title: "Profesor de matematicas y fisica",
    date: "02/06/24",
    salary: 9,
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca profesor de matematicas y fisica para clases particulares. Se requiere experiencia previa en el sector.",
    hours: 2,
    companyName: "Academia de matematicas y fisica",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  },
  {
    id: 5,
    title: "Repartidor",
    date: "03/06/24",
    salary: 10,
    imageUrl: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca repartidor para trabajar en la zona centro de la ciudad. Se requiere experiencia previa en el sector.",
    hours: 6,
    companyName: "Repartos Express S.L.",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  },
  {
    id: 6,
    title: "Camarero",
    date: "04/06/24",
    salary: 13,
    imageUrl: "https://images.unsplash.com/photo-1566670735914-b2038696981d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca camarero para trabajar en restaurante de comida rapida. Se requiere experiencia previa en el sector.",
    hours: 4,
    companyName: "Restaurante Fast Food S.L.",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  },
  {
    id: 7,
    title: "Limpiador",
    date: "05/06/24",
    salary: 9,
    imageUrl: "https://images.unsplash.com/photo-1598513430940-5a9e9b1a4b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Se busca limpiador para trabajar en oficinas. Se requiere experiencia previa en el sector.",
    hours: 8,
    companyName: "Limpiezas Express S.L.",
    companyLogo: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    requirements: ["Experiencia previa", "Carnet de conducir"]
  }
];

const listOfUsersExample = [
  {
    id: 1,
    name: "Juan Perez",
    email: "juanperez@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Estudiante de ingenieria informatica en la universidad de Madrid.",
    location: "Madrid",
    skills: ["C++", "Java", "Python"],
    experience: ["Desarrollo de aplicaciones web", "Desarrollo de aplicaciones moviles"],
    education: ["Ingenieria informatica"],
    meanRating: 4.5,
    numberOfCompletedJobs: 10
  },
  {
    id: 2,
    name: "Maria Lopez",
    email: "marialopez@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1617817546276-80b86dd60151?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Estudiante de matematicas en la universidad de Madrid.",
    location: "Madrid",
    skills: ["Matematicas", "Fisica", "Quimica"],
    experience: ["Clases particulares de matematicas", "Clases particulares de fisica"],
    education: ["Matematicas"],
    meanRating: 4.5,
    numberOfCompletedJobs: 10
  },
];


export default function Home() {

  /* Quiero coger las ofertas de mi servidor y guardarlas en una lista */
  const [offers, setOffers] = useState<OfferType[]>([]);
  useEffect(() => {
    axios.get('/api/offers').then((response: any) => {
      console.log(response, 200);
      //setOffers(response.data); /* TODO: */
    });
  }, []);

  return (
    <>

      <Carrousel />

      <div className="bg-gray h-[180px] mx-20 content-center">

        <h1 className="text-white font-bold text-4xl mt-6" style={{ letterSpacing: '0.0em' }}>
          Ofertas destacadas
        </h1>
        <Separator className="mt-6 bg-gray2"/>
        
        <div id="ofertas" className="mt-6 h-screen overflow-y-auto no-scrollbar">
          <Offers offers={listOfOffersExample} />
        </div>

        <Separator className="mt-6 bg-gray2"/>

        <Footer />

      </div>

    </>
  );
}
