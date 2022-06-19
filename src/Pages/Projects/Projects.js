import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import ProjectRow from './ProjectRow';
import Loading from '../Shared/Loading/Loading'
import DeleteProjectModal from './DeleteProjectModal';

const Projects = () => {
    const [deletingProject, setDeletingProject] = useState(null)
    const [filteredProjects, setFilteredProjects] = useState(null)
    const navigate = useNavigate()
    const { data: loadedProjects, isLoading, refetch } = useQuery('projects', () =>
        fetch(`https://intense-lowlands-01074.herokuapp.com/projects`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    // search mechanism
    const handleSearch = () => {
        let searchInput = document.getElementById('search-input')
        const searchValue = searchInput.value.toLowerCase()
        const result = loadedProjects.filter(project => project.title.toLowerCase().includes(searchValue))
        setFilteredProjects(result)
        console.log(result);
    }
    let projects;
    if (!filteredProjects) {
        projects = loadedProjects
    }
    else {
        projects = filteredProjects
    }

    return (
        <div className='min-h-screen mb-12'>
            <div className='flex items-center justify-around my-7'>
                <h1 className='text-xl font-bold hidden lg:block'>In total {projects?.length} projects</h1>
                <div className='flex flex-col-reverse lg:flex-row md:flex-row'>
                    <div className="form-control">
                        <div className="input-group">
                            <input id='search-input' type="text" placeholder="Enter Project" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square bg-rose-200 border-rose-300 hover:bg-rose-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button onClick={() => navigate('/addProject')} className='btn text-rose-300 font-bold text-2xl btn-link'>Add Project</button>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    {/* table */}
                    <table className="table w-11/12 mx-auto table-compact">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>category</th>
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
                                    setDeletingProject={setDeletingProject}
                                ></ProjectRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingProject && <DeleteProjectModal
                    deletingProject={deletingProject}
                    setDeletingProject={setDeletingProject}
                    refetch={refetch}
                ></DeleteProjectModal>
            }
        </div>
    );
};

export default Projects;