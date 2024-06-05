"use client";

import { useState } from 'react';
//import { useRouter } from 'next/router';

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OfferType } from '../types';

type Props = {
    
}

export function CreateOffer() {
    const [offer, setOffer] = useState<OfferType>({
        id: 0, // Esto puede ser generado automaticamente en el servidor
        title: "",
        date: "",
        salary: 0,
        imageUrl: "",
        description: "",
        hours: 0,
        companyName: "",
        companyLogo: "",
        requirements: []
    });

    //const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOffer({
            ...offer,
            [name]: value,
        });
    };

    const handleArrayChange = (index: number, value: string) => {
        const newRequirements = [...offer.requirements];
        newRequirements[index] = value;
        setOffer({ ...offer, requirements: newRequirements });
    };

    const addRequirement = () => {
        setOffer({ ...offer, requirements: [...offer.requirements, ''] });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Aquí deberías enviar los datos a tu servidor o API
        console.log(offer);
        // Navegar de vuelta a la página de ofertas después de la creación
        //router.push('/ofertas');
    };


    return (
        <div id='create-offer-page' className="">
            <h1 className="text-white text-4xl font-bold m-5">Crear una oferta de trabajo</h1>
            <form
                onSubmit={handleSubmit} 
                className="w-11/12"
            >
                {/* Titulo */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Título:</label>
                    <Input 
                        type="text" 
                        name="title"
                        value={offer.title}
                        onChange={handleChange}
                        placeholder="Título de la oferta"
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Fecha */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Fecha:</label>
                    <Input 
                        type="date" 
                        name="date"
                        value={offer.date}
                        onChange={handleChange}
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Salario por hora */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Salario por hora:</label>
                    <Input 
                        type="number" 
                        name="salary"
                        value={offer.salary}
                        onChange={handleChange}
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Horas de trabajo */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Horas de trabajo:</label>
                    <Input 
                        type="number" 
                        name="hours"
                        value={offer.hours}
                        onChange={handleChange}
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Imagen de la oferta de trabajo */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Imagen de la oferta:</label>
                    <Input 
                        type="file" 
                        name="image"
                        value={offer.imageUrl}
                        onChange={handleChange}
                        placeholder="URL de la imagen"
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Descripción */}
                <div className="flex mb-4 items-center justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Descripción:</label>
                    <Input 
                        type="text"
                        name="description"
                        value={offer.description}
                        onChange={handleChange}
                        placeholder="Descripción de la oferta"
                        className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        required
                    />
                </div>

                {/* Requisitos */}
                <div className="flex mb-4 justify-between">
                    <label className="block text-white text-md font-semibold ml-5">Requisitos:</label>
                    <div className="w-3/4 mx-5">
                        {offer.requirements.map((req, index) => (
                            <Input 
                                key={index}
                                type="text"
                                value={req}
                                onChange={(e) => handleArrayChange(index, e.target.value)}
                                placeholder={`Requisito ${index + 1}`}
                                className="mr-auto py-2 my-1 border border-gray-300 rounded-md bg-white"
                                required
                            />
                        ))}
                        <Button onClick={addRequirement} className="bg-[#ff6725] text-white px-4 py-2 rounded-lg">
                            Añadir requisito
                        </Button>
                    </div>
                </div>

                <div className="flex mb-4 justify-end p-4">
                    <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Crear Oferta
                    </Button>
                </div>
            </form>
        </div>
    );
};