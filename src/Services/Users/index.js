import axiosInstance from 'Configs/axios'

export const usersDataFn = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const { data } = (await axiosInstance.get('/users', config));
    return data
}

export const usersCreateFn = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    console.log(data);
    const response = (await axiosInstance.post('/users/create', data, config,));
    return response
}