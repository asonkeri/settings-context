import { SettingsProvider } from "./SettingsContext";
import ConsumerComponent from "./ConsumerComponent";

function App() {
  return (
    <SettingsProvider>
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
    </SettingsProvider>
  );
}

export default App;
