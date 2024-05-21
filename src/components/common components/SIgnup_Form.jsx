import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { CiLock, CiUnlock } from "react-icons/ci";

const SIgnup_Form = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div>

            <div className='flex flex-col gap-5'>

                <div className='flex gap-3'>

                    <input
                        type='text'
                        name='firstName'
                        placeholder='First name'
                        className='input_feild text-[#174B3A]' />

                    <input
                        type='text'
                        name="lastName"
                        placeholder='Last name'
                        className='input_feild' />
                </div>

                <div className='relative'>
                    <input
                        type='email'
                        name='email'
                        placeholder="Email"
                        className='input_feild' />

                    <MdOutlineEmail className='absolute right-3 top-[20px] z-[10] cursor-pointer opacity-20' size={30} />
                </div>

                <div className='flex gap-3'>

                    <select name='accountType' className='input_feild'>
                        <option className='input_feild opacity-20'>Vendor</option>
                        <option className='input_feild'>Individual</option>
                    </select>

                    <select name='city' className='input_feild'>
                        <option className='input_feild opacity-20'>city</option>
                    </select>

                </div>

                <div className='flex gap-3'>

                    <select name='pincode' className='input_feild'>
                        <option className='input_feild opacity-20'>pincode</option>
                    </select>

                    <select name='state' className='input_feild'>
                        <option className='input_feild opacity-20'>state</option>
                    </select>

                </div>

                <input
                    type='text'
                    name='address'
                    placeholder='Address'
                    className='input_feild' />


                <div className='relative'>

                    <input
                        type={showPassword ? "text" : "password"}
                        name='password'
                        placeholder='Password'
                        className='input_feild' />

                    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[9px] z-[10] cursor-pointer opacity-20'>
                        {showPassword ? (
                            <AiOutlineEyeInvisible size={30} />
                        ) : (
                            <AiOutlineEye size={30} />
                        )}
                    </span>


                </div>

                <div className='relative'>

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        className='input_feild' />

                    <span onClick={() => setShowConfirmPassword((prev) => !prev)} className='absolute right-3 top-[9px] z-[10] cursor-pointer opacity-20'>
                        {showConfirmPassword ? (
                            <CiLock size={30} />
                        ) : (
                            <CiUnlock size={30} />
                        )}
                    </span>

                </div>



                <div className=' text-center mt-3'>
                    <button type='submit' className=' bg-[#F19A3E] text-white py-4 px-28 rounded-3xl text-[28px] font-semibold hover:scale-105 transition-all duration-200 font-roboto'>
                        Get OTP
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SIgnup_Form
