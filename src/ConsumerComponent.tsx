import { useSettings } from "./useSettings";

const ConsumerComponent = () => {
  const settings = useSettings();

  const someSetting = settings.someSetting;

  const toggleSetting = () => {
    settings.setSomeSetting(someSetting === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      <div
        style={{
          background: someSetting === "ON" ? "green" : "red",
          padding: "20px",
        }}
      >
        {someSetting}
      </div>
      <button onClick={toggleSetting}>
        Toggle setting {someSetting === "ON" ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default ConsumerComponent;
