import React, { createContext, useState } from 'react';

export const pathfinderContext = createContext();

export function PathfinderProvider({ children }) {

  const [pathfinder, setPathfinder] = useState(false);

  return (
    <pathfinderContext.Provider
      value={[pathfinder, setPathfinder]}
    >
      {children}
    </pathfinderContext.Provider>
  );
}
