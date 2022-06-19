import React from 'react';
import { toast } from 'react-toastify';

const DeleteProjectModal = ({ deletingProject, setDeletingProject, refetch }) => {
    const { title, _id } = deletingProject
    const handleDelete = () => {
        fetch(`http://localhost:5000/project/${_id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`${title} is deleted`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    refetch()
                    setDeletingProject(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure? You want to delete {title}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
                        <label htmlFor="delete-confirmation-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProjectModal;