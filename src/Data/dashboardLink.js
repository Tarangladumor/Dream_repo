import { CgProfile } from 'react-icons/cg';
import { RiAwardFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { FaBookmark } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";

export const sidebarLinks = [
    {
        id:1,
        name : "My Profile",
        path : "/dashboard/my-profile",
        icon : <CgProfile/>
    },
    {
        id:2,
        name : "Redeem award",
        path : "/dashboard/redeem-award",
        icon : <RiAwardFill/>
    },
    {
        id:3,
        name : "Settings",
        path : "/dashboard/Settings",
        icon : <IoIosSettings/>
    },
    {
        id:4,
        name : "Logout",
        icon : <RiLogoutCircleRLine/>
    }
]

export const individualLinks = [
    {
        id:1,
        name:"My Products",
        path:"/dashboard/my-products",
        icon : <FaBookmark />
    },
    {
        id:1,
        name:"Add product",
        path:"/dashboard/add-product",
        icon : <FaPlus />
    },
    {
        id:1,
        name:"Interested products",
        path:"/dashboard/interested-products",
        icon : <FaHeartCirclePlus />
    }
]