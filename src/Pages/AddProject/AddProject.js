import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProject = () => {
    const [user] = useAuthState(auth)
    const handleAddProject = event => {
        event.preventDefault()
        const email = user.email
        const name = user.displayName
        const title = event.target.title.value
        const img = event.target.img.value
        const description = event.target.description.value
        const startDate = event.target.startDate.value
        const endDates = event.target.endDates.value
        const liveSite = event.target.liveSite.value
        const note = event.target.note.value
        const project = { email, name, img, title, startDate, endDates, liveSite, description, note }
        console.log(project);
        fetch('http://localhost:5000/project', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('New Project added', {
                    position: toast.POSITION.TOP_CENTER
                })
                event.target.reset()
            })
    }
    return (
        <div className='min-h-screen'>
            <h1 className='my-7 text-2xl font-bold text-pink-400'>Add a new project</h1>
            <div class="card flex justify-center max-w-sm mx-auto shadow-2xl bg-base-100 mb-11">
                <form onSubmit={handleAddProject} class="card-body">
                    <div class="form-control">
                        <input name='title' type="text" placeholder="Project title" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <input name='img' type="url" placeholder="Image" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <input name='description' type="text" placeholder="Description" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <input name='category' type="text" placeholder="Category" class="input input-bordered" required />
                    </div>
                    <label class="label">
                        <span class="label-text">Sarting and Ending Date</span>
                    </label>
                    <div className='flex'>
                        <div class="form-control">
                            <input name='startDate' type="date" placeholder="Starting Date" class="input input-bordered mr-3" required />
                        </div>
                        <div class="form-control">
                            <input name='endDates' type="date" placeholder="Ending Date" class="input input-bordered mr-3" required />
                        </div>
                    </div>
                    <div class="form-control">
                        <input name='liveSite' type="url" placeholder="Live Site" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input name='note' type="text" placeholder="Note" class="input input-bordered" />
                    </div>
                    <input className='btn btn-sm bg-pink-300 hover:bg-pink-400 border-0 w-full max-w-xs text-white' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProject;