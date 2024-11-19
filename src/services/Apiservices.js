import axios from 'axios';

// Membuat instance Axios
const axiosInstance = axios.create({
  baseURL: 'https://restaurant-api.dicoding.dev/',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Mengambil daftar restoran (GET)
 * @returns {Promise} Response dari API
 */
const getList = async () => {
  try {
    const response = await axiosInstance.get('/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    throw error;
  }
};

/**
 * Mengambil detail restoran (GET)
 * @param {string} id - ID restoran
 * @returns {Promise} Response dari API
 */
const getDetailRestoran = async (id) => {
  try {
    const response = await axiosInstance.get(`/detail/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant detail:', error);
    throw error;
  }
};

/**
 * Mencari restoran berdasarkan kata kunci (GET)
 * @param {string} query - Kata kunci pencarian
 * @returns {Promise} Response dari API
 */
const searchRestaurant = async (query) => {
  try {
    const response = await axiosInstance.get(`/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching restaurant:', error);
    throw error;
  }
};

/**
 * Menambahkan ulasan restoran (POST)
 * @param {string} id - ID restoran
 * @param {string} name - Nama pengguna
 * @param {string} review - Ulasan pengguna
 * @returns {Promise} Response dari API
 */
const addReviewApi = async (id, name, review) => {
  const payload = {
    id,
    name,
    review,
  };

  try {
    const response = await axiosInstance.post('/review', payload);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

export {
  getList,
  getDetailRestoran,
  searchRestaurant,
  addReviewApi,
};
