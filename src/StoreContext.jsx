import React from 'react'

const StoreContext = React.createContext(null)

export const Provider = ({children, value}) => {
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
