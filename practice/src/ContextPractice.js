import React, { createContext } from 'react'
import ChildContextComp from './ChildContextComp';

const MyContext = createContext();

export default function ContextPractice() {
    const names = ['철수', '영희', '짱구', '맹구']
  return (
    <MyContext.Provider value={names}>
        <ChildContextComp></ChildContextComp>
    </MyContext.Provider>
  )
}





// Provider (공급), Consumer(소비)
