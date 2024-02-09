import fetchAxios from '@/services/config/fetchAxios'

export const postOrder = async (orderData: object) => {
  const { data } = await fetchAxios.post('/v1/orders/create', orderData);
  return data;
}