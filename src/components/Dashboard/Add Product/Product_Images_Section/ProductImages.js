import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";


const ProductImages = () => {
  const [selectImages, setSelectImages] = useState([]);
  const [imgNames, setImgNames] = useState([]);

  const {Page1Data} = useSelector((state)=>state.product)

  console.log("data",Page1Data)

  const handleImages = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);

      setImgNames((prevImgNames) => [
        ...prevImgNames,
        ...fileArray.map((file) => file.name),
      ]);

      setSelectImages((prevImages) => [...prevImages, ...fileArray]);

      console.log(fileArray);
    }
  };

  return (
    <div>
      <form className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
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
                onChange={handleImages}
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
            <label htmlFor="files" name="files">
              <input
                id="files"
                name="files"
                className="hidden"
                type="file"
                multiple
                onChange={handleImages}
              />

              <div className="flex p-3 w-full rounded-md items-center justify-between shadow-lg">
                <p className="text-[16px]">Choose Images</p>
                <IoAdd className=" text-[30px]" />
              </div>
            </label>
          </div>
        </div>

        <p className="text-[1rem] mt-6 font-medium font-roboto ">
          Uploaded Image
        </p>

        <div className="flex flex-col shadow-lg mb-14 p-[16px] rounded-md">
          {imgNames.length > 0 ? (
            imgNames.map((image, index) => (
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

        <button
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
