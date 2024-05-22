const BASE_URL = "http://localhost:4000/api/v1"

export const authendpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/resetpasswordtoken",
    RESETPASSWORD_API: BASE_URL + "/auth/resetpassword"
}

export const contactus = {
    CONTACTUS_API: BASE_URL + "/auth/contactus"
}

export const settings = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/auth/updatedisplayimage",
    UPDATE_PROFILE_API: BASE_URL + "/auth/updateprofile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/auth/deleteaccount",
    UPDATE_VENDOR_DETAILS_API: BASE_URL + "/vendor/updatevendordetials"
}