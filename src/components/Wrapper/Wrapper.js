"use client";
import React from "react";
import { createContext, useState } from "react";
export const VolumeContext = createContext();
function Wrapper({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  return (
    <VolumeContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </VolumeContext.Provider>
  );
}

export default Wrapper;
