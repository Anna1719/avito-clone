import { Advertisement } from "@/utils/types";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export const AutoFields: React.FC<{ control: Control<Advertisement> }> = ({ control }) => (
  <>
    <Controller
      name="brand"
      control={control}
      rules={{ required: "Марка автомобиля обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Марка"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="model"
      control={control}
      rules={{ required: "Модель обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Модель"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="year"
      control={control}
      rules={{ required: "Год выпуска обязателен" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Год выпуска"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="mileage"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Пробег (км)"
          type="number"
          fullWidth
          margin="normal"
        />
      )}
    />
  </>
);
