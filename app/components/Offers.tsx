"use client";

import { useState } from 'react';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogOverlay, DialogContent } from '@/components/ui/dialog';
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
                            <div>
                                <h2 className="text-lg font-semibold">{offer.title}</h2> {/* TODO: Posar 3 punts abans que salti de linea */}
                                <p className="text-sm text-gray-400">{offer.date}</p>
                            </div>
                            <div className="ml-auto">
                                <p className="text-xl font-bold items-end">{offer.salary}</p>
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
                            {/* Titulo */}
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-xl font-semibold">{selectedOffer.title}</h2>
                                {/* <button onClick={closeDialog} className="text-gray-500 hover:text-gray-700">&times;</button> */}
                            </div>
                            {/* Contenido */}
                            <div className="p-4">
                                <div className="flex">
                                    <img src={selectedOffer.imageUrl} alt={selectedOffer.title} className="w-2/3 h-60 object-cover rounded-lg mb-4"/>
                                    <div className="w-1/3 flex-col mb-2">
                                        {/* Imagen empresa, nombre y rating */}
                                        <div className="flex items-center justify-center">
                                            <div className="flex flex-col items-center justify-between">
                                                <h3 className="text-md font-semibold">{selectedOffer.companyName}</h3> {/* TODO: Centrar */}
                                                <p className="">Rating: 5/5</p>
                                            </div>
                                            <img src={selectedOffer.companyLogo} alt={selectedOffer.companyName} className="w-20 h-20 rounded-lg"/>
                                        </div>
                                        {/* Salario y fecha */}
                                        <div className="flex flex-col h-40 items-center justify-center">
                                            <p className="text-3xl font-semibold">{selectedOffer.salary}</p>
                                            <p className="text-sm text-gray-400">{selectedOffer.date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    {/* Descripción */}
                                    <div className="w-2/3 mr-auto">
                                        <h3 className="text-lg font-semibold mb-2">Descripción del trabajo</h3>
                                        <p className="mb-4">{selectedOffer.description}</p>
                                    </div>
                                    <Separator orientation="vertical" className="bg-black" />
                                    {/* Requisitos */}
                                    <div className="w-1/3 ml-auto">
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
                                <button onClick={closeDialog} className="bg-[#ff6725] text-white px-4 py-2 rounded-lg">Contactar</button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};
