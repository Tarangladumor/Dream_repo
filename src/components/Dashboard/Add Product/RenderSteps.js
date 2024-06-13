
import React from 'react'
import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"
import ProductInformationForm from "./Product_Information_Form/ProductInfo"


export const RenderSteps = () => {


    return (
        <>
            <div className="relative mb-2 flex w-full justify-center">
               
            </div>

            <div className="relative mb-16 flex w-full select-none justify-between">
       
      </div>


      {<ProductInformationForm/>}

      {step === 1 && <ProductInformationForm/>}
      {/* {step === 2 && <ProductImages />}
      {step === 3 &&  <ProductPreview/> } */}
        </>
    )
}
