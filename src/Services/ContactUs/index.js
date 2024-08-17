import axiosInstance from 'Configs/axios'

export const contactUsDataFn = async () => {
  const { data } = await axiosInstance.get('/banners')
  return data
}
