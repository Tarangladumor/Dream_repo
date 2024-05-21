import React from 'react'
import { useForm } from "react-hook-form"
import { MdNavigateNext } from "react-icons/md"

// Install react-icons , react-hook-form, reduxtoolkit, react-redux

const ProductInfo = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()
  

  return (
    <>
     
      <form className="ml-24 space-y-8 rounded-md border-[1px] border-richblack-700 p-6">

        {/* Product Name */}
      <div className='flex flex-col space-y-1'>

          <label htmlFor="productName" className="text-[1rem] font-medium  text-product-item font-roboto ">Product Name<sup className="text-[#EF476F]">*</sup></label>
                    
          <input type="text"
            id="productName"  
            placeholder="Enter Product name" 
            {...register("productName", { required: true })}
            className='bg-[#499F682B] rounded-md text-[16px] leading-[24px] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold'/>

          { errors.productName && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Product Name is required
          </span>
          )}
 
      </div>

      {/* Category */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="category" className="mt-3 font-medium  text-[1rem] text-product-item font-roboto">Category<sup className="text-[#EF476F]">*</sup></label>
                    
        <select  
            id="category" 
            className=' bg-[#499F682B]
            shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3
             font-roboto text-[16px] rounded-md font-semibold '
                        {...register("category", { required: true })}
                        >
                           <option value="">iphone X</option>
                            <option value="">iphone 13</option>                            <option value="">iphone 14</option>
                        </select>

                        {errors.category && (
          <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
            Category is required
          </span>

        )}
      </div>

      {/* Model Name and Brand Name */}
      <div className='flex gap-5'>

      <div className='flex flex-col space-y-1'>
          <label htmlFor="modelNumber" className="mt-3 text-[1rem] font-medium font-roboto ">Model Number<sup className="text-[#EF476F]">*</sup></label>
                    
          <input type="text"
            id="modelNumber"  
            placeholder="Enter model number" 
            {...register("modelNumber", { required: true })}
            className='bg-[#499F682B] text-[16px] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold'/>

          { errors.modelNumber && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Model Number is required
          </span>
          )}
 
      </div>

      <div className='flex flex-col space-y-1'>
        <label htmlFor="brand" className="mt-3 font-medium  text-[1rem] font-roboto">Brand<sup className="text-[#EF476F]">*</sup></label>
                    
            <select  
              id="brand" 
              className='bg-[#499F682B]
              p-3 font-roboto text-[0.8rem] rounded-md
              shadow-[0_3px_0_0] shadow-[#499F682B]/50
              font-semibold'
              {...register("brand", { required: true })}>

                <option value="">iphone X</option>
                <option value="">iphone 13</option>                            
                <option value="">iphone 14</option>
            </select>

            {errors.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
            Brand is required
          </span>
        )}

      </div>


      </div>

      {/* Product description */}
      <div className='flex flex-col gap-y-2'>

        <label htmlfor="productDesc" className="font-medium text-product-item font-roboto text-[1rem]">Product description<sup className="text-[#EF476F]">*</sup></label>

        <textarea 
          id="productDesc"
          className="w-full border-transparent rounded-lg text-sm  disabled:opacity-50 shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 disabled:pointer-events-none dark:border-transparent bg-[#499F682B]  resize-x-none min-h-[130px] font-roboto text-[16px] font-semibold" 
          {...register("productDesc", { required: true })}
          placeholder="Write a short description of your product">
          </textarea>

          {errors.productDesc && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              product Description is required
            </span>
          )}
        </div>

        <div className="flex gap-x-2">
        
          <button
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]`}
          >
            Save & Next
            <MdNavigateNext />
          </button>
        
        
      </div>

      </form>

    </>
  )
}

export default ProductInfo
 

