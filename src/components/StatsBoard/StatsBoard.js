import React from "react";
import styles from "./StatsBoard.module.css";

const StatsBoard = ({ boardName, statIcons, statNames, statValues }) => {
  return (
    <div className={styles.stats_board}>
      <span className={styles.stat_board_title}>{boardName}</span>
      <div className={styles.stats_board_stats_wrapper}>
        {statIcons.map((stat, index) => (
          <div key={index} className={styles.stat_board_single_stat}>
            <img src={statIcons[index]} alt={statIcons[index]}></img>
            <span className={styles.stat_board_single_stat_name}>
              {statNames[index]}
            </span>
            <span className={styles.stat_board_single_stat_value}>
              {statValues[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBoard;