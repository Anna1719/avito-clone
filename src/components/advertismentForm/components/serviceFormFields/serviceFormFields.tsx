import { Advertisement } from "@/utils/types";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export const ServiceFields: React.FC<{ control: Control<Advertisement> }> = ({ control }) => (
  <>
    <Controller
      name="serviceType"
      control={control}
      rules={{ required: "Тип услуги обязателен" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Тип услуги"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="experience"
      control={control}
      rules={{ required: "Опыт работы обязателен" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Опыт работы (лет)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="cost"
      control={control}
      rules={{ required: "Стоимость обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Стоимость (руб.)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="workSchedule"
      control={control}
      render={({ field }) => (
        <TextField {...field} label="График работы" fullWidth margin="normal" />
      )}
    />
  </>
);
