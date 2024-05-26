import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

const ShopDetailModel = ({showShopkeeperDetails,setShowShopkeeperDetails}) => {
    const details=[
        {
            Shopkeeper_name:"abc",
            Shop_name:"enterprise",
            Contact:"972384540",
            GST_number:"abcd1234",
            address:"Shop Address: Abc road, near abc place, waghodiya"
        }
    ]

    const closeModel = () =>{
        setShowShopkeeperDetails(null)
    }
  return (
   
<div className=' w-[100vw] h-[100vh] z-[1000] flex justify-center items-center fixed inset-0 bg-[white] bg-opacity-10 backdrop-blur-sm'>
      <div className='text-white bg-[#292D2A] p-10 font-roboto rounded-2xl'>
      {
        details.map((detail,index) => (
            <div >
            <div className='flex justify-end mb-3 text-xl' onClick={closeModel}>
                    <IoClose/>
                </div>
                <div className='flex space-x-8'>
              
                <div className=' space-y-5'>
                    <p className=' text-[1.5rem]'>ShopKeeper_name: {detail.Shopkeeper_name}</p>
                    <p className=' text-[1.2rem] text-[#FFFFFFF2] '>Contact: {detail.Contact}</p>
                </div>
                <div className=' space-y-5'>
                    <p className=' text-[1.5rem]'>Shop_name : {detail.Shop_name}</p>
                    <p className=' text-[1.2rem] text-[#FFFFFFF7] '>GST number: {detail.GST_number}</p>
                </div>
                </div>
                <div className='flex flex-col'>
                <div className='text-[0.8rem] text-[#FFFFFFB0] mt-4'>
                     <p>Shop Address: {detail.address}</p>
                </div>
                <div className=' underline mt-3 text-[#1477EB]'>
                    <Link to={"/"}>visit profile</Link>
                </div>
                </div>
                
            </div>
       
        ))
      }
      
        
       
      </div>
    </div>
  )
}

export default ShopDetailModel
