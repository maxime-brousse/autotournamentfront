import axiosInstance from 'Configs/axios'

export const tournamentDataFn = async () => {
  const { data } = await axiosInstance.get('/tournament')
  return data
}

export const tournoiDataFn = async (token, id) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };
  const response = (await axiosInstance.get(`/tournament/${id}`, config,));
  return response
}

export const tournamentCreateFn = async (token, data) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };
  console.log(data);
  const response = (await axiosInstance.post('/tournament/create', data, config,));
  return response
}

export const tournamentModifyFn = async (token, id, data) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };
  console.log(data);
  const response = (await axiosInstance.put(`/tournament/modify/${id}`, data, config,));
  return response
}

export const tournamentDeleteFn = async (token, id) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };
  const response = (await axiosInstance.delete(`/tournament/${id}`, config,));
  return response
}

export const tournamentInscription = async (token, id, mail) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };
  console.log('tournoi : ' + id + ' : ' + mail);
  const response = (await axiosInstance.post(`/inscription/${id}`, {'mail' : mail}, config,));
  return response
}