import React from "react";
import concert from "../asset/concert.png";
import "./leftContainer.css";

function LeftContainer() {
  return (
    <>
      <div class="image-container">
        <p className="LoginAccount">Already have an account?</p>
        <button className="login">login</button>
        <p className="leftBottomContainer">Discover new things on Superapp</p>
        <img width="100%" height="100%" src={concert} alt="concert" />
      </div>

    </>
  );
}

export default LeftContainer;
