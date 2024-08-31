import axiosInstance from 'Configs/axios'

export const ConnexionHandler = async (data) => {
    const response  = await axiosInstance.post('/login', data);
    return response;
}

export const InscriptionHandler = async (data) => {
    const response = await axiosInstance.post('/signup', data)
    return response
}