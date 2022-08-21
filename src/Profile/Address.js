import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

function Address() {
  let streetNumber = "50",
    streetName = "Green Street",
    boroughName = "Brooklyn",
    stateName = "NY",
    stateZipCode = "11203";

  return (
    <div className="Address-container">
      <span>
        <BiCurrentLocation />
      </span>
      <span>
        {streetNumber +
          " " +
          streetName +
          " " +
          boroughName +
          ", " +
          stateName +
          " " +
          stateZipCode}
      </span>
    </div>
  );
}

export default Address;
