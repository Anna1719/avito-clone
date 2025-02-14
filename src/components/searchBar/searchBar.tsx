import styles from "./searchBar.module.scss";

type InputType = React.InputHTMLAttributes<HTMLInputElement>;

type TProps = Omit<InputType, "placeholder"> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchBar = ({ onChange, value }: TProps) => {
  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Search characters..."
      autoFocus
      onChange={onChange}
      value={value}
    />
  );
};
