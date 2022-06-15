import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div class="hero min-h-screen home">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Chore Wheel</h1>
                    <p class="mb-5">Your friend to help you track your evryday lineup in docket.</p>
                    <button onClick={() => navigate('/tasks')} class="btn bg-fuchsia-300 border-0 hover:bg-fuchsia-200">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;