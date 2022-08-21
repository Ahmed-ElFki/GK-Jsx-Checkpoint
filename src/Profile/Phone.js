import React from "react";
import { BiPhoneCall } from "react-icons/bi";

function Phone() {
  let phoneNumber = "+216 20 37 52 56";
  return (
    <div className="phoneNumber-container">
      <span>
        <BiPhoneCall />
      </span>
      <span>{phoneNumber}</span>
    </div>
  );
}

export default Phone;
