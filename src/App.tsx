import "./App.css";
import ConsumerComponent from "./ConsumerComponent";
import { SettingsProvider } from "./SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black", margin: "5px" }}>
          Consumer 1
          <ConsumerComponent />
        </div>
        <div style={{ border: "1px solid black", margin: "5px" }}>
          Consumer 2
          <ConsumerComponent />
        </div>
        <div style={{ border: "1px solid black", margin: "5px" }}>
          Consumer 3
          <ConsumerComponent />
        </div>
      </div>
    </SettingsProvider>
  );
}

export default App;
