import logo from './logo.svg';
import './App.css';
import {useEffect, useState, createContext, useContext} from 'react';
import ContextPractice from './ContextPractice';



// class형 컴포넌트 : 작성이 어렵다, 
// 함수형 컴포넌트 : 작성이 쉽다, 성능이슈가 있다







function Contents(abab){
  return(
    <div>
      <h2>{abab.content.index}번 게시글</h2>
      컨텐츠컨텐츠
      <p>작성자 : {abab.content.writer}</p>
    </div>
  )
}

// 버튼을 클릭했을때, 숫자가 1씩 증가하고, console에 찍히게 한다

function TestUseEffect(props) {

  

  useEffect(() => {

    const thisIsInterval = setInterval(() => {
      props.setCount(props.count + 1);
    }, 1000)

    console.log(`useEffect 실행 count는 ${props.count}`);
    document.title = `FaceTalk 읽지않은 메세지(${props.count})`

    return () => {
      clearInterval(thisIsInterval);
    }
  },[props.count])

  

  return (
    <div>
      <p>컴포넌트의 카운트: {props.count}</p>
      <button onClick={() => {props.setCount(props.count + 1)}}>컴포넌트버튼</button>
    </div>
  )
}

function App() {
  const 배열 =[
    {index : 1, writer :'철수'},
    {index :2, writer : "영희"},
    {index :3, writer : "짱구"},
    {index :4, writer : "맹구"},
    {index :5, writer : "도근"},
    {index :6, writer : "철수"},
    {index :7, writer : "맹구"},
    {index :8, writer : "도근"},
    {index :9, writer : "짱구"},
    {index :10, writer : "유리"}
  ]

  console.log(배열[0].index)


  


// 버튼을 클릭했을때, 숫자가 1씩 증가하고, console에 찍히게 한다
  const [count,setCount] = useState(0);

  const [mountComp, setMountComp] = useState(false);

  // mount, unmonut, update   

  return (
    <div className="App">
      <button onClick={() => {setMountComp(!mountComp)}}>컴포넌트 토글</button>

      {mountComp?<TestUseEffect count={count} setCount={setCount}></TestUseEffect>:null}

      <button onClick={() => {setCount(count+1)}}>카운트</button>
      카운트 : {count}
      <br></br>



      {배열.map((아무거나)=><Contents content={아무거나}></Contents>)}
      <ContextPractice></ContextPractice>
    </div>
  );
}

export default App;