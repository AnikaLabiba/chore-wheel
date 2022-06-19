import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: userInfo, isLoading, refetch } = useQuery('user', () =>
        fetch(`https://intense-lowlands-01074.herokuapp.com/user?email=${email}`)
            .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    // update profile
    const handleUpdateProfile = event => {
        event.preventDefault()
        const email = user.email
        const name = user.displayName
        const phone = event.target.phone.value
        const address = {
            city: event.target.city.value,
            state: event.target.state.value,
            country: event.target.country.value
        }
        const career = {
            company: event.target.company.value,
            occupation: event.target.occupation.value,
            experience: event.target.experience.value
        }
        const userDetails = { email, name, phone, address, career }
        console.log(userDetails);
        fetch(`https://intense-lowlands-01074.herokuapp.com/user/${email}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(updated => {

                if (updated.acknowledged === true) {
                    toast('Profile updated', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    refetch()
                }
            })
    }
    return (
        <div className='lg:min-h-screen'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center lg:justify-center">
                    {/* <!-- Page content here --> */}
                    <div className='flex'>
                        <h2 className='text-3xl lg:my-2 lg:pr-96 md:pr-96'>Update Profile</h2>
                        <label htmlFor="my-drawer-2" className="btn btn-ghost btn-primary drawer-button lg:hidden">Profile Details</label>
                    </div>
                    <div className="card flex justify-center w-full mx-auto px-7">
                        <form onSubmit={handleUpdateProfile} className="card-body w-full lg:w-4/5 mx-auto">
                            <div className="form-control">
                                <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <input name='phone' defaultValue={userInfo?.phone} type="number" placeholder="Phone" className="input input-bordered w-full" />
                            </div>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <div className='flex flex-col lg:flex-row  md:flex-row'>
                                <div className="form-control">
                                    <input name='city' defaultValue={userInfo?.address?.city} type="text" placeholder="City" className="input input-bordered mr-3" />
                                </div>
                                <div className="form-control">
                                    <input name='state' defaultValue={userInfo?.address?.state} type="text" placeholder="State" className="input input-bordered mr-3" />
                                </div>
                                <div className="form-control">
                                    <input name='country' defaultValue={userInfo?.address?.country} type="text" placeholder="Country" className="input input-bordered mr-3" />
                                </div>
                            </div>

                            <label className="label">
                                <span className="label-text">Career</span>
                            </label>
                            <div className='flex flex-col lg:flex-row md:flex-row'>
                                <div className="form-control">
                                    <input name='company' defaultValue={userInfo?.career?.company} type="text" placeholder="Company Name" className="input input-bordered mr-3" />
                                </div>
                                <div className="form-control">
                                    <input name='occupation' defaultValue={userInfo?.career?.occupation} type="text" placeholder="Occupation" className="input input-bordered mr-3" />
                                </div>
                                <div className="form-control">
                                    <input name='experience' type="number" defaultValue={userInfo?.career?.experience} placeholder="Years of Experience" className="input input-bordered mr-3" />
                                </div>
                            </div>
                            <input className='btn btn-sm bg-rose-300  hover:bg-rose-400 border-0 w-full text-white' type="submit" value="Submit" />
                        </form>
                    </div>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-rose-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <div className="avatar placeholder">
                                <div className="bg-pink-200 text-neutral-content rounded-full w-24 mx-auto">
                                    <span className="text-3xl">{user?.displayName}</span>
                                </div>
                            </div>
                        </li>
                        <li className='text-xl'>Email: {user?.email}</li>
                        <div className='mt-3'>

                            {
                                userInfo && <>
                                    <h3 className='font-bold text-xl'>Profile Details</h3>
                                    <li>Phone: {userInfo?.phone}</li>
                                    <li>Address: {userInfo?.address?.city}, {userInfo?.address?.country}</li>
                                    <li>Occupation: {userInfo?.career?.occupation}</li>
                                    <li>Company: {userInfo?.career?.company}</li>
                                    <li>Years of Experience: {userInfo?.career?.experience}</li>
                                </>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Profile;