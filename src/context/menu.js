import React, { useState } from "react"

const MenuContext = React.createContext()

export function MenuProvider({ children }) {
  const [isOpen, setNav] = useState([])

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext