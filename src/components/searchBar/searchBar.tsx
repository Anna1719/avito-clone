import { TextField } from "@mui/material";

type InputType = React.InputHTMLAttributes<HTMLInputElement>;

type TProps = Omit<InputType, "placeholder"> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchBar = ({ onChange, value }: TProps) => {
  return (
    <TextField
      fullWidth
      type="search"
      placeholder="Найти объявление..."
      variant="outlined"
      autoFocus
      onChange={onChange}
      value={value}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
        },
        "& .MuiOutlinedInput-input": {
          padding: "12px 16px",
        },
      }}
    />
  );
};
