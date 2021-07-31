import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState } from "react";

const Switch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <DragSwitch
      checked={checked}
      onChange={(e) => {
        setChecked(e);
      }}
      onColor="#dc2626"
    />
  );
};

export default Switch;
