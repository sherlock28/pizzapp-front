export const API_URL = process.env.REACT_APP_API_URL;

export const API_RESOURCES = {
    products: `${API_URL}/products`,
    orders: `${API_URL}/orders`,
    auth: {
        signin: `${API_URL}/auth/signin`,
        signup: `${API_URL}/auth/signup`,
        signout: `${API_URL}/auth/signout`,
    },
}