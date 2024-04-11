const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  media: `${API_BASE_URL}`,
  users: `${API_BASE_URL}/api/user`,
  product: `${API_BASE_URL}/api/product`,
  cart: `${API_BASE_URL}/api/cart`,
  wishlist: `${API_BASE_URL}/api/wishlist`,
  order: `${API_BASE_URL}/api/order`,

};