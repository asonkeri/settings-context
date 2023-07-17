import { createContext, useReducer } from "react";

class SettingsManager {
  dispatch: any;
  state: SettingsState;
  constructor(state: SettingsState, dispatch: any) {
    this.state = state;
    this.dispatch = dispatch;
    console.log("SettingsManager", state);
  }

  get someSetting() {
    return this.state.someSetting;
  }

  public setSomeSetting(data: string) {
    this.dispatch({ type: "SET_SOME_SETTING", payload: data });
  }
}

const initialState = {
  someSetting: "OFF",
};
type SettingsState = typeof initialState;

export const SettingsContext = createContext<SettingsManager>(
  new SettingsManager(initialState, () => null)
);

const reducer = (state: SettingsState, action: any) => {
  switch (action.type) {
    case "SET_SOME_SETTING":
      return { ...state, someSetting: action.payload };
    default:
      return state;
  }
};

export const SettingsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const settings = new SettingsManager(state, dispatch);
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
