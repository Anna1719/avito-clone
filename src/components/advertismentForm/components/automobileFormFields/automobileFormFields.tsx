import { Advertisement, CAR_BRANDS } from "@/utils/types";
import { MenuItem, TextField } from "@mui/material";
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
          select
        >
          {CAR_BRANDS.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </TextField>
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
      rules={{
        required: "Год выпуска обязателен",
        min: { value: 1900, message: "Год должен быть не меньше 1900" },
        max: { value: new Date().getFullYear(), message: "Год не может быть больше текущего" },
      }}
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
      rules={{
        min: { value: 0, message: "Пробег не может быть отрицательным" },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Пробег (км)"
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