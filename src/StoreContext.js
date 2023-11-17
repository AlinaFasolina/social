import React from "react";
const ContextStore = React.createContext(null);

export const MyProvider = (props) => {
  return (
    <ContextStore.Provider value={props.store}>
      {props.children}
    </ContextStore.Provider>
  );
};
export default ContextStore;
