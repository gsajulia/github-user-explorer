import styles from "./UserInfo.module.css";
import { IUserInfo } from "./UserInfo.types";
import Image from "next/image";

const UserInfo = ({ image, name, email, location }: IUserInfo) => (
  <section className={styles.userInfo}>
    <Image
      className={styles.userImage}
      src={image}
      width={100}
      height={100}
      alt="github user image"
    />
    <h2>{name}</h2>
    <span>{email}</span>
    <span>{location}</span>
  </section>
);

export default UserInfo;
