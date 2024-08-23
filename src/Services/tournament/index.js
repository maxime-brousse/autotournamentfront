import axiosInstance from 'Configs/axios'

export const tournamentDataFn = async () => {
  const { data } = await axiosInstance.get('/tournament')
  return data
}