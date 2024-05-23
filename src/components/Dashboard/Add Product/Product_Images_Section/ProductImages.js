import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPage2Data, setStep } from "../../../../Slices/productSlice";


const ProductImages = () => {

  const dispatch = useDispatch();
  const [productImages, setProductImages] = useState([]);
  const [invoiceImages, setInvoiceImages] = useState([]);
  const [productimgNames, setProductImgNames] = useState([]);
  const [invoiceimgNames, setInvoiceimgNames] = useState([]);



  // const handleProductImages = (e) => {
  //   if (e.target.files) {
  //     const productfileArray = Array.from(e.target.files);
  
  //     setProductImgNames((prevImgNames) => {
  //       const totalImages = prevImgNames.length + productfileArray.length;
  //       if (totalImages <= 3) {
  //         return [...prevImgNames, ...productfileArray.map((file) => file.name)];
  //       } else {
  //         const allowedFiles = productfileArray.slice(0, 3 - prevImgNames.length);
  //         return [...prevImgNames, ...allowedFiles.map((file) => file.name)];
  //       }
  //     });
  
  //     setProductImages((prevImages) => {
  //       const totalImages = prevImages.length + productfileArray.length;
  //       if (totalImages <= 3) {
  //         return [...prevImages, ...productfileArray];
  //       } else {
  //         const allowedFiles = productfileArray.slice(0, 3 - prevImages.length);
  //         return [...prevImages, ...allowedFiles];
  //       }
  //     });
  
  //     console.log("productarray : ", productImages);
  //   }
  // };

  const handleInvoiceImages = (e) => {
    if (e.target.files) {
      const invoicefileArray = Array.from(e.target.files);
  
      // Only take the first file if multiple files are selected
      const selectedFile = invoicefileArray[0];

  
      setInvoiceimgNames([selectedFile.name]);
      setInvoiceImages([selectedFile]);
  
      console.log("invoiceArray", invoicefileArray);
    }
  };

  // const [formData,setFormData] = useState({
  //   productImage : [],
  //   invoiceImage : []
  // })

  // const {productImage : productImages,invoiceImage : invoiceImages} = formData

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      productImage: productImages,
      invoiceImage: invoiceImages,
    };
    console.log(formData)
    dispatch(setPage2Data(formData));
    dispatch(setStep(3));
  }

  const handleProductImages = (e) => {
    if (e.target.files) {
      const productfileArray = Array.from(e.target.files);
  
      // Only take the first three files if more than three are selected
      // const limitedFileArray = productfileArray.slice(0, 3);

  
      setProductImgNames((prevImgNames) => [
        ...prevImgNames,
        ...productfileArray.map((file) => file.name),
      ]);
  
      setProductImages((prevImages) => [
        ...prevImages,
        ...productfileArray,
      ]);
  
      console.log("productarray : ", productfileArray);
    }
  };



  return (
    <div>
      <form onSubmit={handleOnSubmit} className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
        {/* Product Image */}
        <div className="flex flex-col">
          <p className="text-[1rem] font-medium font-roboto ">
            Product Images<sup className="text-[#EF476F]">*</sup>
          </p>

          <div>
            <label htmlFor="files" name="files">
              <input
                id="files"
                name="files"
                className="hidden"
                type="file"
                multiple
                onChange={handleProductImages}
              />

              <div className="flex p-3 w-full rounded-md items-center justify-between shadow-lg">
                <p className="text-[16px]">Choose Images</p>
                <IoAdd className=" text-[30px]" />
              </div>
            </label>

            <p className="p-4 mt-2  text-sm">
              {" "}
              <sup className="text-[#EF476F] text-[15px]">*</sup> Atleast 3
              required
            </p>
          </div>
        </div>

        {/* Invoice image */}
        <div className="flex flex-col">
          <p className="text-[1rem] font-medium font-roboto ">
            Invoice Image<sup className="text-[#EF476F]">*</sup>
          </p>

          <div>
            <label htmlFor="invoicefiles" name="invoicefiles">
              <input
                id="invoicefiles"
                name="invoicefiles"
                className="hidden"
                type="file"
                onChange={handleInvoiceImages}
              />

              <div className="flex p-3 w-full rounded-md items-center justify-between shadow-lg">
                <p className="text-[16px]">Choose Images</p>
                <IoAdd className=" text-[30px]" />
              </div>
            </label>
          </div>
        </div>

        <p className="text-[1rem] mt-6 font-medium font-roboto ">
          Uploaded Product Image
        </p>

        <div className="flex flex-col shadow-lg mb-14 p-[16px] rounded-md">
          {productimgNames.length > 0 ? (
            productimgNames.map((image, index) => (
              <div
                key={index}
                className="flex p-2 mt-2 rounded-md border-2 border-[#F19A3E] justify-between"
              >
                <p>{image}</p>
                <div className="flex gap-6">
                  <FaRegEdit className="text-[30px]" />
                  <VscPreview className="text-[30px]" />
                  <AiOutlineDelete className="text-[30px]" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center h-[100px] flex items-center justify-center">
              <p className="text-[1rem] text"> No image uploaded yet !</p>
            </div>
          )}
        </div>

        <p className="text-[1rem] mt-6 font-medium font-roboto ">Uploaded Invoice Image</p> 

<div className='flex flex-col shadow-lg mb-14 p-[16px] rounded-md'>

{ invoiceimgNames.length > 0 ? (

  invoiceimgNames.map((image,index)=>(
    <div key={index} className='flex p-2 mt-2 rounded-md border-2 border-[#F19A3E] justify-between'>
      <p>{image}</p>
      <div className='flex gap-6'>
      <FaRegEdit className='text-[30px]'/>
      <VscPreview className='text-[30px]'/>
      <AiOutlineDelete className='text-[30px]' />
       
      </div>
    </div>
  ))

) : (
<div className='text-center h-[100px] flex items-center justify-center' >
 <p className='text-[1rem] text'> No image uploaded yet !</p>
</div> 
)
}

</div>

        <button type="submit"
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]`}
        >
          Save & Next
          <MdNavigateNext />
        </button>
      </form>
    </div>
  );
};

export default ProductImages;
