import { Advertisement, PROPERTY_TYPES } from "@/utils/types";
import { TextField, MenuItem } from "@mui/material";
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
          value={field.value || ""}
          select
        >
          {PROPERTY_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      )}
    />

    <Controller
      name="area"
      control={control}
      rules={{
        required: "Площадь обязательна",
        min: { value: 1, message: "Площадь должна быть больше 0" },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Площадь (м²)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          value={field.value || ""}
        />
      )}
    />

    <Controller
      name="rooms"
      control={control}
      rules={{
        required: "Количество комнат обязательно",
        min: { value: 1, message: "Количество комнат должно быть больше 0" },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Количество комнат"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          value={field.value || ""}
        />
      )}
    />

    <Controller
      name="price"
      control={control}
      rules={{
        required: "Цена обязательна",
        min: { value: 1, message: "Цена должна быть больше 0" },
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Цена (₽)"
          type="number"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          value={field.value || ""}
        />
      )}
    />
  </>
);