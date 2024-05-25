import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {updateProfile } from '../../Services/Operation/settingsAPI';
import ChangePassword from './ChangePassword';
const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

const EditProfile = () => {

    const {user} = useSelector((state) => state.profile)
    const {token} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch() 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
   
    const submitProfileform = async (data) => {
        try{
            dispatch(updateProfile(token,data))
          }
          catch(error) {
            console.log("ERROR MESSAGE - ", error.message)
          }
    }

    return (
        <div className='mt-8'>

            <form onSubmit={handleSubmit(submitProfileform)} className='flex flex-col gap-8'>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='flex flex-col gap-2 lg:w-[48%]'>
                    <label htmlFor='firstName' className='font-roboto text-[16px] opacity-60'>
                        First Name
                    </label>
                    <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='Enter first name'
                        className='input_feild'
                        {...register("firstName", { required: true })}
                        defaultValue={user?.firstName} />
                    {
                        errors.firstName && (
                            <span className='-mt-1 text-[12px] text-yellow-100'>
                                Please enter your first name.
                            </span>
                        )
                    }
                </div>
                <div className='flex flex-col gap-2 lg:w-[48%]'>
                    <label htmlFor='lastName' className='font-roboto text-[16px] opacity-60'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Enter last name'
                        className='input_feild'
                        {...register("lastName", { required: true })}
                        defaultValue={user?.lastName} />
                    {
                        errors.lastName && (
                            <span className='-mt-1 text-[12px] text-yellow-100'>
                                Please enter your last name.
                            </span>
                        )
                    }
                </div>
            </div>

            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='flex flex-col gap-2 lg:w-[48%]'>
                    <label className='font-roboto text-[16px] opacity-60' htmlFor='dateOfBirth'>
                        Date of Birth
                    </label>
                    <input
                        type='date'
                        name='dateOfBirth'
                        id='dateOfBirth'
                        className='input_feild'
                        {...register("dateOfBirth", {
                            required: {
                                value: true,
                                message: "Please enter your Date Of Birth."
                            },
                            max: {
                                value: new Date().toISOString().split("T")[0],
                                message: "Date of birth cannot be in the future"
                            }
                        })}
                        defaultValue={user?.profile?.dateOfBirth}
                    />
                    {
                        errors.dateOfBirth && (
                            <span className='-mt-1 text-[12px] text-yellow-100'>
                                {errors.dateOfBirth.message}
                            </span>
                        )
                    }
                </div>
                <div className='flex flex-col lg:w-[48%]'>
                    <label className='font-roboto text-[16px] opacity-60' htmlFor='gender'>
                        Gender
                    </label>
                    <select
                        type='text'
                        name='gender'
                        id='gender'
                        className='input_feild'
                        {...register("gender", { required: true })}
                        defaultValue={user?.additionalDetails?.gender}>
                        {
                            genders.map((ele, i) => {
                                return (
                                    <option key={i} value={ele}>
                                        {ele}
                                    </option>
                                )
                            })
                        }
                    </select>{
                        errors.gender && (
                            <span className='-mt-1 text-[12px] text-yellow-100'>
                                Please enter your gender
                            </span>
                        )
                    }
                </div>
            </div>

            <div className='flex flex-col justify-center gap-5 lg:flex-row'>
                <div className='flex flex-col justify-center gap-2 lg:w-[48%]'>
                    <label htmlFor='lastName' className='font-roboto text-[16px] opacity-60'>
                        Contact Number
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Enter contact number'
                        className='input_feild'
                        {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number."
                  },
                  maxLength: {
                    value: 12 , message: "Invalid Contact Number"},
                  minLength: {
                    value: 10 , message: "Invalid Contact Number"
                  },
                  }
                )}
                defaultValue={user?.profile?.contactNumber}
                         />
                    {
                        errors.lastName && (
                            <span className='-mt-1 text-[12px] text-yellow-100'>
                                Please enter your Contact number.
                            </span>
                        )
                    }
                </div>
            </div>

            <div className='mt-8 flex justify-between'>
                    <button className='bg-[#F19A3E] text-2xl font-medium font-roboto px-10 py-3 text-white rounded-2xl' onClick={() => navigate("/dashboard/my-profile")}>cancel</button>
                <button type='submit' className='bg-[#F19A3E] text-2xl font-medium font-roboto px-10 py-3 text-white rounded-2xl'>Save & Update</button>
            </div>
            </form>
            
            <div>
                <ChangePassword/>
            </div>

        </div>
    )
}

export default EditProfile
