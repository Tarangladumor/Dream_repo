import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../../../assets/Reset_password_image.png";
import IMG2 from "../../../../assets/Reward_image.png";
import IMG3 from "../../../../assets/bulb_image.png";

const ProductPreview = () => {
  const images = [IMG1, IMG2, IMG3];
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
                  Samsung galaxy s30
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Model number
                </p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  Model number
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Product images
                </p>
                <div className="flex gap-x-2">
                  {images.map((image, index) => (
                    <img
                      src={image}
                      key={index}
                      height={50}
                      width={50}
                      className="border-2 border-black"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">Category</p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  Smartphone
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">Brand</p>
                <p className=" font-roboto font-medium text-[16px] opacity-60">
                  Samsung
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className=" font-roboto font-medium text-[22px]">
                  Invoice image
                </p>
                <img
                  src={IMG1}
                  height={50}
                  width={50}
                  className="border-2 border-black"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 lg:max-w-[90%] lg:mx-auto mt-10">
              <p className=" font-roboto font-medium text-[22px]">
                Product description
              </p>
              <p className=" font-roboto font-medium text-[16px] opacity-60">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium{" "}
              </p>

              <hr className=" border-t-2 border-black mt-10" />

              <div>
                <form>
                  <div className="flex gap-x-3 items-center">
                    <input type="checkbox" />
                    <label>
                      (Terms and conditions statement) Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium Sed ut
                      perspiciatis{" "}
                    </label>
                  </div>

                  <div className=" flex gap-5 mt-10 mb-10 group">
                    <button className=" bg-[#F19A3E] font-roboto font-medium text-[20px] px-8 py-2 text-white rounded-2xl group-hover:scale-[0.80] hover:!scale-105 transition-all duration-200 group-hover:text-[#F19A3E] group-hover:bg-white group-hover:border-2 group-hover:border-[#F19A3E]">
                      Publish
                    </button>

                    <button className="font-roboto font-medium text-[20px] px-8 py-2 text-[#F19A3E] rounded-2xl border-2 border-[#F19A3E] group-hover:scale-[0.80] hover:!scale-105 transition-all duration-200 group-hover:bg-[#F19A3E] group-hover:text-white">
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
