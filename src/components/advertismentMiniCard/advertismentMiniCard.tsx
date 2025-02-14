import { AdvertisementResponse } from "@/utils/types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

interface AdvertisementCardProps {
  advertisement: AdvertisementResponse;
}

export const AdvertisementMiniCard = ({
  advertisement,
}: AdvertisementCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={advertisement.image || "/placeholder.jpg"}
        alt={advertisement.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {advertisement.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Локация: {advertisement.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Категория: {advertisement.type}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to={`/item/${advertisement.id}`}
          >
            Открыть
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
