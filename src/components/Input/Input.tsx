import styles from "./Input.module.css";
import { IInput } from "./Input.types";

const Input = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}: IInput) => (
  <input
    id={id}
    className={`${styles.input}`}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);

export default Input;
