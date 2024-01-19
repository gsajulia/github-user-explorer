import styles from "./UserInfo.module.css";
import { IUserInfo } from "./UserInfo.types";

export const UserInfo = ({ image, name, email, location }: IUserInfo) => {
  return (
    <section className={styles.userInfo}>
      <img className={styles.userImage} src={image} />
      <h2>{name}</h2>
      <span>{email}</span>
      <span>{location}</span>
    </section>
  );
};
