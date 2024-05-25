import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";

export const TermsCondition = ({setConfirmCheck}) => {
    const [isChecked, setisChecked] = useState(false);

    const handleCheckboxChange = () => {
        setisChecked(!isChecked);
      };

    

  return (
    <div className='w-[100vw] fixed inset-0 z-[1000] bg-[black] bg-opacity-10 h-[100vh] flex mx-auto justify-center items-center backdrop-blur-sm'>

        <div className='bg-[#28735A] w-[700px] rounded-md p-8 flex flex-col gap-6'>

            <div className='flex items-center gap-4 '>
                 
            <FaAngleLeft className='text-[white] text-[24px]'/>

            <p className='text-white text-[24px]'>Accept terms and conditions and publish!</p>
            </div>

            <div className='flex gap-4'>
                <input 
                className='h-[60px] w-[60px] items-start'
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                />
                <label className='text-white'>
                   ( Terms and Condition )
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos soluta tempora repellat deleniti explicabo accusamus molestiae accusantium possimus corrupti tempore ratione incidunt non, voluptatibus rerum in cum! Consequuntur, minus.
                </label>

            </div>

            <button 
            onClick={()=>setConfirmCheck(null)}
            className={`bg-[#F19A3E] mt-6 w-[200px] text-white px-6 py-2 rounded-md ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
                      }`}  disabled={!isChecked}>Publish</button>
        </div>

    </div>
  )
}
