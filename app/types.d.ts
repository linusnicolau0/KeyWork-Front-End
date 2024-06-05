export type OfferType = {
    id: number;
    title: string;
    date: string;
    salary: number; // per hour
    imageUrl: string; //generar desde frontend
    description: string;
    hours: number;
    companyName: string; //generar desde frontend
    companyLogo: string; //generar desde frontend
    requirements: string[];
};

export type UserProfileType = {
    id: number;
    name: string;
    email: string;
    image_url: string;
    biography: string;
    location: string;
    skills: string[];
    experiences: string[];
    education: string[];
    meanRating: number; // es genera al frontend
    numberOfCompletedJobs: number; // es genera al frontend
    // completedJobs: OfferType[]; // Es un array de offers
};