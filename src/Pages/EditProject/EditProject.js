import React from 'react';
import { useParams } from 'react-router-dom';

const EditProject = () => {
    const { id } = useParams()
    return (
        <div className='h-screen'>
            <h1>Edit Project {id}</h1>

        </div>
    );
};

export default EditProject;