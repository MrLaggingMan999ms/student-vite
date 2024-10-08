import React, { useEffect, useState } from 'react'

const Post = () => {
    const [count, setCount] = useState(0);
    const [reFetch, setReFetch] = useState(false)
    
    const fetchData = async () => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data);
      }
      catch(error){
        console.log("Error fetching data: ", error)
      }
    }

    useEffect(() => {
    console.log("render effect");
    // api fetch
    
    fetchData();
    
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=>{
    //     console.log(res);
        
    //     return res.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
  },[reFetch]);

  const handleScroll=()=>{
    console.log("scroll");
  }
  const handleResize = () => {
    console.log(window.innerHeight)
    console.log(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () =>{
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  })
  
  console.log("render component")
    return (
    <div>Post
        <button onClick={() => setCount(count + 1)}>Count</button>
        <button onClick={() => setReFetch(true)}>Reload</button>
    </div>
  )
}

export default Post
