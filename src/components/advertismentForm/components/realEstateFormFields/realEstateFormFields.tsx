import { Advertisement } from "@/utils/types";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export const RealEstateFields: React.FC<{ control: Control<Advertisement> }> = ({ control }) => (
  <>
    <Controller
      name="propertyType"
      control={control}
      rules={{ required: "Тип недвижимости обязателен" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Тип недвижимости"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="area"
      control={control}
      rules={{ required: "Площадь обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Площадь (кв. м)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="rooms"
      control={control}
      rules={{ required: "Количество комнат обязательно" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Количество комнат"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="price"
      control={control}
      rules={{ required: "Цена обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Цена (руб.)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  </>
);
