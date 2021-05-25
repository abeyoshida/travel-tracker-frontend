import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

/*
 * CSSTransition component makes creating animations easier
 * in the SideDrawer a slide in/out animation is applied to show/hide
 */
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  /*
   * React portal output to 'drawer-hook' container (<div id="drawer-hook></div>") in index.html for the SideDrawer
   */
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
