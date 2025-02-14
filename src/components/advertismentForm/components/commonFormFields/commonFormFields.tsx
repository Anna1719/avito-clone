import { Advertisement } from "@/utils/types";
import { TextField, MenuItem } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export const CommonFields: React.FC<{
  control: Control<Advertisement>;
}> = ({ control }) => (
  <>
    <Controller
      name="name"
      control={control}
      rules={{ required: "Название обязательно" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Название"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="description"
      control={control}
      rules={{ required: "Описание обязательно" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Описание"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="location"
      control={control}
      rules={{ required: "Локация обязательна" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Локация"
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />

    <Controller
      name="image"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Ссылка на фото"
          fullWidth
          margin="normal"
        />
      )}
    />

    <Controller
      name="type"
      control={control}
      rules={{ required: "Категория обязательна" }}
      render={({ field }) => (
        <TextField
          {...field}
          select
          label="Категория объявления"
          fullWidth
          margin="normal"
        >
          <MenuItem value="Недвижимость">Недвижимость</MenuItem>
          <MenuItem value="Авто">Авто</MenuItem>
          <MenuItem value="Услуги">Услуги</MenuItem>
        </TextField>
      )}
    />
  </>
);
