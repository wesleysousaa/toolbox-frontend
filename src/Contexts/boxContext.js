import { createContext, useState } from "react";

export const BoxContext = createContext();

export const BoxContextProvider = ({children}) => {

  const [box, setBox] = useState({nome: "", ferramentas: [], id: -1})

  return (
    <BoxContext.Provider value={{box, setBox}}>
      {children}
    </BoxContext.Provider>
  )
};