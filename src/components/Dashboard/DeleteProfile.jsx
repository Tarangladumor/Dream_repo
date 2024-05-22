import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteProfile = () => {
  return (
    <div className=' mt-10'>
      
      <div className=' bg-[#ff0000] rounded-2xl bg-opacity-70'>

      <div className=' max-w-[90%] mx-auto pb-10'>
        <div className='flex gap-4 justify-start py-10'>
            <div className=' bg-[#C0242D] p-3 rounded-full w-fit h-fit aspect-square'>
                <RiDeleteBin5Line size={25}/>
            </div>

            <div className='flex flex-col text-white tracking-wide'>
                <h2 className=' font-roboto font-semibold text-xl'>Delete Account!</h2>
                <p className=' font-roboto font-normal text-sm'>Would you like to delete account?</p>
                <p className=' font-roboto font-normal text-sm'>Deleting your account will remove all the associated details!</p>
            </div>
        </div>

        <div className='flex justify-start ml-16'>
            <button className=' bg-white text-[#F50C0C] font-roboto font-medium text-lg px-16 py-2 rounded-xl hover:bg-[#C0242D] hover:text-white hover:scale-110 transition-all duration-300'>Delete Account</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DeleteProfile
