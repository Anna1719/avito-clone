import { AdvertisementForm } from "@/components/advertismentForm";
import { useFetchAdvertisementById } from "@/hooks/useAdService";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "@/hooks/axiosInstance";
import { Advertisement } from "@/utils/types";
import { useState } from "react";

export const FormPage = () => {
  const { id } = useParams<string>();
  const isEditMode = !!id;

  const { data, isError } = useFetchAdvertisementById(id!, isEditMode);

  const [isStepTwo, setIsStepTwo] = useState(false);

  const createMutation = useMutation({
    mutationFn: (data: Advertisement) =>
      api.post("/items", data).then((res) => res.data),
  });

  const updateMutation = useMutation({
    mutationFn: (data: Advertisement) =>
      api.put(`/items/${id}`, data).then((res) => res.data),
  });

  const onSubmit = (formData: Advertisement) => {
    if (isStepTwo) {
      if (isEditMode) {
        updateMutation.mutate(formData);
      } else {
        createMutation.mutate(formData);
      }
    } else {
      setIsStepTwo(true);
    }
  };

  const handleGoBack = () => {
    setIsStepTwo(false);
  };

  const renderSuccessMessage = () => {
    if (createMutation.isSuccess) {
      return "Объявление успешно создано!";
    }
    if (updateMutation.isSuccess) {
      return "Изменения успешно сохранены!";
    }
    return null;
  };

  const renderErrorMessage = () => {
    if (createMutation.isError || updateMutation.isError) {
      return "Ошибка при отправке формы!";
    }
    if (isError) {
      return "Ошибка загрузки объявления!";
    }
    return null;
  };

  return (
    <AdvertisementForm
      isEditMode={isEditMode}
      data={data}
      isStepTwo={isStepTwo}
      onSubmit={onSubmit}
      onGoBack={handleGoBack}
      successMessage={renderSuccessMessage()}
      errorMessage={renderErrorMessage()}
    />
  );
};
