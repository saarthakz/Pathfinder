import React, { createContext, useState } from 'react';

export const aStarContext = createContext();

export function AStarProvider({ children }) {

  const [aStar, setAStar] = useState(false);

  return (
    <aStarContext.Provider
      value={[aStar, setAStar]}
    >
      {children}
    </aStarContext.Provider>
  );
}
