import styles from "./UserStats.module.css";
import { IUserStats } from "./UserStats.type";
import star from "../../assets/star.png";
import starNotFilled from "../../assets/starNotFilled.png";

const UserStats = ({
  followers,
  repositories,
  popularityScore,
}: IUserStats) => {
  return (
    <section className={styles.userStats}>
      <div className={styles.userStat}>
        <span>Followers:</span> <span>{followers}</span>
      </div>
      <div className={styles.userStat}>
        <span>Repositories:</span> <span>{repositories}</span>
      </div>
      <div className={styles.popularitySection}>
        <span>Popularity</span>
        <div className={styles.popularityIconsSection}>
          {popularityScore.map((rating, index) => (
            <span key={index}>
              {rating === 1 ? (
                <img className={styles.popularityIcon} src={star} />
              ) : (
                <img className={styles.popularityIcon} src={starNotFilled} />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserStats;
