
import React from 'react'
import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"
import ProductInformationForm from "./Product_Information_Form/ProductInfo"


export const RenderSteps = () => {

    const { step } = useSelector((state) => state.product)

    const steps = [
        {
            id: 1,
            title: "Product Information",
        },
        {
            id: 2,
            title: "Product Builder",
        },
        {
            id: 3,
            title: "Publish",
        },
    ]

    return (
        <>
            <div className="relative mb-2 flex w-full justify-center">
                {
                    steps.map((item) => (
                        <>

                            <div className="flex flex-col items-center "
                                key={item.id} >

                                <button
                                    className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${step === item.id
                                        ? "border-[#F19A3E] text-[#F19A3E]"
                                        : "border-[#174B3A] text-[#174B3A]"
                                        } ${step > item.id && "bg-[#F19A3E] text-[#F19A3E]"}} `}
                                >
                                    {step > item.id ? (
                                        <FaCheck className="font-bold text-white" />
                                    ) : (
                                        item.id
                                    )}
                                </button>

                            </div>

                            {item.id !== steps.length && (
                                <>
                                    <div
                                        className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${step > item.id ? "border-[#F19A3E]" : "border-[#585D69]"
                                            } `}
                                    ></div>
                                </>
                            )}


                        </>

                    ))

                }
            </div>

            <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[130px] flex-col items-center gap-y-2"
              key={item.id}
            >
              
            </div>

          </>
        ))}
      </div>
      
      {<ProductInformationForm/>}

        </>
    )
}
