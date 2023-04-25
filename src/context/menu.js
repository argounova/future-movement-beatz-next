import React, { useState, createContext } from "react"

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [isOpen, setNav] = useState([])

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext