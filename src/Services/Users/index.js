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

export const userDataFn = async (token, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    console.log(id);
    const response = (await axiosInstance.get(`/user/${id}`, config,));
    return response
}

export const profilDataFn = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = (await axiosInstance.get("/profil", config));
    return response
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

export const usersModifyFn = async (token, id, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = (await axiosInstance.put(`/user/modify/${id}`, data, config,));
    return response
}

export const profilModifyFn = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = (await axiosInstance.put('/profil/modify', data, config));
    return response
}

export const usersDeleteFn = async (token, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = (await axiosInstance.delete(`/user/${id}`, config,));
    return response
}