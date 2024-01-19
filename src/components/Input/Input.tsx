import styles from "./Input.module.css";

const Input = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  ...props
}: IInput) => {
  return (
    <input
      id={id}
      className={`${styles.input} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
