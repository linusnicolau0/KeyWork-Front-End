"use client";

import { useState } from 'react';

import axios from '../api/axios.js';

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OfferType } from '../types.js';
import { log } from 'console';
import { FaWindows } from 'react-icons/fa';

type Props = {
    
}

export default function CreateOffer() {
    const [offer, setOffer] = useState<OfferType>({
        id: 0, // Esto puede ser generado automaticamente en el servidor
        title: "",
        date: "",
        salary: "0",
        imageUrl: "",
        description: "",
        hours: "0",
        companyName: "",
        companyLogo: "",
        requirements: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOffer({
            ...offer,
            [name]: value,
        });

        console.log('new offer', {
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

        console.log('new offer', {
            ...offer,
            requirements: [...offer.requirements, ''],
        });
    };
    
    /* Eliminamos solo el ultimo requirement */
    const removeRequirement = () => {
        setOffer({ ...offer, requirements: offer.requirements.slice(0, -1) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', offer.title);
            formData.append('date', offer.date);
            formData.append('salary', offer.salary.toString());
            formData.append('hours', offer.hours.toString());
            formData.append('description', offer.description);
            formData.append('requirements', JSON.stringify(offer.requirements));
            if (offer.imageUrl) {
                formData.append('image', offer.imageUrl);
            }

            const response = await axios.post('/api/offers/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            window.location.href = '/';
            // Redirigir a la página de ofertas o hacer algo después de la creación
        } catch (error) {
            console.error('Error al crear la oferta:', error);
        }
    };


    return (
        <div id='create-offer' className="bg-lightGray3 p-5 h-full w-full mt-10 flex justify-center">
            <div className="w-6/12 rounded-3xl bg-slate-200 p-6 flex-col justify-center">
                <h1 className="text-4xl text-center font-bold mt-2 mb-8">Crear una oferta de trabajo</h1>
                <form
                    onSubmit={handleSubmit} 
                    className="w-10/12 align-center flex-col justify-center mx-auto mt-4"
                >
                    {/* Titulo */}
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Título:</label>
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
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Fecha:</label>
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
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Salario por hora:</label>
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
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Horas de trabajo:</label>
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
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Imagen de la oferta:</label>
                        <Input 
                            type="file" 
                            name="image"
                            value={offer.imageUrl}
                            onChange={handleChange}
                            placeholder="URL de la imagen"
                            className="w-3/4 py-2 mx-5 border border-gray-300 rounded-md bg-white"
                        />
                    </div>

                    {/* Descripción */}
                    <div className="flex mb-4 items-center justify-between mb-6">
                        <label className="w-1/4 block text-md font-semibold ml-5">Descripción:</label>
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
                        <label className="w-1/4 block text-md font-semibold ml-5">Requisitos:</label>
                        <div className="w-3/4 mx-5">
                            {offer.requirements.map((req, index) => (
                                <Input 
                                    key={index}
                                    type="text"
                                    value={req}
                                    onChange={(e) => handleArrayChange(index, e.target.value)}
                                    placeholder={`Requisito ${index + 1}`}
                                    className="mr-auto py-2 my-1 border border-gray-300 rounded-md bg-white mb-5"
                                    required
                                />
                            ))}
                            <div className="flex w-60 items-center justify-between">
                                <Button onClick={addRequirement} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
                                    Añadir requisito
                                </Button>
                                <Button onClick={removeRequirement} className="bg-red-600 text-white px-4 py-2 rounded-lg ml-4 mt-4">
                                    Eliminar requisito
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4 justify-end p-4">
                        <Button type="submit" className="bg-[#ff6725] text-white px-4 py-2 rounded-lg">
                            Crear Oferta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};