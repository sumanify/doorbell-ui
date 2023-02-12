import { MANAGE_SUPERVISION } from "../../utils/apis";
import ToggleButton from "../common/ToggleButton";
import "./SuperVisePage.css";

// TODO: Fetch supervision state on load and update toggle button
export default function SuperVisePage() {
  const handleToggle = (toggleState: boolean) => {
    const supervision = toggleState ? 1 : 0;

    const apiEndpoint = `${MANAGE_SUPERVISION}?supervise=${supervision}`;

    fetch(apiEndpoint)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="doorbell__supervise">
      <h2>Toggle Supervise Mode</h2>

      <ToggleButton onToggle={handleToggle} />
    </div>
  );
}
