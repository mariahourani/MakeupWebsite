import React, { createContext } from 'react'

export const ShopContext = createContext(null);

export const shopcontentprovider = () => {
  return (
   <ShopContext.Provider></ShopContext.Provider>
  )
}

