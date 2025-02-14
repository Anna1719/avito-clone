import { Advertisement } from "@/utils/types";
import React from "react";
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

export const AdvertisementForm: React.FC<AdvertisementFormProps> = ({
  isEditMode = false,
  data = {},
  isStepTwo,
  onSubmit,
  onGoBack,
  successMessage,
  errorMessage,
}) => {
  const { control, handleSubmit, reset, watch } = useForm<Advertisement>({
    defaultValues: { type: "Недвижимость" },
  });

  const selectedCategory = watch("type");

  React.useEffect(() => {
    if (isEditMode && data) {
      reset(data);
    }
  }, [data, isEditMode, reset]);

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

      {successMessage && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
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
            >
              {isEditMode ? "Сохранить изменения" : "Создать объявление"}
            </Button>
            <Button
              type="button"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={onGoBack}
            >
              Назад
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};
