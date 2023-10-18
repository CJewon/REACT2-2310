import React, { createContext, useContext } from 'react'
import ChildContextComp from './ChildContextComp';

const MyContext = createContext();

export default function ContextPractice() {
    const names = ['철수', '영희', '짱구', '맹구']
  return (
    <MyContext.Provider value={names}>
      <할아버지></할아버지>
    </MyContext.Provider>
  )
}

function 할아버지() {
   return <아빠></아빠>
}

function 아빠() {
  return <나></나>
}

function 나() {

  const 이름 = useContext(MyContext);
  return (
    <div>
      {이름}
    </div>
   )
}



// Provider (공급), Consumer(소비)
