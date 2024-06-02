export type OfferType = {
    id: number;
    title: string;
    date: string;
    salary: number; // per hour
    imageUrl: string;
    description: string;
    hours: number;
    companyName: string;
    companyLogo: string;
    requirements: string[];
};