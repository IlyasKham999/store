import React from "react";
import { NavLink } from "react-router-dom";

function Clock() {
    return (
      <div className="Clock">
            Clock
            <NavLink to="/">home</NavLink>
      </div>
    );
  }
  
  export default Clock;