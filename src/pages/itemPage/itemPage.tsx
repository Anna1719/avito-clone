import { ROUTES } from "@/app/routes";
import { AdvertisementCard } from "@/components/advertismentCard";
import { useFetchAdvertisementById } from "@/hooks/useAdService";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export const ItemPage = () => {
  const { id } = useParams<string>();
  const { data, isLoading, isError } = useFetchAdvertisementById(id!, true);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" marginTop={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box marginTop={4}>
        <Alert severity="error">Ошибка загрузки объявления!</Alert>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box marginTop={4}>
        <Alert severity="warning">Объявление не найдено!</Alert>
      </Box>
    );
  }

  return (
    <Box marginTop={4}>
      <Link to={ROUTES.LIST}>
        <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          Назад к списку объявлений
        </Button>
      </Link>
      <AdvertisementCard advertisement={data} id={id} />
    </Box>
  );
};
