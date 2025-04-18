import axios from 'axios';

const baseURL = `${import.meta.env.VITE_API_URL_DJANGO}`;

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
