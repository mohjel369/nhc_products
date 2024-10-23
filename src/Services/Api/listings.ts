import apiClient from './Client';

interface Review {
  rating: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: string;
  stock: number;
  reviews: Review[];
  brand: string;
  discountPercentage: number;
  images: string[];
  category: string;
}

export interface GetListingsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const endPoint = '/products';

/**
 * Fetches product listings from the API.
 *
 * @param {AbortSignal} signal - The abort signal to cancel the fetch request.
 * @param {string} [param] - Optional search parameter.
 * @returns {Promise<GetListingsResponse>} The API response.
 * @throws Will throw an error if the fetch request fails.
 */

export const getListings = async (
  signal: AbortSignal,
  param?: string,
): Promise<GetListingsResponse> => {
  try {
    const response = await apiClient.get<GetListingsResponse>(
      param ? `${endPoint}${'/search?q='}${param}` : endPoint,
      {method: 'GET', signal},
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
