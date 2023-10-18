import React, { useCallback ,useContext } from 'react'
import CafeContext from './Cafe';

export default function CafePos() {
    const 신메뉴 = useContext(CafeContext);
  return (
    <div>포스 : 신메뉴는 {신메뉴}입니다.</div>
  )
}
