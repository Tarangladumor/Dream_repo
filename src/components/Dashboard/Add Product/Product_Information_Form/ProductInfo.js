<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllBrand, getAllCategory } from "../../../../Services/Operation/productAPI";
import Upload from "../Upload";
import { setProduct } from "../../../../Slices/productSlice";
import toast from "react-hot-toast";


const ProductInfo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {product , editProduct} = useSelector((state) => state.product);
  console.log("token",token);
  const [loading,setLoading] = useState(false)
  const [productCategories,setProductCategories] = useState([])
  const [productBrands,setProductBrands] = useState([])

=======
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {editProductDetails, addProduct, getAllBrand, getAllCategory } from '../../../../Services/Operation/productAPI'
import { setProduct } from '../../../../Slices/productSlice'
import toast from 'react-hot-toast'
import { MdNavigateNext } from "react-icons/md";
import Upload from "../Upload"
import { useNavigate } from 'react-router-dom'

const ProductInfo = () => {
  const {
    register,handleSubmit,setValue,getValues,formState: {errors},
  } = useForm()

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {product,editProduct} = useSelector((state) => state.product);
  const [loading,setLoading] = useState(false);
  const[productCategories,setProductCategories] = useState([])
  const[productBrands,setProductsBrands] = useState([])
  const navigate = useNavigate()
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642

  useEffect(() => {
    const getCategories = async() => {
      setLoading(true);
<<<<<<< HEAD
      const categories = await getAllCategory(token);
      console.log(categories)
      if(categories.length>0) {
        setProductCategories(categories)
      }
      setLoading(false)
    }
    const getBrands = async() => {
      setLoading(true);
      const brands = await getAllBrand(token);
      console.log(brands)
      if(brands.length>0) {
        setProductBrands(brands)
      }
      setLoading(false)
    }

    if(editProduct){
      setValue("productName",product.productName);
      setValue("productDescription",product.productDescription);
      setValue("category",product.category);
      setValue("brandName",product.brandName);
      setValue("modelName",product.modelName);
      setValue("productImage1",product.productImage);
      setValue("invoiceImage2",product.invoiceImage);
    }
    getCategories();
    getBrands()
  },[])


  const isFormUpdated = () => {
    const currentValues = getValues();
    if(currentValues.productName !== product.productName || 
      currentValues.productDescription !== product.productDescription ||
      currentValues.category._id !== product.category._id || 
      currentValues.brandName._id !== product.brandName._id ||
      currentValues.modelName !== product.modelName || 
      currentValues.productImage1 !== product.productImage1 ||
      currentValues.invoiceImage2 !== product.invoiceImage2
    ) return true;
    else {
      return false
    }
  }

  const onSubmit = async(data) => {
    if(editProduct) {
      if(isFormUpdated()){
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("productId",product._id);
        if(currentValues.productName !== product.productName){
          formData.append("productName",data.productName);
        }

        if(currentValues.productDescription !== product.productDescription){
          formData.append("productDescription",data.productDescription);
        }

        if(currentValues.modelName !== product.modelName){
          formData.append("modelName",data.modelName);
        }

        if(currentValues.category.id !== product.category.id){
          formData.append("category", data.category);
        }

        if(currentValues.productImage1 !== product.productImage) {
          formData.append("productImage", data.productImage1)
        }

        if(currentValues.invoiceImage2 !== product.invoiceImage) {
          formData.append("invoiceImage", data.invoiceImage2);
        }

        setLoading(true);

        const result = await 
        setLoading(false);
        if(result) {
          dispatch(setProduct(result))
        }
      } else {
        toast.error("No Chages made to the form");
      }
      return;
  }

  console.log("DATA.........................",data);

  const formData = new FormData();
  formData.append("productName",data.productName);
  formData.append("category",data.category);
  formData.append("brandName",data.brandName);
  formData.append("modelName",data.modelName);
  formData.append("productDescription",data.productDescription);
  formData.append("productImageUpload",data.productImage1);
  formData.append("invoiceIinvoiceImageUploadmage",data.invoiceImage2);

  console.log(formData);

  setLoading(true);
  const result = await addProduct(formData,token);
  if(result){
    dispatch(setProduct(result));
  }
  setLoading(false);
}

 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
        {/* Product Name */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="productName"
=======
      const categories = await getAllCategory(token)
      console.log(categories);
      if(categories.length>0) {
        setProductCategories(categories);
      }
      setLoading(false);
    };
    const getBrands = async () => {
      setLoading(true);
      const brands = await getAllBrand(token)
      console.log(brands) 
      if(brands.length > 0) {
        setProductsBrands(brands);
      }
      setLoading(false);
    }
    if(editProduct) {
      setValue("productTitle",product.productName);
      setValue("productCategory",product.category);
      setValue("productModelName",product.modelName);
      setValue("productBrands",product.brandName);
      setValue("productDesc",product.productDescription);
      setValue("wasteImage",product.productImage);
      setValue("billImage",product.invoiceImage);
    }
    getCategories();
    getBrands();
  },[])

  const isFormUpdated = () => {
    const currentValues = getValues();
    if(
      currentValues.productTitle !== product.productName || currentValues.productCategory !== product.category ||
      currentValues.productModelName !== product.modelName ||
      currentValues.productBrands !== product.brandName || 
      currentValues.productDesc !== product.productDescription || currentValues.wasteImage !== product.productImage || currentValues.billImage !== product.invoiceImage
    ) {
      return true;
    }
    return false;
  }

  const onSubmit = async (data) => {
    if(editProduct) {
      if(isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();
        formData.append("productId",product._id);
        if(currentValues.productTitle !== product.productName) {
          formData.append("productName",data.productTitle)
        }
        if(currentValues.productCategory !== product.category) {
          formData.append("category",data.productCategory)
        }
        if(currentValues.productModelName !== product.modelName) {
          formData.append("modelName",data.productModelName)
        }
        if(currentValues.productBrands !== product.brandName) {
          formData.append("brandName",data.productBrands)
        }
        if(currentValues.productDesc !== product.productDescription) {
          formData.append("productDescription",data.productDesc)
        }
        if(currentValues.wasteImage !== product.productImage) {
          formData.append("productImageUpload",data.wasteImage)
        }
        if(currentValues.billImage !== product.invoiceImage) {
          formData.append("invoiceImageUpload",data.billImage)
        }
        setLoading(true);
        const result = await editProductDetails(formData,token);
        console.log(result);
        setLoading(false);
        if(result) {
          dispatch(setProduct(result))
        }
      } else {
        toast.error("No changes made to the form");
      }
      return;
    }
    const formData = new FormData();
    formData.append("productName",data.productTitle);
    formData.append("category",data.productCategory);
    formData.append("modelName",data.productModelName);
    formData.append("brandName",data.productBrands);
    formData.append("productDescription",data.productDesc);
    formData.append("productImageUpload",data.wasteImage);
    formData.append("invoiceImageUpload",data.billImage);

    console.log("Form Data : ", formData);
    setLoading(true);
    const result = await addProduct(formData,token,navigate);
    if(result) {
      dispatch(setProduct(result));
    }
    setLoading(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-md border-[2px] border-[#499F682B] p-6">
      <div className="flex flex-col space-y-1">
          <label
            htmlFor="productTitle"
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            className="text-[1rem] font-medium  text-product-item font-roboto "
          >
            Product Name<sup className="text-[#EF476F]">*</sup>
          </label>

          <input
            required
            type="text"
<<<<<<< HEAD
            id="productName"
            name="productName"
            placeholder="Enter Product name"
            // onChange={handleOnChange}
            // value={productName}
            {...register("productName", { required: true })} 
            className="bg-[#499F682B] rounded-md text-[16px] leading-[24px] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
          />

          {errors.productName && (
=======
            id="productTitle"
            name="productTitle"
            placeholder="Enter Product name"
            // onChange={handleOnChange}
            // value={productName}
            {...register("productTitle", { required: true })} 
            className="bg-[#499F682B] rounded-md text-[16px] leading-[24px] shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
          />

          {errors.productTitle && (
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Product Name is required
            </span>
          )}
        </div>
<<<<<<< HEAD

        {/* Category */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="category"
=======
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="productCategory"
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            className="mt-3 font-medium  text-[1rem] text-product-item font-roboto"
          >
            Category<sup className="text-[#EF476F]">*</sup>
          </label>

          <select
          required
<<<<<<< HEAD
            id="category"
            name="category"
=======
            id="productCategory"
            name="productCategory"
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            className=" bg-[#499F682B]
            shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3
             font-roboto text-[16px] rounded-md font-semibold "
            // value={category}
            // onChange={handleOnChange}
<<<<<<< HEAD
            {...register("category",{ required: true })}
=======
            {...register("productCategory",{ required: true })}
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
          >
          
          <option value="" disabled>Choose a Category</option>
            {!loading && productCategories?.map((category,index) => (
              <option key={index} value={category?._id}>{category.categoryName}</option>
            ))}
          </select>

<<<<<<< HEAD
          {errors.category && (
=======
          {errors.productCategory && (
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              Category is required
            </span>
          )}
        </div>
<<<<<<< HEAD

        {/* Model Name and Brand Name */}
        <div className="flex gap-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="modelName"
              className="mt-3 text-[1rem] font-medium font-roboto "
            >
              Model Number<sup className="text-[#EF476F]">*</sup>
            </label>

            <input
              type="text"
              name="modelName"
              // value={modelName}
              // onChange={handleOnChange}
              id="modelName"
              placeholder="Enter model name"
              {...register("modelName",{required:true})}
              className="bg-[#499F682B] text-[16px] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
            />

            {errors.modelName && (
              <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
                Model Number is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="brandName"
              className="mt-3 font-medium  text-[1rem] font-roboto"
            >
              Brand<sup className="text-[#EF476F]">*</sup>
            </label>

            <select
              id="brandName"
              name="brandName"
              // value={brandName}
              // onChange={handleOnChange}
              {...register("brandName",{required:true})}
              className="bg-[#499F682B]
              p-3 font-roboto text-[0.8rem] rounded-md
              shadow-[0_3px_0_0] shadow-[#499F682B]/50
              font-semibold"
            >
              <option value="" disabled>Choose a Brand</option>
            {!loading && productBrands?.map((brandName,index) => (
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
          <label
            htmlfor="productDescription"
            className="font-medium text-product-item font-roboto text-[1rem]"
          >
            Product description<sup className="text-[#EF476F]">*</sup>
          </label>

          <textarea
            id="productDescription"
            name="productDescription"
            // value={productDescription}
            // onChange={handleOnChange}
            {...register("productDescription",{required:true})}
            className="w-full border-transparent rounded-lg text-sm  disabled:opacity-50 shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 disabled:pointer-events-none dark:border-transparent bg-[#499F682B]  resize-x-none min-h-[130px] font-roboto text-[16px] font-semibold"
            placeholder="Write a short description of your product"
          ></textarea>

          {errors.productDescription && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              product Description is required
            </span>
          )}
        </div>

        <div className=" mt-5">
          <Upload
            name='productImage1'
            label='product Image'
            register={register}
            setValue={setValue}
            errors={errors}
            editData={editProduct ? product?.productImage : null} />
        </div>


        <div className=" mt-10">
          <Upload
            name="invoiceImage2"
=======
        <div className="flex gap-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="productModelName"
              className="mt-3 text-[1rem] font-medium font-roboto "
            >
              Model Number<sup className="text-[#EF476F]">*</sup>
            </label>

            <input
              type="text"
              name="productModelName"
              // value={modelName}
              // onChange={handleOnChange}
              id="productModelName"
              placeholder="Enter model name"
              {...register("productModelName",{required:true})}
              className="bg-[#499F682B] text-[16px] rounded-md shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 font-semibold"
            />

            {errors.productModelName && (
              <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
                Model Number is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="productBrands"
              className="mt-3 font-medium  text-[1rem] font-roboto"
            >
              Brand<sup className="text-[#EF476F]">*</sup>
            </label>

            <select
              id="productBrands"
              name="productBrands"
              // value={brandName}
              // onChange={handleOnChange}
              {...register("productBrands",{required:true})}
              className="bg-[#499F682B]
              p-3 font-roboto text-[0.8rem] rounded-md
              shadow-[0_3px_0_0] shadow-[#499F682B]/50
              font-semibold"
            >
              <option value="" disabled>Choose a Brand</option>
            {!loading && productBrands?.map((brandName,index) => (
              <option key={index} value={brandName?._id}>{brandName.name}</option>
            ))}
            </select>

            {errors.productBrands && (
              <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
                Brand is required
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlfor="productDesc"
            className="font-medium text-product-item font-roboto text-[1rem]"
          >
            Product description<sup className="text-[#EF476F]">*</sup>
          </label>

          <textarea
            id="productDesc"
            name="productDesc"
            // value={productDescription}
            // onChange={handleOnChange}
            {...register("productDesc",{required:true})}
            className="w-full border-transparent rounded-lg text-sm  disabled:opacity-50 shadow-[0_3px_0_0] shadow-[#499F682B]/50 p-3 disabled:pointer-events-none dark:border-transparent bg-[#499F682B]  resize-x-none min-h-[130px] font-roboto text-[16px] font-semibold"
            placeholder="Write a short description of your product"
          ></textarea>

          {errors.productDesc && (
            <span className="ml-2 text-xs tracking-wide text-[#EF476F]">
              product Description is required
            </span>
          )}
        </div>
        <div className=" mt-5">
          <Upload
            name='wasteImage'
            label='product Image'
            register={register}
            setValue={setValue}
            errors={errors}
            editData={editProduct ? product?.productImage : null} />
        </div>


        <div className=" mt-10">
          <Upload
            name="billImage"
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
            label="Invoice Image"
            register={register}
            setValue={setValue}
            errors={errors}
            editData={editProduct ? product?.invoiceImage : null} />
        </div>
<<<<<<< HEAD

        <div className="flex gap-x-2">
        
          <button type="submit" disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]`}
          >
            Save & Next
            <MdNavigateNext />
          </button>
        
        </div>
      </form>
    </>
  );
};


export default ProductInfo
=======
        
        <div className="flex gap-x-2">
          <button type='submit' disabled={loading} className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#174B3A] py-[8px] px-[20px] font-semibold text-[white]`}>
          Save & Next
            <MdNavigateNext />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductInfo
>>>>>>> 98adbd349577228dd3d81b5912bbff5dd72c0642
