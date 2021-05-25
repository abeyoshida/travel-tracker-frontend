import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  /**
   * props.children is a special react props property that allows children elements to be
   * passed in directly into the component output
   */
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
