import styles from "./Button.module.css";
import { IButton } from "./Button.types";
const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ...props
}: IButton) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
