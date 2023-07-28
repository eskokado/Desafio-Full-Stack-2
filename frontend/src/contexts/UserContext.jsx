/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};