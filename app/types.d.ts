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

export type UserProfileType = {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    bio: string;
    location: string;
    skills: string[];
    experience: string[];
    education: string[];
    meanRating: number;
    numberOfCompletedJobs: number;
    // completedJobs: OfferType[];
};