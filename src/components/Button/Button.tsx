import styles from "./Button.module.css";
import { IButton } from "./Button.types";
const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  ...props
}: IButton) => {
  return (
    <button
      data-testid="component-button"
      type={type}
      className={`${styles.button}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
