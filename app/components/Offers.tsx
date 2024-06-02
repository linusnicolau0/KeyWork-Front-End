"use client";

import { useState } from 'react';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogOverlay, DialogContent } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

import { OfferType } from '../types';

type Props = {
    offers: OfferType[];
}

export function Offers ({ offers }: Props) {
    const [selectedOffer, setSelectedOffer] = useState<OfferType | null>(null);

    const openDialog = (offer: OfferType) => {
        setSelectedOffer(offer);
    };

    const closeDialog = () => {
        setSelectedOffer(null);
    };

    return (
        <div id="seccion-ofertas" className={cn("flex justify-between",
                                                "gap-6",
                                                "grid lg:grid-cols-3 sm:grid-cols-2"
                                            )}>
            {offers.map((offer) => (
                <div key={offer.id} onClick={() => openDialog(offer)}>
                    <Card className="w-80 rounded-lg overflow-hidden shadow-lg border-gray cursor-pointer">
                        <img src={offer.imageUrl} alt={offer.title} className="w-full h-40 object-cover" />
                        <div className="p-3 bg-black text-white flex items-center">
                            <div className="w-4/5">
                                <h2 className="truncate text-lg font-semibold">{offer.title}</h2>
                                <p className="text-sm text-gray-400">{offer.date}</p>
                            </div>
                            <div className="ml-auto">
                                <p className="text-xl font-bold items-end">{offer.salary * offer.hours}€</p>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}

            {/* PopUp */}
            {selectedOffer && (
                <Dialog open={Boolean(selectedOffer)} onOpenChange={closeDialog}>
                    <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
                    <DialogContent className={cn(
                        "bg-white rounded-lg overflow-hidden shadow-lg",
                        "max-w-3xl w-full",
                        "max-h-[calc(100vh-2rem)] overflow-y-auto no-scrollbar"
                    )}>
                        <div>
                            {/* Titulo y fecha */}
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-xl font-semibold">{selectedOffer.title}</h2>
                                <p className="text-sm text-gray-400">{selectedOffer.date}</p>
                            </div>
                            {/* Contenido */}
                            <div className="p-4">
                                <div className="flex">
                                    <img src={selectedOffer.imageUrl} alt={selectedOffer.title} className="w-2/3 h-60 object-cover rounded-lg mb-4"/>
                                    <div className="w-1/3 flex-col mb-2">
                                        {/* Imagen empresa, nombre y rating */}
                                        <div className="flex items-center text-center">
                                            <div className="flex flex-col">
                                                <h3 className="text-md font-semibold">{selectedOffer.companyName}</h3>
                                                <p className="">Rating: 5/5</p>
                                            </div>
                                            <img src={selectedOffer.companyLogo} alt={selectedOffer.companyName} className="w-20 h-20 rounded-full"/>
                                        </div>
                                        {/* Salario */}
                                        <div className="flex flex-col h-40 px-4">
                                            <div className="h-3/4 flex flex-col justify-center">
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-400">Salario: </p>
                                                    <p className="text-sm text-gray-400">{selectedOffer.salary}€/h</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-400">Tiempo de trabajo: </p>
                                                    <p className="text-sm text-gray-400">{selectedOffer.hours}h</p>
                                                </div>
                                            </div>
                                            <div className="h-1/4 flex justify-between">
                                                <p className="text-3xl font-semibold">Total: </p>
                                                <p className="text-3xl font-semibold">{selectedOffer.salary * selectedOffer.hours}€</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    {/* Descripción */}
                                    <div className="w-2/3 mr-10">
                                        <h3 className="text-lg font-semibold mb-2">Descripción del trabajo</h3>
                                        <p className="mb-4">{selectedOffer.description}</p>
                                    </div>
                                    {/* <Separator orientation="vertical" className="bg-black" /> */}
                                    {/* Requisitos */}
                                    <div className="w-1/3">
                                        <h3 className="text-lg font-semibold mb-2">Requisitos</h3>
                                        <ul className="list-disc list-inside">
                                            {selectedOffer.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Botón contactar */}
                            <div className="flex justify-end p-4 border-t">
                                <Button onClick={closeDialog} className="bg-[#ff6725] text-white px-4 py-2 rounded-lg">Contactar</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};
