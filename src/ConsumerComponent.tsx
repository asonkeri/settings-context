import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

const ConsumerComponent = () => {
  const settings = useContext(SettingsContext);

  const toggleSetting = () => {
    settings.setSomeSetting(settings.someSetting === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      <div style={{ background: "red", padding: "20px" }}>
        {settings.someSetting}
      </div>
      <button onClick={toggleSetting}>Toggle setting ON/OFF</button>
    </div>
  );
};

export default ConsumerComponent;
