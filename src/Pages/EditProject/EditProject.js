import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProjectDetails from '../../hooks/useProjectDetails';

const EditProject = () => {
    const { id } = useParams()
    const [project] = useProjectDetails(id)
    const handleUpdate = event => {
        event.preventDefault()
        const title = event.target.title.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const startDate = event.target.startDate.value;
        const endDates = event.target.endDates.value;
        const liveSite = event.target.liveSite.value;
        const note = event.target.note.value;
        const catergory = event.target.catergory.value;
        const updatedProject = { title, img, description, startDate, endDates, liveSite, note, catergory }

        fetch(`http://localhost:5000/project/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProject)
        })
            .then(res => res.json())
            .then(data => {
                toast("Project updated Successfully!", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    return (
        <div className='min-h-screen'>
            <h1 className='my-7 text-2xl font-bold text-rose-300'>Update</h1>
            <div className="card flex justify-center w-96 mx-auto shadow-2xl bg-base-100 mb-11">
                <form onSubmit={handleUpdate} className="card-body w-full">
                    <div className="form-control">
                        <input name='title' defaultValue={project.title} type="text" placeholder="Project title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='img' type="url" defaultValue={project.img} placeholder="Image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='description' defaultValue={project.description} type="text" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='catergory' defaultValue={project.catergory} type="text" placeholder="catergory" className="input input-bordered" required />
                    </div>
                    <label className="label">
                        <span className="label-text">Sarting and Ending Date</span>
                    </label>
                    <div className='flex'>
                        <div className="form-control">
                            <input name='startDate' defaultValue={project.startDate} type="date" placeholder="Starting Date" className="input input-bordered  w-10/12" required />
                        </div>
                        <div className="form-control">
                            <input name='endDates' defaultValue={project.endDates
                            } type="date" placeholder="Ending Date" className="input input-bordered  w-4/5" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <input name='liveSite' defaultValue={project.liveSite} type="url" placeholder="Live Site" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input name='note' defaultValue={project.note} type="text" placeholder="Note" className="input input-bordered" />
                    </div>
                    <input className='btn btn-sm bg-rose-300 hover:bg-rose-400 border-0 w-full max-w-xs text-white' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default EditProject;