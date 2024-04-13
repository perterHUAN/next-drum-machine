"use client";
import React, { useContext } from "react";
import { createContext, useState } from "react";
export const SoundEnabledContext = createContext();
function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}
export function useSoundEnabled() {
  const data = useContext(SoundEnabledContext);
  if (!data) {
    throw new Error(
      "useSoundEnabled must be used within a SoundEnabledProvider"
    );
  }
  return data;
}
export default SoundEnabledProvider;
