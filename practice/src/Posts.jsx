import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
        .catch(error => console.log(`${error} 에러 발생`));
    },[]);



  return (
    <div>
        <h2>게시물 리스트</h2>
        <ul>
            {/* {posts.map( (게시물)=>(
                <li key={게시물.id}>
                    <h3>{게시물.title}</h3>
                    <p>{게시물.body}</p>
                </li>
                )
            )} */}
        </ul>
    </div>
  )
}
