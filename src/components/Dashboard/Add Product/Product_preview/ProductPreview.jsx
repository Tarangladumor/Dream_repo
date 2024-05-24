import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Services/Operation/productAPI";

const ProductPreview = () => {

  const { page1Data, page2Data } = useSelector((state) => state.product)
  const {token} = useSelector((state) => state.auth);

  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  console.log("page1Data .......", page1Data);
  console.log("page2Data...........", page2Data);
  const images = [page2Data.productImage];
  const invoiceImage = [page2Data.invoiceImage];
  console.log(invoiceImage)
  console.log(images);

  const combinedData = {
    ...page1Data,
    ...page2Data,
  };

  console.log("DATA........", combinedData);


  const handleSubmit = async (e) => {

    e.preventDefault();

    const {
      productName, category, modelName, brandName, productDescription
    } = page1Data;

    const {
      productImage,invoiceImage,
    } = page2Data;


    dispatch(addProduct(productName,category,modelName,brandName,productDescription,productImage,invoiceImage,navigate,token));


  }


  return (
    <div>
      <div className="bg-[#fff] rounded-xl">
        <div className="max-w-[90%] mx-auto">
          <div className="flex justify-between pt-6 items-center">
            <h2 className=" font-roboto font-semibold text-4xl text-[#174B3A]">
              Preview
            </h2>
            <Link className="underline text-[#A27647] text-[16px] font-roboto">
              Edit preview
            </Link>
          </div>
          <hr className=" border-t-2 border-black mt-1" />

          <div className="flex justify-between lg:max-w-[90%] lg:mx-auto mt-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Product name
                </p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  {page1Data.productName}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Model number
                </p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  {page1Data.modelName}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Product images
                </p>
                <div className="flex gap-x-2">
                  {images[0].map((image, index) => (
                    <>
                      <img
                        src={URL.createObjectURL(image)}
                        key={index}
                        height={50}
                        width={50}
                        className="border-2 border-black hover:scale-[10]"
                      /></>
                  ))}

                  {/* <div>
                    {
                      previewLinks.map((link, index) => (
                        <img key={index} src={link} alt={`preview - ${index}`} />
                      ))
                    }
                  </div> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">Category</p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  {page1Data.category.categoryName}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">Brand</p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  {page1Data.brandName}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Invoice image
                </p>
                {invoiceImage[0].map((image, index) => (
                  <>
                    <img
                      src={URL.createObjectURL(image)}
                      key={index}
                      height={50}
                      width={50}
                      className="border-2 border-black"
                    /></>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 lg:max-w-[90%] lg:mx-auto mt-10">
              <p className=" font-roboto font-medium text-[22px]">
                Product description
              </p>
              <p className=" font-roboto font-medium text-[16px] opacity-60">
                {page1Data.productDescription}
              </p>

              <hr className=" border-t-2 border-black mt-10" />

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-x-3 items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label>
                      (Terms and conditions statement) Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium Sed ut
                      perspiciatis{" "}
                    </label>
                  </div>

                  <div className=" flex gap-5 mt-10 mb-10 group">
                    <button type="submit" className={`bg-[#F19A3E] font-roboto font-medium text-[20px] px-8 py-2 text-white rounded-2xl group-hover:scale-[0.80] hover:!scale-105 transition-all duration-200 group-hover:text-[#F19A3E] group-hover:bg-white group-hover:border-2 group-hover:border-[#F19A3E] ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!isChecked}>
                      Publish
                    </button>

                    <button className={`font-roboto font-medium text-[20px] px-8 py-2 text-[#F19A3E] rounded-2xl border-2 border-[#F19A3E] group-hover:scale-[0.80] hover:!scale-105 transition-all duration-200 group-hover:bg-[#F19A3E] group-hover:text-white ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={!isChecked}>
                      Save draft
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
