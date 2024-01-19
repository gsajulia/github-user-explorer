import styles from "./UserStats.module.css";
import { IUserStats } from "./UserStats.type";
import star from "../../assets/star.png";
import starNotFilled from "../../assets/starNotFilled.png";
import { useMemo } from "react";

export const UserStats = ({ followers, repositories }: IUserStats) => {
  const popularityScore = useMemo(() => {
    const score: number[] = [];

    score.push(followers >= 10 && repositories >= 8 ? 1 : 0);
    score.push(followers >= 7 && repositories >= 7 ? 1 : 0);
    score.push(followers >= 5 && repositories >= 5 ? 1 : 0);
    score.push(followers >= 3 && repositories >= 3 ? 1 : 0);
    score.push(followers >= 1 && repositories >= 1 ? 1 : 0);

    return score;
  }, [followers, repositories]);

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
                <img src={starNotFilled} />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};