import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';


const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <form class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" class="block mb-2 mt-3 font-medium text-gray-900 text-xl text-loginitem font-roboto">Email</label>
                    <div className=' relative'>
                        <input className=' bg-loginfieldbg transition-all duration-200 hover:scale-105 font-roboto' type="email" name="email" id="" placeholder='Email' />
                        <MdOutlineEmail className='absolute right-3 top-[18px] z-[10] cursor-pointer opacity-20' size={30} />
                    </div>

                </div>
                <div className=' relative'>
                    <label for="password" class="block mb-2 text-xl font-medium text-gray-900  text-loginitem font-roboto">Password</label>
                    <input className=' bg-loginfieldbg transition-all duration-200 hover:scale-105 font-roboto input_feild' type={showPassword ? "text" : "password"} name="email" id="" placeholder='••••••••' />
                    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[45px] z-[10] cursor-pointer opacity-20'>
                        {showPassword ? (
                            <AiOutlineEyeInvisible size={30} />
                        ) : (
                            <AiOutlineEye size={30} />
                        )}
                    </span>

                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                    </div>
                    <a href="#" class="text-sm font-medium hover:underline dark:text-primary-500 font-roboto underline text-[#2378C7]">Forgot password?</a>
                </div>
                <div className=''>
                    <button className=' bg-register-rgba m-auto p-4 rounded-3xl tracking-widest w-[40%] transition-all duration-200 hover:scale-105 text-white flex justify-center text-2xl mb-6 font-semibold font-roboto'>Login</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
