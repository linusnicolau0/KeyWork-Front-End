import { Card } from '@/components/ui/card';
import { OfferType } from '../types';
import { cn } from '@/lib/utils';

type Props = {
    offers: OfferType[];
}

export function Offers ({ offers }: Props) {
    return (
        <div id="seccion-ofertas" className={cn("flex justify-between",
                                                "gap-6",
                                                "grid lg:grid-cols-3 sm:grid-cols-2"
                                            )}>
            {offers.map(offer => (
                <Card className="w-80 rounded-lg overflow-hidden shadow-lg"> // TODO: Canviar color border
                    <img src={offer.imageUrl} alt={offer.title} className="w-full h-40 object-cover" />
                    <div className="p-3 bg-black text-white flex items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{offer.title}</h2> // TODO: Posar 3 punts abans que salti de linea
                            <p className="text-sm text-gray-400">{offer.date}</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-xl font-bold items-end">{offer.salary}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
