import React from 'react'
import LOGIN from '../../assets/login_image.png'
import { FaAngleLeft } from "react-icons/fa";
import LoginForm from '../common components/LoginForm';

const Login = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div className='w-[80%]  shadow-2xl m-3 flex rounded-3xl '>
                {/* box-1 */}
                <div className='w-[50%]'>
                    <div className='flex text-section-rgba font-roboto text-[1.15rem] p-5'>
                        <FaAngleLeft className='mt-1' />
                        <p className='font-roboto font-medium'>Back to signup</p>
                    </div>

                    <div className='ml-14'>
                        <div className=' text-section-rgba'>
                            <p className='text-[2.25rem] font-roboto font-semibold'>Welcome Back!</p>
                            <p className='text-[1.5rem] font-roboto -mt-[10px] font-medium'>Login to get back your account.</p>
                        </div>
                        
                        <LoginForm/>
                    </div>
                </div>
                {/* box-2 */}
                <div className='w-[50%]'>
                    <img src={LOGIN} alt="" />
                </div>

            </div>
        </div>

    )
}

export default Login
