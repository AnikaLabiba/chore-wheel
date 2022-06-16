import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token] = useToken(user || googleUser)

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (googleLoading || updating || loading) {
        return <Loading />
    }
    if (user) {
        console.log(user);
    }
    if (googleUser || user) {
        navigate('/tasks')
    }

    let errorElememt
    if (googleError || error || updateError) {
        errorElememt = <p className='text-red-500'>
            {googleError?.message}
            {error?.message}
            {updateError?.message}
        </p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* Phone */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="number"
                                placeholder="Your Phone"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        {/* Address */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        {/* Country */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Country"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("country", {
                                    required: {
                                        value: true,
                                        message: 'Country is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.country?.type === 'required' && <span className="label-text-alt text-red-500">{errors.country.message}</span>}
                            </label>
                        </div>
                        {/* Company */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Company"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("company", {
                                    required: {
                                        value: true,
                                        message: 'Company is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.company?.type === 'required' && <span className="label-text-alt text-red-500">{errors.company.message}</span>}

                            </label>
                        </div>
                        {/* Occupation */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Occupation"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("occupation", {
                                    required: {
                                        value: true,
                                        message: 'Occupation is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.occupation?.type === 'required' && <span className="label-text-alt text-red-500">{errors.occupation.message}</span>}
                            </label>
                        </div>
                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-sm input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {errorElememt}
                        <input input-sm className='btn w-full max-w-xs bg-fuchsia-300 hover:bg-fuchsia-300 border-0' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account? <Link className='text-blue-400' to="/login">Please login</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="bg-transparent btn-sm hover:bg-fuchsia-300 text-fuchsia-700 font-semibold hover:text-white py-2 px-4 border border-fuchsia-300 hover:border-transparent rounded"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Register;