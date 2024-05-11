
import React, { createContext, useState } from 'react'

export const GeneralContext = createContext()

const GeneralProvider = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <GeneralContext.Provider value={{isDrawerOpen,drawerHandler}}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
