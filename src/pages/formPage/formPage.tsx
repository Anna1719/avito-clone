import { AdvertisementForm } from "@/components/advertismentForm";
import { useFetchAdvertisementById } from "@/hooks/useAdService";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "@/hooks/axiosInstance";
import { Advertisement } from "@/utils/types";
import { useState } from "react";
import { AxiosError } from "axios";

export const FormPage = () => {
  const { id } = useParams<string>();
  const isEditMode = !!id;
  const navigate = useNavigate();

  const { data, isError, error } = useFetchAdvertisementById(id!, isEditMode);

    const is404Error =
      error instanceof AxiosError && error?.response?.status === 404;

  const [isStepTwo, setIsStepTwo] = useState(false);

  const createMutation = useMutation({
    mutationFn: (data: Advertisement) =>
      api.post("/items", data).then((res) => res.data),
    onSuccess: (data) => {
      setTimeout(() => {
        navigate(`/item/${data.id}`);
      }, 3000);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: Advertisement) =>
      api.put(`/items/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      setTimeout(() => {
        navigate(`/item/${id}`);
      }, 3000);
    },
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

  const handleGoNotFound = () => {
    navigate("/*");
  };

  const renderSuccessMessage = () => {
    if (createMutation.isSuccess) {
      return "Объявление успешно создано! Вы будете перенаправлены на страницу объявления через несколько секунд...";
    }
    if (updateMutation.isSuccess) {
      return "Изменения успешно сохранены! Вы будете перенаправлены на страницу объявления через несколько секунд...";
    }
    return null;
  };

  const renderErrorMessage = () => {
    if (createMutation.isError || updateMutation.isError) {
      return "Ошибка при отправке формы!";
    }
    if (!is404Error && isError) {
      return "Ошибка загрузки объявления!";
    }
    return null;
  };

  if(is404Error) {
    return handleGoNotFound();
  }

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
