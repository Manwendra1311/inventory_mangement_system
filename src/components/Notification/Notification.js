import styles from "./Notification.module.css";

const Notification=(props)=>{


    

    return(
        <div className={styles.notifications}>
            <span className={styles.header}>Notification</span>
            {props.data.map((item,index)=>{
                return(
                    <div key={index} className={styles.notification_wrap}>
                        <div className={styles.content_wrap}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.content}>{item.content}</span>
                        </div>
                        <div className={styles.button_wrap}>
                            {item.button_group.map((button,index)=>{
                                return <button key={index}>{button}</button>
                            })}
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Notification;