import axiosInstance from 'Configs/axios'

export async function tournamentDataFn() {
  const { data } = await axiosInstance.get('/tournament')
  return data
}