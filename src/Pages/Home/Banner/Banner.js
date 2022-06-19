import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
import gif from '../../../Images/gif.gif'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div class="hero lg:min-h-screen bg-base-200 lg:px-12">
            <div class="hero-content flex-col lg:flex-row md:flex-row banner">
                <img src={gif} alt='' class="max-w-sm rounded-lg gif" />
                <div className='text-left ml-12 intro'>
                    <h1 class="text-5xl font-bold">Project Synergy</h1>
                    <p class="py-6">Track your implemented projects with Project Synergy. Store your projects along with your information just by logging in to the system.</p>
                    <button onClick={() => navigate('/projects')} class="btn bg-rose-200 hover:bg-rose-400 border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;