import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const searchAds = async (searchQuery) => {
  try {
    const response = await api.get('/ads', { params: { search: searchQuery } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
