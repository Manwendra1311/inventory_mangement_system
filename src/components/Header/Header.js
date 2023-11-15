import React, { useState } from "react";
import styles from "./Header.module.css";
import FullPageIcon from "../../assets/Header/full_page_icon.png";
import CollapsePageIcon from "../../assets/Header/collapse_page_icon.png";
// import { useNavigate } from "react-router-dom";
// import NotificationIcon from "../../assets/Header/notification.png";
import ProfileIcon from "../../assets/Header/profile.png";
import SignOutIcon from "../../assets/Header/sign_out.svg"

const Header = () => {
  const userName = "Admin";

  const [fullScreen, setFullScreen] = useState(false);
  const [profileState,setProfileState]=useState(false);
  // const navigate = useNavigate();

  function toggleFullScreen() {
    if (fullScreen) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  }

  const signOut=()=>{  
    localStorage.clear();
    window.location.reload();
  }



  return (
    <div className={styles.admin_dashboard_header}>
      <span>Hello {userName}</span>
      <div className={styles.admin_dashboard_header_actions}>
        <img
          src={!fullScreen ? FullPageIcon : CollapsePageIcon}
          alt="FullPageIcon"
          onClick={() => {
            toggleFullScreen();
          }}
          className={styles.header_icon}></img>
        {/* <img src={NotificationIcon} alt="NotificationIcon" onClick={()=>{navigate("/user/notification")}} className={styles.header_icon}></img> */}
        <img src={ProfileIcon} alt="ProfileIcon" onClick={()=>{setProfileState(!profileState)}} className={styles.header_icon}></img>
        {profileState && (
        <div
          className={styles.profile}
          onMouseLeave={() => {
            setProfileState(false);
          }}
        >
          <span
            className={styles.profile_content}
            onClick={() => {
              signOut();
            }}
          >
            <img src={SignOutIcon} alt=""></img> Sign Out
          </span>
        </div>
      )}
      </div>
    </div>
  );
};

export default Header;