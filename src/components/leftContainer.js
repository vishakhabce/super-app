import React from "react";
import concert from "../asset/concert.png";
import "./leftContainer.css";

function LeftContainer() {
  return (
    <>
        <div class="image-container">
          <img width="100%" height="100%" src={concert} alt="concert" />
        </div>
        <p className="LoginAccount">Already have an account?</p>
        <p className="leftBottomContainer">Discover new things on Superapp</p>
    </>
  );
}

export default LeftContainer;
