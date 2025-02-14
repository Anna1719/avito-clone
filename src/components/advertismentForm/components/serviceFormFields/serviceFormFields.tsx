import { Advertisement, SERVICE_TYPES } from "@/utils/types";
import { TextField, MenuItem } from "@mui/material";
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
          select
        >
          {SERVICE_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      )}
    />

    <Controller
      name="experience"
      control={control}
      rules={{
        required: "Опыт работы обязателен",
        min: { value: 0, message: "Опыт работы не может быть отрицательным" },
      }}
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
      rules={{
        required: "Стоимость обязательна",
        min: { value: 1, message: "Стоимость должна быть больше 0" },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Стоимость (₽)"
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
        <TextField
          {...field}
          label="График работы"
          fullWidth
          margin="normal"
        />
      )}
    />
  </>
);