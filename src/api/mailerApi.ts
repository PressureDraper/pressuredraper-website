import axios from 'axios';

const mailerApi = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL_API_BACKEND}`,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default mailerApi;