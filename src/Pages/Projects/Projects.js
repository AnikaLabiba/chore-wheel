import React, { useEffect, useState } from 'react';
import ProjectRow from './ProjectRow';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='h-screen'>
            <div className='flex items-center justify-around my-7'>
                <h1 className='text-xl font-bold'>In total {projects.length} projects</h1>
                <div class="form-control">
                    <div class="input-group">
                        <input type="text" placeholder="Enter Project" class="input input-bordered" />
                        <button class="btn btn-square bg-fuchsia-200 border-fuchsia-300 hover:bg-fuchsia-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button className='btn text-fuchsia-300 font-bold text-2xl btn-link'>Add Project</button>
            </div>
            <div>
                <div class="overflow-x-auto w-full">
                    {/* table */}
                    <table class="table w-11/12 mx-auto table-compact">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Catergory</th>
                                <th>Duration</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* dynamic row */}
                            {
                                projects.map(project => <ProjectRow
                                    project={project}
                                    key={project._id}
                                ></ProjectRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Projects;