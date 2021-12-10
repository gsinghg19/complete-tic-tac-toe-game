import React from "react";

const style = {
  width: "250px",
  margin: "auto",
  display: "grid",
  fontSize: "10px",
  fontWeight: "100",
};

//add hover function to refresh button in css file**

const Refresh = (props) => (
  <button name={"btn"} style={style} onClick={props.onClick}>
    {props.value}
  </button>
);

export default Refresh;
