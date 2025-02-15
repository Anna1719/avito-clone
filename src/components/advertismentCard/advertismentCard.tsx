import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Advertisement } from "@/utils/types";
import { Link } from "react-router-dom";
import { renderDetails } from "./renderAdDetails";

interface AdvertisementCardProps {
  advertisement: Advertisement;
  id: string | undefined;
}

export const AdvertisementCard = ({
  advertisement,
  id,
}: AdvertisementCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        margin: "0 auto",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
          >
            {advertisement.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: 2,
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {advertisement.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Локация: {advertisement.location}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Chip
              label={advertisement.type}
              color="primary"
              sx={{
                fontSize: isMobile ? "1.25rem" : "1.75rem",
                padding: isMobile ? "0.25rem" : "0.8rem",
              }}
            />
          </Box>
          <Box sx={{ marginTop: 2 }}>
            {renderDetails({ advertisement, isMobile })}
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Button
              component={Link}
              to={`/form/${id}`}
              variant="contained"
              color="primary"
              fullWidth={isMobile}
              sx={{
                fontSize: isMobile ? "1rem" : "1.5rem",
                padding: isMobile ? "0.25rem" : "0.8rem",
              }}
            >
              Редактировать
            </Button>
          </Box>
        </CardContent>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "50%" : "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          image={advertisement.image || "/placeholder.jpg"}
          alt={advertisement.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.jpg";
          }}
        />
      </Box>
    </Card>
  );
};
