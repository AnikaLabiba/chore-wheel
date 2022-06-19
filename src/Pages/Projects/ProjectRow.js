import React from 'react';
import { RiEdit2Fill } from 'react-icons/ri';
import { BsFillTrashFill } from 'react-icons/bs';
import './Project.css'
import { useNavigate } from 'react-router-dom';

const ProjectRow = ({ project, setDeletingProject }) => {
    const navigate = useNavigate()
    const { _id, title, img, category, endDates, startDate } = project
    return (
        <tr>
            <td className='flex'>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className="flex items-center space-x-3 ml-2">
                    <div>
                        <div onClick={() => navigate(`/project/${_id}`)} className="btn btn-link text-slate-900 font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {category}
                <br />
            </td>
            <td>
                {startDate}- {endDates}
            </td>
            <th>
                <button onClick={() => navigate(`/editProject/${_id}`)} className='btn btn-ghost text-xl btnColor'><RiEdit2Fill /></button>
                <label onClick={() => setDeletingProject(project)} htmlFor="delete-confirmation-modal" className='btn btn-ghost text-xl btnColor'><BsFillTrashFill /></label>

                {/* <button htmlFor="delete-confirmation-modal" onClick={() => setDeletingProject(project)} className='btn btn-ghost text-xl btnColor'><BsFillTrashFill /></button> */}
            </th>
        </tr>
    );
};

export default ProjectRow;