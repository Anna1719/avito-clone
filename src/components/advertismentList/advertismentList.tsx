import React from "react";
import { Box } from "@mui/material";
import { AdvertisementMiniCard } from "@/components/advertismentMiniCard";
import { AdvertisementResponse } from "@/utils/types";

interface AdvertisementListProps {
  advertisements: AdvertisementResponse[];
}

export const AdvertisementList: React.FC<AdvertisementListProps> = ({
  advertisements,
}) => {
  return (
    <Box>
      {advertisements.map((ad) => (
        <Box key={ad.id} mb={3}>
          <AdvertisementMiniCard advertisement={ad} />
        </Box>
      ))}
    </Box>
  );
};
