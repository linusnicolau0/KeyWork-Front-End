"use client";

import { useEffect } from 'react';

import axios from '../api/axios.js';

import { UserProfileType } from '../types';
import { Separator } from '@radix-ui/react-dropdown-menu';

type Props = {
    user: UserProfileType;
};

export function UserProfile({ user }: Props) {

    // hacer get del objeto data y asignar cada campo a user
    useEffect(() => {
        axios.get('/api/user').then((response: any) => {
            user = response.data;
            console.log(user);
        });
    }, []);

    return (
        <div id='user-profile' className="bg-gray p-5 w-full flex justify-center">
            <div className="w-8/12 rounded-3xl bg-white h-[1200px] pr-6 pl-6 pt-6 pb-6">
                {/* Nombre, foto, ubicación y descripción */}
                <div className="flex items-center justify-center space-x-6 mb-3 mt-3 ml-3">
                    <img src={user.imageUrl} alt={user.name} className="w-32 h-32 rounded-full" />
                    <div className="flex-col">
                        <div className="ml-5 flex items-center">
                            <h1 className="text-4xl font-bold mr-5">{user.name}</h1>
                            <p className="bg-[#ff6725] text-white text-xl px-2 py-[2px] rounded-xl ml-4">{user.location}</p>
                        </div>
                        <div className="ml-5 mt-[2px]">
                            {/* <h2 className="text-lg font-bold">Biografia</h2> */}
                            <p>{user.bio}</p>
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
                                {user.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5 w-8/12 bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h3 className="text-xl text-center font-bold">Experiencia</h3>
                            <ul className="mt-2 text-center">
                                {user.experience.map((exp, index) => (
                                    <li key={index}>{exp}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5 w-8/12 bg-lightGray rounded-2xl px-4 py-4 mb-4">
                            <h3 className="text-xl text-center font-bold">Estudios</h3>
                            <ul className="mt-2 text-center">
                                {user.education.map((edu, index) => (
                                    <li key={index}>{edu}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Historial laboral, valoraciones y número de trabajos completados */}
                    <div className="w-1/2 mt-5 pr-4 flex flex-col items-center bg-white rounded-2xl">
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
                            <p className="text-muted-foreground text-sm">Aún no ha realizado trabajos en KeyWork...</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center h-2/5">
                    {/* Reseñas */}
                    <div className='w-10/12 bg-lightGray rounded-2xl mt-10'>
                        <h2 className="text-xl font-bold mt-5 mb-5 text-center">Reseñas</h2>
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