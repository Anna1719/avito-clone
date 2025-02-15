import { useQuery } from "@tanstack/react-query";
import { AdvertisementResponse } from "@/utils/types";
import api from "@/hooks/axiosInstance";
import axios from "axios";

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ["advertisements"],
    queryFn: async ({ signal }) => {
      const source = axios.CancelToken.source();
      signal?.addEventListener("abort", () => source.cancel("Query was cancelled"));

      const response = await api.get("/items", {
        cancelToken: source.token,
      });
      return response.data as AdvertisementResponse[];
    },
    staleTime: 30000,
    retry: false,
  });
};
