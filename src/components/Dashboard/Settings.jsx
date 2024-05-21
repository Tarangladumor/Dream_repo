import React from 'react'
import { useLocation } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import EditProfile from './EditProfile';

const Settings = () => {

    const location = useLocation();
    return (
        <div className=' bg-[#DCE2DE]'>

            <div className=' text-xl font-medium font-roboto'>Home / dashboard / <span className=' text-[#F19A3E]'>{location.pathname.split("/").slice(-1)}</span></div>

            <div>

                <div className='mt-16'>
                    <p className=' font-roboto font-semibold text-4xl'>Update your profile here!</p>
                </div>

                <div className=' bg-[#fff] rounded-[60px] pb-14'>

                    <div className=' max-w-[90%] mx-auto'>

                        <div className='pt-16 mt-14'>
                            <p className=' font-roboto font-medium text-2xl'>Edit Profile pic </p>

                            <hr className=' border-t-2 border-black mt-2' />
                        </div>

                        <div className=' flex mt-8'>

                            <div className=' h-[100px] w-[100px] rounded-full bg-green-700'>

                            </div>

                            <div className='flex gap-x-16 ml-12'>

                                <div className=' flex items-center'>
                                    <CiEdit size={24} />
                                    <button className=' underline font-roboto text-[16px] font-medium'>Upload new profile</button>
                                </div>

                                <div className=' flex items-center'>
                                    <RiDeleteBin6Line className='text-red-600' size={19} />
                                    <button className=' font-roboto text-red-600 text-[16px] font-medium'>Delete</button>
                                </div>
                            </div>
                        </div>



                        <div>

                            <div className=' mt-12'>
                                <p className=' font-roboto font-medium text-2xl'>Edit Profile information</p>

                                <hr className=' border-t-2 border-black mt-2' />
                            </div>

                            <div>
                               <EditProfile/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings
