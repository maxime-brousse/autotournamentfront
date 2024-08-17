import axiosInstance from 'Configs/axios'

export const aboutUsDataFn = async () => {
  const { data } = await axiosInstance.get('/banners')
  return data
}
