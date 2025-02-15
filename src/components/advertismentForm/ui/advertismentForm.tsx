import { Advertisement } from "@/utils/types";
import { useForm } from "react-hook-form";
import { Alert, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AutoFields,
  CommonFields,
  RealEstateFields,
  ServiceFields,
} from "../components";
import { ROUTES } from "@/app/routes";

interface AdvertisementFormProps {
  isEditMode?: boolean;
  data?: Advertisement;
  isFetchInfoError?: boolean;
  isStepTwo: boolean;
  onSubmit: (data: Advertisement) => void;
  onGoBack: () => void;
  successMessage?: string | null;
  errorMessage?: string | null;
}

export const AdvertisementForm = ({
  isEditMode = false,
  data,
  isStepTwo,
  onSubmit,
  onGoBack,
  successMessage,
  errorMessage,
}: AdvertisementFormProps) => {
  const { control, handleSubmit, watch } = useForm<Advertisement>({
    defaultValues: data,
  });

  const selectedCategory = watch("type");

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Link to={ROUTES.LIST}>
        <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          Назад к списку объявлений
        </Button>
      </Link>
      <Typography variant="h4" gutterBottom>
        {isEditMode ? "Редактировать Объявление" : "Создать Объявление"}
      </Typography>

      {isStepTwo && successMessage && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          {successMessage}
        </Alert>
      )}

      {isStepTwo && errorMessage && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {!isStepTwo ? (
          <>
            <CommonFields control={control} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Продолжить
            </Button>
          </>
        ) : (
          <>
            {selectedCategory === "Недвижимость" && (
              <RealEstateFields control={control} />
            )}
            {selectedCategory === "Авто" && <AutoFields control={control} />}
            {selectedCategory === "Услуги" && (
              <ServiceFields control={control} />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={!!successMessage}
            >
              {isEditMode ? "Сохранить изменения" : "Создать объявление"}
            </Button>
            <Button
              type="button"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={onGoBack}
              disabled={!!successMessage}
            >
              Назад
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};
