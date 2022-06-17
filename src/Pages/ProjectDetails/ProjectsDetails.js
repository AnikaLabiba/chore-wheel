import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectsDetails = () => {
    const { id } = useParams()
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return (
        <div className='h-screen mb-32'>
            <div class="hero lg:min-h-screen my-10">
                <div class="hero-content flex-col lg:flex-row-reverse lg:px-9 lg:text-left">

                    <img src={project.img} alt={project.title} class="max-w-sm rounded-lg shadow-2xl w-full" />

                    <div>
                        <h1 class="text-5xl font-bold">{project.title}</h1>
                        <p className='my-4'>{project.description}</p>
                        <p className='my-4'>{project.endDates}- {project.endDates}</p>
                        <div className='flex justify-center lg:justify-start'>
                            <a href={project.liveSite} class="badge">Live Site</a>
                            <div class="badge badge-primary">Client-side</div>
                            <div class="badge badge-secondary">Server-side</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsDetails;