import React, { useState } from "react";
import "./ToggleButton.css";

interface Props {
  onToggle: (state: boolean) => void;
}

const ToggleButton: React.FC<Props> = ({ onToggle }) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <button
      className={`toggle-button ${isToggled ? "toggled" : ""}`}
      onClick={handleToggle}
    >
      {isToggled ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
