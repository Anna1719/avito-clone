import { Advertisement } from "@/utils/types";
import { Typography } from "@mui/material";

interface AdvertisementRenderProps {
  advertisement: Advertisement;
  isMobile: boolean;
}

export const renderDetails = ({
  advertisement,
  isMobile,
}: AdvertisementRenderProps) => {
  switch (advertisement.type) {
    case "Недвижимость":
      return (
        <>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Тип недвижимости: {advertisement.propertyType}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Площадь: {advertisement.area} м²
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Комнат: {advertisement.rooms}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Цена: {advertisement.price.toLocaleString("ru-RU")} ₽
          </Typography>
        </>
      );
    case "Авто":
      return (
        <>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Марка: {advertisement.brand}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Модель: {advertisement.model}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Год выпуска: {advertisement.year}
          </Typography>
          {advertisement.mileage && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: isMobile ? "1.5rem" : "2rem",
              }}
            >
              Пробег: {advertisement.mileage} км
            </Typography>
          )}
        </>
      );
    case "Услуги":
      return (
        <>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Тип услуги: {advertisement.serviceType}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Опыт: {advertisement.experience} лет
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          >
            Стоимость: {advertisement.cost.toLocaleString("ru-RU")} ₽
          </Typography>
          {advertisement.workSchedule && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: isMobile ? "1.5rem" : "2rem",
              }}
            >
              График работы: {advertisement.workSchedule}
            </Typography>
          )}
        </>
      );
    default:
      return null;
  }
};
