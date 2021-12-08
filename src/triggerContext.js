import React, { createContext, useState } from 'react';

export const triggerContext = createContext();

export function TriggerProvider({ children }) {

  const [trigger, setTrigger] = useState(false);

  return (
    <triggerContext.Provider
      value={[trigger, setTrigger]}
    >
      {children}
    </triggerContext.Provider>
  );
}
