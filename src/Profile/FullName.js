import React from "react";
import { BiInfoCircle } from "react-icons/bi";

function FullName() {
  let firstName = "Ahmed",
    lastName = "ELFKI";
  return (
    <div className="fullName-container">
      <span>
        <BiInfoCircle />
      </span>
      <span>{firstName + " " + lastName}</span>
    </div>
  );
}

export default FullName;
