import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProjectDetails from '../../hooks/useProjectDetails';
import './ProjectDetails.css'

const ProjectsDetails = () => {
    const { id } = useParams()
    const [project] = useProjectDetails(id)

    return (
        <div className='h-screen mb-32'>
            <div className="hero lg:min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-9 lg:text-left">

                    <img src={project.img} alt={project.title} className="max-w-sm rounded-lg shadow-2xl w-full" />

                    <div>
                        <h1 className="text-5xl font-bold">{project.title}</h1>
                        <p className='my-4'>{project.description}</p>
                        <p className='my-4'>{project.startDate}- {project.endDates}</p>
                        <div className='flex justify-center lg:justify-start'>
                            <a href={project.liveSite} className="badge bg-rose-300 border-rose-400">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsDetails;