import React from 'react';
import { RiEdit2Fill } from 'react-icons/ri';
import { BsFillTrashFill } from 'react-icons/bs';
import './Project.css'
import { Link } from 'react-router-dom';

const ProjectRow = ({ project }) => {
    const { title, category, endDates } = project
    return (
        <tr>
            <td className='flex'>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src="https://api.lorem.space/image/face?hash=80245" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div class="flex items-center space-x-3 ml-2">
                    <div>
                        <div class="btn btn-link text-slate-900 font-bold"><Link to='/projectDetails'>{title}</Link></div>
                    </div>
                </div>
            </td>
            <td>
                {category}
                <br />
            </td>
            <td>
                {endDates}- {endDates}
            </td>
            <th>
                <button className='btn btn-ghost text-xl btnColor'><RiEdit2Fill /></button>
                <button className='btn btn-ghost text-xl btnColor'><BsFillTrashFill /></button>
            </th>
        </tr>
    );
};

export default ProjectRow;