

import { UserProfileType } from '../types';

type Props = {
    user: UserProfileType;
};

export function UserProfile({ user }: Props) {
    return (
        <div id='user-profile' className="bg-white p-5 rounded-lg">
            {/* Nombre, foto, ubicación y descripción */}
            <div className="flex w-full">
                <img src={user.imageUrl} alt={user.name} className="w-40 h-40 rounded-lg" />
                <div className="flex-col">
                    <div className="ml-5 flex items-center">
                        <h1 className="text-4xl font-bold mr-5">{user.name}</h1>
                        <p className="bg-[#ff6725] text-white px-4 py-2 rounded-xl">{user.location}</p>
                    </div>
                    <div className="m-5">
                        {/* <h2 className="text-lg font-bold">Biografia</h2> */}
                        <p>{user.bio}</p>
                    </div>
                </div>
            </div>
            {/* Información central */}
            <div className="flex w-full mt-2">
                {/* Habilidades, experiencia y estudios */}
                <div className="flex-col w-2/5">
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">Habilidades</h3>
                        <ul>
                            {user.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">Experiencia</h3>
                        <ul>
                            {user.experience.map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">Estudios</h3>
                        <ul>
                            {user.education.map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Historial laboral, valoraciones y número de trabajos completados */}
                <div className="flex-col w-3/5 justify-between">
                    {/* Historial */}
                    <div className="flex mt-5 justify-between items-center">
                        <h2 className="text-xl font-bold">Historial laboral</h2>
                        <p>Número de trabajos completados: {user.numberOfCompletedJobs}</p>
                        <p>Valoración media: {user.meanRating}</p>
                    </div>
                    <div className="mt-3">
                        {/* {user.completedJobs.map((job, index) => (
                            <div key={index}>
                                <p>{job.title}</p>
                                <p>{job.companyName}</p>
                            </div>
                        ))} */}
                        {/* Por defecto quiero que se muestre "Aun no ha realizado trabajos en KeyWork" */}
                        <p>Aún no ha realizado trabajos en KeyWork...</p>
                    </div>
                </div>
            </div>
            {/* Reseñas */}
            <div className="flex-col w-full">
                <h2 className="text-xl font-bold mt-5 mb-5 text-center">Reseñas</h2>
                {/* {user.reviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.title}</p>
                        <p>{review.rating}</p>
                        <p>{review.comment}</p>
                    </div>
                ))} */}
                {/* Por defecto quiero que se muestre "Aun no tiene reseñas en KeyWork" */}
                <p>Aún no tiene reseñas en KeyWork...</p>
            </div>
        </div>
    );
};