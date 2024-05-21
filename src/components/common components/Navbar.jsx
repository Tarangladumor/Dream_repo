import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/LOGO.png'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [loading,setLoading] = useState(false);
  return (
    <div className=' bg-[#fff] py-4 border-2 '>

      <div className=' w-10/12 mx-auto flex justify-between items-center '>

        <Link to="/">
          <img src={LOGO} loading='lazy' height={45} width={45}/>
        </Link>

        <nav className='ml-10'>
          <ul className='flex flex-row gap-x-20 font-roboto font-medium text-2xl'>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className='flex gap-x-5'>
          {
            user && user.accountType != "Vendor" && (
              <Link to="/dashboard/my-products" className='relative'>
                hmmmmmm
              </Link>
            )
          }
          {
            token === null && (
              <Link to="/signup">
                <button className=' border-2 border-[#28735A] text-[#28735A] text-2xl font-medium py-1 px-7 rounded-2xl font-inter hover:bg-[#28735A] hover:text-white hover:scale-110 transition-all duration-200'>Signup</button>
              </Link>
            )
          }

{
            token === null && (
              <Link to="/login">
                <button className='bg-[#28735A] border-2 border-[#28735A] text-white font-medium text-2xl font-inter py-1 px-7 rounded-2xl hover:bg-[#fff] hover:text-[#28735A] hover:scale-110 transition-all duration-200'>Login</button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
