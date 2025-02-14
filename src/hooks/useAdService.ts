import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import api from "@/hooks/axiosInstance";
import { Advertisement } from "@/utils/types";

export const useFetchAdvertisementById = (id: string, enabled: boolean) => {
  return useQuery<Advertisement>({
    queryKey: ["advertisement", id],
    queryFn: async () => {
      const response = await api.get(`/items/${id}`);
      return response.data;
    },
    enabled,
  });
};

export const useCreateAdvertisement = (): UseMutationResult<
  Advertisement,
  Error,
  Advertisement
> => {
  return useMutation<Advertisement, Error, Advertisement>({
    mutationFn: (data: Advertisement) =>
      api.post("/items", data).then((res) => res.data),
  });
};

export const useUpdateAdvertisement = (
  id: string
): UseMutationResult<Advertisement, Error, Advertisement> => {
  return useMutation<Advertisement, Error, Advertisement>({
    mutationFn: (data: Advertisement) =>
      api.put(`/items/${id}`, data).then((res) => res.data),
  });
};
