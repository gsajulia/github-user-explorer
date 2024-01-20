import styles from "./UserStats.module.css";
import { IUserStats } from "./UserStats.type";
import Image from "next/image";

const UserStats = ({
  followers,
  repositories,
  popularityScore,
}: IUserStats) => (
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
              <Image src="/star.png" alt="Star icon" width={20} height={20} />
            ) : (
              <Image
                src="/starNotFilled.png"
                alt="Star not filled icon"
                width={20}
                height={20}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default UserStats;
