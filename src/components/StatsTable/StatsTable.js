import React from "react";

import styles from "./StatsTable.module.css";

const StatsTable = ({
  tableTitle,
  tableHeaders,
  tableData,
  tableFieldMapping,
  tableActionsElement,
  tableNavBar,
  tableIcon,
  state
}) => {


  
  return (
    <div className={styles.stats_table_container}>
      <div className={styles.stats_title_actions_container}>
        <div className={styles.stats_table_title}>{tableIcon && <img src={tableIcon} alt="" onClick={()=>state("Approval")}></img>}{tableTitle}</div>
        {tableActionsElement}
      </div>
      {tableNavBar && <div className={styles.table_nav_bar}>{tableNavBar}</div>}
      <div className={styles.table_header}>
        {tableHeaders.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </div>
      
      {tableData.map((item, index) => (
        <div className={styles.row} key={index}>
          {tableHeaders.map((header, dataIndex) => (
             <div className={styles.cell} key={dataIndex}>
              {item[tableFieldMapping[dataIndex]]}
            </div>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default StatsTable;
