
import axiosInstance from 'Configs/axios'

export const homeScoresFn = async () => {
  const { data } = await axiosInstance.get('/topScores')
  return data
}