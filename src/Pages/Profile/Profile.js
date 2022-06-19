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
        fetch(`http://localhost:5000/user?email=${email}`)
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
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(updated => {
                console.log(updated);
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
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center lg:justify-center">
                    {/* <!-- Page content here --> */}
                    <div className='flex'>
                        <h2 className='text-3xl lg:my-2 lg:pr-96 md:pr-96'>Update Profile</h2>
                        <label for="my-drawer-2" class="btn btn-ghost btn-primary drawer-button lg:hidden">Profile Details</label>
                    </div>
                    <div class="card flex justify-center w-full mx-auto px-7">
                        <form onSubmit={handleUpdateProfile} class="card-body w-full lg:w-4/5 mx-auto">
                            <div class="form-control">
                                <input name='name' type="text" value={user?.displayName} class="input input-bordered w-full" required />
                            </div>
                            <div class="form-control">
                                <input name='email' type="email" value={user?.email} class="input input-bordered w-full" required />
                            </div>
                            <div class="form-control">
                                <input name='phone' type="number" placeholder="Phone" class="input input-bordered w-full" required />
                            </div>
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <div className='flex flex-col lg:flex-row  md:flex-row'>
                                <div class="form-control">
                                    <input name='city' type="text" placeholder="City" class="input input-bordered mr-3" required />
                                </div>
                                <div class="form-control">
                                    <input name='state' type="text" placeholder="State" class="input input-bordered mr-3" required />
                                </div>
                                <div class="form-control">
                                    <input name='country' type="text" placeholder="Country" class="input input-bordered mr-3" required />
                                </div>
                            </div>

                            <label class="label">
                                <span class="label-text">Career</span>
                            </label>
                            <div className='flex flex-col lg:flex-row md:flex-row'>
                                <div class="form-control">
                                    <input name='company' type="text" placeholder="Company Name" class="input input-bordered mr-3" required />
                                </div>
                                <div class="form-control">
                                    <input name='occupation' type="text" placeholder="Occupation" class="input input-bordered mr-3" required />
                                </div>
                                <div class="form-control">
                                    <input name='experience' type="number" placeholder="Years of Experience" class="input input-bordered mr-3" required />
                                </div>
                            </div>
                            <input className='btn btn-sm bg-rose-300  hover:bg-rose-400 border-0 w-full text-white' type="submit" value="Submit" />
                        </form>
                    </div>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-rose-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <div class="avatar placeholder">
                                <div class="bg-pink-200 text-neutral-content rounded-full w-24 mx-auto">
                                    <span class="text-3xl">{user?.displayName}</span>
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