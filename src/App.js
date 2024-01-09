import React from "react";
import ModalTest from "./components/modal/Modal";
import { SlideContextProvider } from "./contexts/SlideContext";

const App = () => {
  return (
    <SlideContextProvider>
      <ModalTest />
    </SlideContextProvider>
  );
};

export default App;
