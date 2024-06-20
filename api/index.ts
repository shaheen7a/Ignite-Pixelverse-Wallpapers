import axios, { AxiosError } from "axios";
import { ImageResponse } from "@/types";

const apiUrl = `https://pixabay.com/api/?key=${process.env.EXPO_PUBLIC_PIXABAY_API_KEY}`;

const formatUrl = (params?: Record<string, string | number>) => {
  let url = apiUrl + '&per_page=25&safesearch=true&editors_choice=true';

  if (!params) return url;

  const paramKeys = Object.keys(params);
  paramKeys.forEach(key => {
    const value = key === 'q' ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  return url;
}

type SuccessResponse = { success: true; data: ImageResponse; };
type ErrorResponse = { success: false; msg: string; };

export const apiCall = async (params?: Record<string, string | number>): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;

    return { success: true, data };
  } catch(err: any) {
    console.log('got error: ', err.message);
    return { success: false, msg: err.message };
  }
}
