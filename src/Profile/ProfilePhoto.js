import React from "react";
import PIC from "../imgs/ProfilePIC.png";

function ProfilePhoto() {
  return (
    <div className="profile-pic-container">
      <img src={PIC} alt="profile-pic" className="profile-pic" />
    </div>
  );
}

export default ProfilePhoto;
