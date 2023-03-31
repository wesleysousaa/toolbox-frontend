import { createContext, useState } from "react";

export const ToolContext = createContext();

export const ToolContextProvider = ({children}) => {

  const [tool, setTool] = useState({ nome: "", peso: "", id: -1 })

  return (
    <ToolContext.Provider value={{tool, setTool}}>
      {children}
    </ToolContext.Provider>
  )
};