import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";
import { Advertisement } from "@/utils/types";
import { Link } from "react-router-dom";

interface AdvertisementCardProps {
  advertisement: Advertisement;
  id: string | undefined;
}

export const AdvertisementCard = ({
  advertisement,
  id,
}: AdvertisementCardProps) => {
  const renderDetails = () => {
    switch (advertisement.type) {
      case "Недвижимость":
        return (
          <>
            <Typography variant="body2" color="text.secondary">
              Тип недвижимости: {advertisement.propertyType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Площадь: {advertisement.area} м²
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Комнат: {advertisement.rooms}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Цена: {advertisement.price.toLocaleString("ru-RU")} ₽
            </Typography>
          </>
        );
      case "Авто":
        return (
          <>
            <Typography variant="body2" color="text.secondary">
              Марка: {advertisement.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Модель: {advertisement.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Год выпуска: {advertisement.year}
            </Typography>
            {advertisement.mileage && (
              <Typography variant="body2" color="text.secondary">
                Пробег: {advertisement.mileage} км
              </Typography>
            )}
          </>
        );
      case "Услуги":
        return (
          <>
            <Typography variant="body2" color="text.secondary">
              Тип услуги: {advertisement.serviceType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Опыт: {advertisement.experience} лет
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Стоимость: {advertisement.cost.toLocaleString("ru-RU")} ₽
            </Typography>
            {advertisement.workSchedule && (
              <Typography variant="body2" color="text.secondary">
                График работы: {advertisement.workSchedule}
              </Typography>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{ display: "flex", maxWidth: 1200, margin: "0 auto", boxShadow: 3 }}
    >
      <Box sx={{ flex: 1, padding: 2 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {advertisement.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            {advertisement.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Локация: {advertisement.location}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Chip label={advertisement.type} color="primary" />
          </Box>
          <Box sx={{ marginTop: 2 }}>{renderDetails()}</Box>
          <Box sx={{ marginTop: 2 }}>
            <Button
              component={Link}
              to={`/form/${id}`}
              variant="contained"
              color="primary"
            >
              Редактировать
            </Button>
          </Box>
        </CardContent>
      </Box>

      <Box
        sx={{
          width: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          image={advertisement.image || "/placeholder.jpg"}
          alt={advertisement.name}
        />
      </Box>
    </Card>
  );
};
