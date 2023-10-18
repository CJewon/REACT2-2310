import React, { createContext } from 'react'
import CafeInner from './CafeInner'

const CafeContext = createContext();

export default function Cafe() {
  return (
    <CafeContext.Provider value='붕붕슈크림라떼'>
      <CafeInner></CafeInner>
    </CafeContext.Provider >
  )
}
