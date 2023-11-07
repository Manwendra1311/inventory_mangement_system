import styles from "./Notification.module.css";

const Notification=()=>{


    const notifications=[
        {
            title:"Item Removed",
            content:"One Item is removed form the IT category",
            button_group: [ "Dismiss"]
        },
        {
            title:"Item Added",
            content:"One Item is added to the grocery category",
            button_group: ["Dismiss"]
        },
        {
            title:"Item Edited",
            content:"One item was edited",
            button_group: ["Dismiss"]
        },
        {
            title:"Item Edited",
            content:"One item was edited",
            button_group:["Dismiss"]
        }, 
    ]

    return(
        <div className={styles.notifications}>
            <span className={styles.header}>Notification</span>
            {notifications.map((item,index)=>{
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