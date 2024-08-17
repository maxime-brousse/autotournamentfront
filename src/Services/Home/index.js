import axiosInstance from 'Configs/axios'

export const homeDataFn = async () => {
  const { data } = await axiosInstance.get('/banners')
  return data
}
