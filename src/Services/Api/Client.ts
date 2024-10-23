import axios, {AxiosInstance} from 'axios';

// Define the API
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {Accept: 'application/json'},
});

export default apiClient;
