import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { changePassword } from '../../Services/Operation/settingsAPI'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { CiLock,CiUnlock } from 'react-icons/ci'

const ChangePassword = () => {
    const {token} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitPasswordForm = async (data) => {
        try {
          await changePassword(token, data);
        } catch (error) {
          console.log("ERROR MESSAGE - ", error.message);
        }
      };

  return (
    <div>
    <div className=" mt-12">
                <p className=" font-roboto font-medium text-2xl">
                  Edit your password
                </p>

                <hr className=" border-t-2 border-black mt-2" />
            </div>

            <form onSubmit={handleSubmit(submitPasswordForm)}className='mt-10 '>

              <div className='flex gap-6 items-center '> 


                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Current Password"
                        {...register("password", { required: true })}
                        className="input_feild"
                    />

                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[9px] z-[10] cursor-pointer opacity-20"
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible size={30} />
                        ) : (
                            <AiOutlineEye size={30} />
                        )}
                    </span>
                </div>


                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Change Password"
                        {...register("newPassword", { required: true })}
                        className="input_feild "
                    />

                    <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[9px] z-[10] cursor-pointer opacity-20"
                    >
                        {showConfirmPassword ? (
                            <CiLock size={30} />
                        ) : (
                            <CiUnlock size={30} />
                        )}
                    </span>
                </div>

                
            
            </div>

            <div className='mt-8 flex justify-between'>
                    <button onClick={() => navigate("/dashboard/my-profile")} className='bg-[#F19A3E] text-[18px] font-medium font-roboto px-8 py-3 text-white rounded-md'
                    >Cancel</button>
                    <button type='submit' className='bg-[#F19A3E] text-[18px] font-medium font-roboto px-8 py-3 text-white rounded-md'>Save & Update</button>
                </div>

            </form>
            </div>
  )
}

export default ChangePassword