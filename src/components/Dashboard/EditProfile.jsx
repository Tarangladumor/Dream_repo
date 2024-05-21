import React from 'react'
import { useForm } from 'react-hook-form';

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

const EditProfile = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitProfileform = () => {

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
                        defaultValue="firstname" />
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
                        defaultValue="lastName" />
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
                        defaultValue="gender">
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
                                Please enter your Date of Birth
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
                        {...register("contactNumber", { required: true })}
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

            <div className='mt-8'>
                <button className=' bg-[#F19A3E] text-2xl font-medium font-roboto px-10 py-3 text-white rounded-2xl'>Save & Update</button>
            </div>
            </form>
        </div>
    )
}

export default EditProfile
