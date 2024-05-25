import React,{useState} from 'react'
import { ProductDescModal } from './ProductDescModal';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

const products=[
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
  {
      product_name:"Redmi Note 9 pro",
      category:"SmartPhone",
      brand:"xiomi",
  },
]

export const AllProduct = () => {
    const [showProductDetails, setShowProductDetails] = useState(false);
    const location = useLocation();
  return (
    <>
      
    <div className='bg-[#DCE2DE] '>

    <div><p className='text-xl font-medium ml-5 p-6'>
    Home / dashboard / <span className=' text-[#F19A3E]'>{location.pathname.split("/").slice(-1)}</span></p>
    </div>

    <div className='p-2 space-y-7'>

        <div>
            <p className='ml-[70px] text-[2.25rem] font-semibold'>Check out the list of products!</p>
            <p className=' ml-[70px]  text-[1rem] text-[#174B3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
        </div>

        <div className='flex flex-col'>

         <div  className='overflow-y-auto h-[600px] '>
            {
                products.map((product,index) => (

                 <div key={index} className=' bg-white rounded-md mx-auto max-w-[70%] mb-5 mt-5 px-6 py-8'>
                    <div className='flex items-center justify-center font-roboto gap-x-[120px]'>

                        <div className='flex flex-col space-y-2'>
                            <p className=' text-[#00000085] text-[1rem]'>Product name</p>
                            <p>{product.product_name}</p>
                        </div>

                        <div className=' flex flex-col space-y-2'>
                            <p className=' text-[#00000085] text-[1rem]'>Category</p>
                            <p>{product.category}</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <p className=' text-[#00000085] text-[1rem]'>Brand</p>
                            <p>{product.brand}</p>
                        </div>

                        <div className='underline text-[#093FFE] text-base font-medium'>
                        <Link onClick={()=> setShowProductDetails(true)} >View More</Link>
                    </div>

                    </div>
                   
                    <div className='flex gap-4 justify-center font-roboto mt-4'>

                    <FaRegHeart className=' text-red-600 ml-8'/>
                        <p className='-mt-1 text-[#174B3A]'> 9 shopkeepers have shown interest in this product 
                        <span className='underline ml-2 text-[#F19A3E]'><Link to={"/"}>view list</Link></span></p>
                    </div>
                 </div>   
                ))
            }
         </div>

        </div>

    </div>

    </div>

    {
        showProductDetails && <ProductDescModal showProductDetails={showProductDetails} setShowProductDetails={setShowProductDetails}/>
    }

    </>
   
  )
}
