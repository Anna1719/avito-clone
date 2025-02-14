import { useQuery } from "@tanstack/react-query";
import { AdvertisementResponse } from "@/utils/types";
import api from "@/hooks/axiosInstance";

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ["advertisements"],
    queryFn: async () => {
      const response = await api.get("/items");
      return response.data as AdvertisementResponse[];
    },
    staleTime: 30000,
    retry: false,
  });
};
