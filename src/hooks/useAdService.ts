import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import api from "@/hooks/axiosInstance";
import { Advertisement } from "@/utils/types";
import axios from "axios";

export const useFetchAdvertisementById = (id: string, enabled: boolean) => {
  return useQuery<Advertisement>({
    queryKey: ["advertisement", id],
    queryFn: async ({ signal }) => {
      const source = axios.CancelToken.source();
      signal?.addEventListener("abort", () => source.cancel("Query was cancelled"));

      const response = await api.get(`/items/${id}`, {
        cancelToken: source.token,
      });
      return response.data;
    },
    enabled,
    retry: false,
  });
};

export const useCreateAdvertisement = (): UseMutationResult<
  Advertisement,
  Error,
  Advertisement
> => {
  return useMutation<Advertisement, Error, Advertisement>({
    mutationFn: async (data: Advertisement) => {
      const source = axios.CancelToken.source();
      const response = await api.post("/items", data, {
        cancelToken: source.token,
      });
      return response.data;
    },
  });
};

export const useUpdateAdvertisement = (
  id: string
): UseMutationResult<Advertisement, Error, Advertisement> => {
  return useMutation<Advertisement, Error, Advertisement>({
    mutationFn: async (data: Advertisement) => {
      const source = axios.CancelToken.source();
      const response = await api.put(`/items/${id}`, data, {
        cancelToken: source.token,
      });
      return response.data;
    },
  });
};
