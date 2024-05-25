// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { MdNavigateNext } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { setStep,setPage1Data } from "../../../../Slices/productSlice";
// import { addProduct, getAllBrand, getAllCategory } from "../../../../Services/Operation/productAPI";
// import toast from "react-hot-toast";

// // Install react-icons , react-hook-form, reduxtoolkit, react-redux

// const ProductInfo = () => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const dispatch = useDispatch();
//   const {token} = useSelector((state) => state.auth)
//   console.log("token",token);
//   const [loading,setLoading] = useState(false)
//   const [productCategories,setProductCategories] = useState([])
//   const [productBrands,setProductBrands] = useState([])

//   // const [formData,setFormData] = useState({
//   //   productName: "",
//   //   category: "",
//   //   modelName: "",
//   //   brandName: "",
//   //   productDescription: ""
//   // })

//   // const {productName,category,modelName,brandName,productDescription} = formData

//   // const handleOnChange = (e) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [e.target.name]: e.target.value,
//   //   }))
//   // }

//   useEffect(() => {
//     const getCategories = async() => {
//       setLoading(true);
//       const categories = await getAllCategory(token);
//       console.log(categories)
//       if(categories.length>0) {
//         setProductCategories(categories)
//       }
//       setLoading(false)
//     }
//     const getBrands = async() => {
//       setLoading(true);
//       const brands = await getAllBrand(token);
//       console.log(brands)
//       if(brands.length>0) {
//         setProductBrands(brands)
//       }
//       setLoading(false)
//     }
//     getCategories();
//     getBrands()
//   },[])


//   // const handleOnSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(formData)
//   //   dispatch(setPage1Data(formData));
//   //   dispatch(setStep(2));
//   // }

//   const onSubmit = async(data) => {
//     // console.log(data);
//     const formData = new FormData();
//     formData.append("productName",data.productName);
//     formData.append("category",data.category);
//     formData.append("modelName",data.modelName);
//     formData.append("brandName",data.brandName);
//     formData.append("productDescription",data.productDescription);

//     console.log(formData.data);
//     dispatch(setPage1Data(formData));
//     dispatch(setStep(2));
//   }


 
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
//         {/* Product Name */}
//         <div className="flex flex-col space-y-1">
//           <label
//             htmlFor="productName"
//             className="text-[1rem] font-medium  text-product-item font-roboto "
//           >
//             Product Name<sup className="text-[#EF476F]">*</sup>
//           </label>

//           <input
//             required
//             type="text"
//             id="productName"
//             name="productName"
//             placeholder="Enter Product name"
//             // onChange={handleOnChange}
//             // value={productName}
//             {...register("productName", { required: true })} 
//             className="bg-[#499F682B] rounded-md text-[16px] leading-[24px] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
//           />

//           {errors.productName && (
//             <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
//               Product Name is required
//             </span>
//           )}
//         </div>

//         {/* Category */}
//         <div className="flex flex-col space-y-2">
//           <label
//             htmlFor="category"
//             className="mt-3 font-medium  text-[1rem] text-product-item font-roboto"
//           >
//             Category<sup className="text-[#EF476F]">*</sup>
//           </label>

//           <select
//           required
//             id="category"
//             name="category"
//             className=" bg-[#499F682B]
//             shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3
//              font-roboto text-[16px] rounded-md font-semibold "
//             // value={category}
//             // onChange={handleOnChange}
//             {...register("category",{ required: true })}
//           >
          
//           <option value="" disabled>Choose a Category</option>
//             {!loading && productCategories?.map((category,index) => (
//               <option key={index} value={category?._id}>{category.categoryName}</option>
//             ))}
//           </select>

//           {errors.category && (
//             <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
//               Category is required
//             </span>
//           )}
//         </div>

//         {/* Model Name and Brand Name */}
//         <div className="flex gap-5">
//           <div className="flex flex-col space-y-1">
//             <label
//               htmlFor="modelName"
//               className="mt-3 text-[1rem] font-medium font-roboto "
//             >
//               Model Number<sup className="text-[#EF476F]">*</sup>
//             </label>

//             <input
//               type="text"
//               name="modelName"
//               // value={modelName}
//               // onChange={handleOnChange}
//               id="modelName"
//               placeholder="Enter model name"
//               {...register("modelName",{required:true})}
//               className="bg-[#499F682B] text-[16px] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
//             />

//             {errors.modelName && (
//               <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
//                 Model Number is required
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col space-y-1">
//             <label
//               htmlFor="brandName"
//               className="mt-3 font-medium  text-[1rem] font-roboto"
//             >
//               Brand<sup className="text-[#EF476F]">*</sup>
//             </label>

//             <select
//               id="brandName"
//               name="brandName"
//               // value={brandName}
//               // onChange={handleOnChange}
//               {...register("brandName",{required:true})}
//               className="bg-[#499F682B]
//               p-3 font-roboto text-[0.8rem] rounded-md
//               shadow-[0_3px_0_0] shadow-[#499F682B]/50
//               font-semibold"
//             >
//               <option value="" disabled>Choose a Brand</option>
//             {!loading && productBrands?.map((brandName,index) => (
//               <option key={index} value={brandName?._id}>{brandName.name}</option>
//             ))}
//             </select>

//             {errors.brandName && (
//               <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
//                 Brand is required
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Product description */}
//         <div className="flex flex-col gap-y-2">
//           <label
//             htmlfor="productDescription"
//             className="font-medium text-product-item font-roboto text-[1rem]"
//           >
//             Product description<sup className="text-[#EF476F]">*</sup>
//           </label>

//           <textarea
//             id="productDescription"
//             name="productDescription"
//             // value={productDescription}
//             // onChange={handleOnChange}
//             {...register("productDescription",{required:true})}
//             className="w-full border-transparent rounded-lg text-sm  disabled:opacity-50 shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 disabled:pointer-events-none dark:border-transparent bg-[#499F682B]  resize-x-none min-h-[130px] font-roboto text-[16px] font-semibold"
//             placeholder="Write a short description of your product"
//           ></textarea>

//           {errors.productDescription && (
//             <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
//               product Description is required
//             </span>
//           )}
//         </div>

//         <div className="flex gap-x-2">
        
//           <button type="submit" disabled={loading}
//             className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]`}
//           >
//             Save & Next
//             <MdNavigateNext />
//           </button>
        
//         </div>
//       </form>
//     </>
//   );
// };

// export default ProductInfo;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep, setPage1Data, setPage2Data, addProduct } from "../../../../Slices/productSlice";
import { getAllBrand, getAllCategory } from "../../../../Services/Operation/productAPI";
import Upload from "../Upload";

const MultiStepForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { page1Data, page2Data } = useSelector((state) => state.product);

  const [loading, setLoading] = useState(false);
  const [productCategories, setProductCategories] = useState([]);
  const [productBrands, setProductBrands] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await getAllCategory(token);
      if (categories.length > 0) {
        setProductCategories(categories);
      }
      setLoading(false);
    };

    const getBrands = async () => {
      setLoading(true);
      const brands = await getAllBrand(token);
      if (brands.length > 0) {
        setProductBrands(brands);
      }
      setLoading(false);
    };

    getCategories();
    getBrands();
  }, [token]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmitPage1 = (data) => {
    dispatch(setPage1Data(data));
    dispatch(setStep(2));
  };

  const handleSubmitPage2 = (data) => {
    dispatch(setPage2Data(data));
    dispatch(setStep(3));
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(page1Data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    Object.entries(page2Data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    dispatch(addProduct(formData, navigate, token));
  };

  const renderPage1 = () => (
    <form onSubmit={handleSubmit(handleSubmitPage1)} className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
      {/* Product Name */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="productName" className="text-[1rem] font-medium text-product-item font-roboto ">
          Product Name<sup className="text-[#EF476F]">*</sup>
        </label>
        <input
          required
          type="text"
          id="productName"
          name="productName"
          placeholder="Enter Product name"
          {...register("productName", { required: true })}
          className="bg-[#499F682B] rounded-md text-[16px] leading-[24px] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
        />
        {errors.productName && (
          <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
            Product Name is required
          </span>
        )}
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="mt-3 font-medium text-[1rem] text-product-item font-roboto">
          Category<sup className="text-[#EF476F]">*</sup>
        </label>
        <select
          required
          id="category"
          name="category"
          className="bg-[#499F682B] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-roboto text-[16px] rounded-md font-semibold"
          {...register("category", { required: true })}
        >
          <option value="" disabled>Choose a Category</option>
          {!loading && productCategories.map((category, index) => (
            <option key={index} value={category?._id}>{category.categoryName}</option>
          ))}
        </select>
        {errors.category && (
          <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
            Category is required
          </span>
        )}
      </div>

      {/* Model Name and Brand Name */}
      <div className="flex gap-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="modelName" className="mt-3 text-[1rem] font-medium font-roboto">
            Model Number<sup className="text-[#EF476F]">*</sup>
          </label>
          <input
            type="text"
            name="modelName"
            id="modelName"
            placeholder="Enter model name"
            {...register("modelName", { required: true })}
            className="bg-[#499F682B] text-[16px] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
          />
          {errors.modelName && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Model Number is required
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="brandName" className="mt-3 font-medium text-[1rem] font-roboto">
            Brand<sup className="text-[#EF476F]">*</sup>
          </label>
          <select
            id="brandName"
            name="brandName"
            {...register("brandName", { required: true })}
            className="bg-[#499F682B] p-3 font-roboto text-[0.8rem] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 font-semibold"
          >
            <option value="" disabled>Choose a Brand</option>
            {!loading && productBrands.map((brandName, index) => (
              <option key={index} value={brandName?._id}>{brandName.name}</option>
            ))}
          </select>
          {errors.brandName && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Brand is required
            </span>
          )}
        </div>
      </div>

      {/* Product description */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="productDescription" className="font-medium text-product-item font-roboto text-[1rem]">
          Product description<sup className="text-[#EF476F]">*</sup>
        </label>
        <textarea
          id="productDescription"
          name="productDescription"
          {...register("productDescription", { required: true })}
          className="w-full border-transparent rounded-lg text-sm disabled:opacity-50 shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 disabled:pointer-events-none dark:border-transparent bg-[#499F682B] resize-x-none min-h-[130px] font-roboto text-[16px] font-semibold"
          placeholder="Enter Product Description here"
        />
        {errors.productDescription && (
          <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
            Product description is required
          </span>
        )}
      </div>

      <div className="flex items-end justify-end gap-x-3">
        <button type="submit" className="mt-4 cursor-pointer flex items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]">
          Save & Next
          <MdNavigateNext />
        </button>
      </div>
    </form>
  );

  const renderPage2 = () => (
    <form onSubmit={handleSubmit(handleSubmitPage2)} className="bg-white py-10 rounded-3xl">
      <div className="max-w-[90%] mx-auto">
        <div className="mt-5">
          <Upload
            name='productImage'
            label='Product Image'
            register={register}
            setValue={setValue}
            errors={errors}
            editData={page2Data?.productImage}
          />
        </div>

        <div className="mt-5">
          <Upload
            name='productVideo'
            label='Product Video'
            register={register}
            setValue={setValue}
            errors={errors}
            editData={page2Data?.productVideo}
          />
        </div>

        <div className="mt-5">
          <Upload
            name='invoiceImage'
            label='Invoice Image'
            register={register}
            setValue={setValue}
            errors={errors}
            editData={page2Data?.invoiceImage}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="publishProduct" className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="publishProduct"
              className="sr-only peer"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish this product</span>
          </label>
        </div>

        <div className="mt-5 flex gap-x-3">
          <button type="submit" className="flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]">
            Save & Next
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </form>
  );

  const renderPage3 = () => (
    <form onSubmit={handleSubmitFinal} className="bg-white py-10 rounded-3xl">
      <div className="max-w-[90%] mx-auto">
        <div className="mt-5">
          <h2 className="text-2xl font-bold">Review and Submit</h2>
          <div className="mt-3">
            <p><strong>Product Name:</strong> {page1Data?.productName}</p>
            <p><strong>Category:</strong> {productCategories.find(cat => cat._id === page1Data?.category)?.categoryName}</p>
            <p><strong>Model Number:</strong> {page1Data?.modelName}</p>
            <p><strong>Brand:</strong> {productBrands.find(brand => brand._id === page1Data?.brandName)?.name}</p>
            <p><strong>Product Description:</strong> {page1Data?.productDescription}</p>
          </div>
        </div>

        <div className="mt-5 flex gap-x-3">
          <button type="submit" className="flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]">
            Submit Product
          </button>
        </div>
      </div>
    </form>
  );

  const step = useSelector((state) => state.product.step);
  
  return (
    <div className="container mx-auto py-10">
      {step === 1 && renderPage1()}
      {step === 2 && renderPage2()}
      {step === 3 && renderPage3()}
    </div>
  );
};

export default MultiStepForm;






