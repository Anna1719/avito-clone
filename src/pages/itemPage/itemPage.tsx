import { ROUTES } from "@/app/routes";
import { AdvertisementCard } from "@/components/advertismentCard";
import { useFetchAdvertisementById } from "@/hooks/useAdService";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { data, isLoading, isError, error } = useFetchAdvertisementById(
    id!,
    true
  );

  const handleGoBack = () => {
    navigate("/*");
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" marginTop={4}>
        <CircularProgress />
      </Box>
    );
  }

  const is404Error =
    error instanceof AxiosError && error?.response?.status === 404;

  if (!is404Error && isError) {
    return (
      <Box marginTop={4}>
        <Alert severity="error">Ошибка загрузки объявления!</Alert>
      </Box>
    );
  }

  if (!data) {
    return handleGoBack();
  }

  return (
    <Box marginTop={4} width="78%">
      <Link to={ROUTES.LIST}>
        <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          Назад к списку объявлений
        </Button>
      </Link>
      <AdvertisementCard advertisement={data} id={id} />
    </Box>
  );
};
