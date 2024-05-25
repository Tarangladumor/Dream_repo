import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector"
import { product } from "../apis";
import { setLoading } from "../../Slices/authSlice"
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1"

const { ADD_PRODUCT_API, UPDATE_PRODUCT_API, DELETE_PRODUCT_API, GET_ALL_BRAND_API, GET_ALL_CATEGORY_API } = product



export const getAllCategory = async (token) => {
    let result = []
    console.log(token)
    try {
        // const response = await apiConnector("GET",GET_ALL_CATEGORY_API,{
        //     Authorization: `Bearer ${token}`
        // })
        const res = await axios({
            method: 'get',
            url: BASE_URL + '/individual/getallcategory',
            headers: { authorization: `Bearer ${token}` },
        });
        console.log("GET_ALL_CATEGORY_API API RESPONSE............", res)
        if (!res?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        result = res?.data?.data
    } catch (error) {
        console.log("GET_ALL_CATEGORY_API API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const getAllBrand = async (token) => {
    let result = []
    try {
        // const response = await apiConnector("GET",GET_ALL_BRAND_API,{
        //     Authorization: `Bearer ${token}`
        // })

        const res = await axios({
            method: 'get',
            url: BASE_URL + '/individual/getallbrand',
            headers: { authorization: `Bearer ${token}` },
        });
        console.log("GET_ALL_BRAND_API API RESPONSE............", res)
        if (!res?.data?.success) {
            throw new Error("Could Not Fetch Brands")
        }
        result = res?.data?.data
    } catch (error) {
        console.log("GET_ALL_BRAND_API API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

// export function addProduct(data,token) {
//     let result = null;
//     console.log(token);
//     const toastId = toast.loading("Loading...")
//     return async () => {
//         console.log(data);
//         try {
//             // console.log("START",invoiceImage);
//             const response = await apiConnector("POST", ADD_PRODUCT_API, {
//                data
//             }, 
//                 {"Contect-Type":"multipart/form-data",
//                 Authorization: `Bearer ${token}`}
//             )

//             console.log("ADD PRODUCT API RESPONSE............", response)

//             if (!response.data.success) {
//                 throw new Error(response.data.message)
//             }

//             toast.success("Product Add Successfully")
//             result = response?.data?.data;
//         } catch (error) {
//             console.log("PRODUCT ADD ERROR............", error)
//             toast.error("Product is not added")
//         }
//         toast.dismiss(toastId)
//         return result;
//     }
// }

export const addProduct = async (data, token) => {
    let result = null;
    const toastId = toast.loading("Loading...")
    console.log("tOKEN.....", token)
    try {
        const response = await apiConnector("POST", ADD_PRODUCT_API, {
            data
        },
            {
                "Contect-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        )
        console.log("ADD_PRODUCT_API RESPONSE.....", response)

        if (!response?.data?.success) {
            throw new Error("Could not Add Course Details")
        }
        toast.success("Product added successfully")
        result = response?.data?.data

    } catch (error) {
        console.log("ADD_PRODUCT_API ERROR.....", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result
}

