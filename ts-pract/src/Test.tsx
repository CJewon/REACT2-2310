import React from 'react'

export default function Test() {


   interface Student {
        이름 : string;
        나이 : number;
        거주지 : string;
        학교 : string;
        학번 : number;
   } 

   const 도근:Student = {
        거주지:"대한민국",
        나이:26,
        이름:"도근",
        학교:"SBS대학교",
        학번:1
   }
  return (
    <div>Student</div>
  )
}
