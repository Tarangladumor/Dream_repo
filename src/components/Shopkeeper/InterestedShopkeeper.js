import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const InterestedShopkeeper = () => {
    const location = useLocation();

    const IntrestedProduct = [
        {
            Shopkeeper_name:"abc",
            Shop_Address: "abc road, waghodiya",
            Estimated_price: "$100",
        },
        {
            Shopkeeper_name:"bcd",
            Shop_Address: "bcd road, waghodiya",
            Estimated_price: "$200",
        },
        {
            Shopkeeper_name:"bcd",
            Shop_Address: "bcd road, waghodiya",
            Estimated_price: "$200",
        },
      ]
  return (
    <div className=' bg-[#DCE2DE] '>

    <div className=' text-xl font-medium font-roboto'>Home / dashboard / <span className=' text-[#F19A3E]'>{location.pathname.split("/").slice(-1)}</span></div>

    <div className='p-8 space-y-7'>
        <div className=' font-roboto '>
            <p className=' text-[2.25rem]'>See who is interested in your product!</p>
            <p className=' text-[1.25rem] text-[#174B3A]'>Look for the shopkeepers interested on your product and grab best deals!</p>
        </div>

        <div className=' font-roboto text-[#174B3A] font-semibold'>
            <p>Interested shopkeepers</p>
        </div>
        {/* interested shopkeeper */}
        
            <div className='flex flex-col '>
            <div  className='overflow-y-auto h-[250px] '>
                {
                    IntrestedProduct.map((card,index) => (
                        
                            <div key={index} className=' bg-white rounded-2xl mx-auto max-w-[90%] mb-5 mt-5'>
                            <div className=' flex justify-between font-roboto p-3'>
                                <div className='p-3 space-y-2 ml-10'>
                                    <p className='text-[22px] font-roboto'>{card.Shopkeeper_name}</p>
                                    <p className=' font-roboto text-[16px] text-[#00000099]'>Shop Address: <span>{card.Shop_Address}</span></p>
                                </div>
                                <div className=' text-[#F19A3E] p-3 space-y-3 mr-10'>
                                    <p>Estimated price: <span>{card.Estimated_price}</span></p>
                                    <p className=' underline'>
                                    <Link to={"/"}>More details</Link>
                                    </p>
                                    
                                </div>
                            </div>
                            </div>

                    
                        
                    ))
                }
                </div>
            </div>

            <div className=' bg-[#FEFDED] max-w-[90%] mx-auto rounded-2xl  '>
                <div className='p-8'>
                <p className=' text-[#174B3A] text-[1.75rem] font-roboto'>Product Information</p>
                <hr className=" w-auto h-1 border-0 rounded bg-[#000000] m-2" />
                </div>
                <div className=' flex flex-col '>
                    <div className='  flex justify-between'>
                        <div className='space-y-5 ml-28'>
                            <div className=' font-roboto'>
                                <p className=' text-[#000000D1] text-[1.5rem]'>Product name</p>
                                <p className=' text-[#00000099] text-[1.25rem]'>Redmi note 9 pro</p>
                            </div>
                            <div className=' font-roboto'>
                                <p className=' text-[#000000D1] text-[1.5rem]'>Model number</p>
                                <p className=' text-[#00000099] text-[1.25rem]'>AJIX1234</p>
                            </div>
                        </div>
                        <div className='space-y-5 mr-28 mb-5'>
                            <div className=' font-roboto'>
                                    <p className=' text-[#000000D1] text-[1.5rem]'>Category</p>
                                    <p className=' text-[#00000099] text-[1.25rem]'>Smartphone</p>
                                </div>
                            <div className=' font-roboto'>
                                <p className=' text-[#000000D1] text-[1.5rem]'>Brand</p>
                                <p className=' text-[#00000099] text-[1.25rem]'>Xiomi</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* product description */}
            <div className='ml-28 space-y-4 pb-5'>
                <div className=' font-roboto font-bold text-[#000000D1] text-[1.5rem]'>
                    <p>Product description</p>
                </div>
                <div className=' text-[#00000078] text-[1.25rem] font-inter w-[70%]'>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  </p>
                </div>
            </div>

            </div>

                
            
        </div>
    </div>
  )
}

export default InterestedShopkeeper
