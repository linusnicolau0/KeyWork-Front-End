"use client";

import { useEffect, useState } from 'react';

import axios from '../api/axios.js';

import { UserProfileType } from '../types.js';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { User } from 'lucide-react';

type Props = {
    user: UserProfileType;
};

export default function UserProfile() {

    const [user, setUser] = useState<UserProfileType>({
        id: 0,
        name: "",
        email: "",
        image_url: "",
        biography: "",
        location: "",
        skills: [],
        experiences: [],
        education: [],
        meanRating: 4.5,
        numberOfCompletedJobs: 10
    });

    // hacer get del objeto data y asignar cada campo a user
    useEffect(() => {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }
        axios.get('/api/user/profile', config).then((response: any) => {
            const profile = response.data.profile;
            setUser({
                ...user,
                id: profile.id,
                name: profile.name,
                email: profile.email,
                image_url: profile.image_url,
                biography: profile.biography,
                location: profile.location,
                skills: profile.skills,
                experiences: profile.experiences,
                education: profile.education,
            });
        });
    }, []);

    return (
        <div id='user-profile' className="bg-gray2 p-5 w-full flex justify-center">
            <div className="w-8/12 rounded-3xl bg-slate-100 min-h-[1200px] p-6">
            <h1 className="text-4xl font-bold mr-5"></h1> {/** This line should be removed */}
                {/* Nombre, foto, ubicación y descripción */}
                <div className="flex items-center justify-center space-x-6 mb-3 mt-3 ml-3">
                    <img src={user.image_url} alt={user.name} className="w-32 h-32 rounded-full" />
                    <div className="flex-col">
                        <div className="ml-5 flex items-center">
                            <h1 className="text-4xl font-bold mr-5">{user.name}</h1>
                            <p className="bg-[#ff6725] text-white text-xl px-2 py-[2px] rounded-xl ml-4">{user.location}</p>
                        </div>
                        <div className="ml-5 mt-[2px]">
                            {/* <h2 className="text-lg font-bold">Biografia</h2> */}
                            <p>{user.biography}</p>
                        </div>
                    </div>
                </div>
                
                {/* Información central */}
                <div className="flex mt-5">
                    {/* Habilidades, experiencia y estudios */}
                    <div className="w-1/2 pr-4 flex flex-col items-center">
                        <div className="mt-5 w-8/12 bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h3 className="text-xl text-center font-bold">Habilidades</h3>
                            <ul className="mt-2 text-center">
                                {user.skills.map(skill => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5 w-8/12 bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h3 className="text-xl text-center font-bold">Experiencia</h3>
                            <ul className="mt-2 text-center">
                                {user.experiences.map(exp => (
                                    <li key={exp.id}>{exp.title}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5 w-8/12 bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h3 className="text-xl text-center font-bold">Estudios</h3>
                            <ul className="mt-2 text-center">
                                {user.education.map(edu => (
                                    <li key={edu.id}>{edu.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Historial laboral, valoraciones y número de trabajos completados */}
                    <div className="w-1/2 mt-5 pr-4 flex flex-col items-center bg-slate-100 rounded-2xl">
                        {/* Historial */}
                        <div className="flex flex-col items-center bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h2 className="text-xl font-bold">Historial laboral</h2>
                            <p className="mt-2">Número de trabajos completados: {user.numberOfCompletedJobs}</p>
                            <p>Valoración media: {user.meanRating}</p>
                        </div>

                        <div className="mt-5 bg-lightGray w-8/12 rounded-2xl h-4/6 flex justify-center items-center">
                            {/* {user.completedJobs.map((job, index) => (
                                <div key={index}>
                                    <p>{job.title}</p>
                                    <p>{job.companyName}</p>
                                </div>
                            ))} */}
                            {/* Por defecto quiero que se muestre "Aun no ha realizado trabajos en KeyWork" */}
                            <p className="p-4 text-muted-foreground text-sm">Aún no ha realizado trabajos en KeyWork...</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center h-2/5">
                    {/* Reseñas */}
                    <div className='w-10/12 bg-lightGray rounded-2xl mt-10'>
                        <h2 className="text-xl font-bold mt-5 mb-5 text-center">Opiniones</h2>
                        {/* {user.reviews.map((review, index) => (
                            <div key={index}>
                                <p>{review.title}</p>
                                <p>{review.rating}</p>
                                <p>{review.comment}</p>
                            </div>
                        ))} */}
                        {/* Por defecto quiero que se muestre "Aun no tiene reseñas en KeyWork" */}
                        <div className='flex bg-lightGray2 rounded-2xl w-8/12 h-2/3 mt-7 mx-auto justify-center items-center'>
                            <p className='text-center text-muted-foreground text-sm'>Aún no tiene reseñas en KeyWork...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};