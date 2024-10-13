import React, { memo, useEffect, useState } from 'react'

const Post = ({PCount}) => {
    const [count, setCount] = useState(0);
    const [reFetch, setReFetch] = useState(false)
    
    console.log("render post component");
    
    const fetchData = async (controller) => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
          signal:controller.signal
      })
        const data = await res.json()
        console.log(data);
      }
      catch(error){
        console.log("Error fetching data: ", error)
      }
    }

    useEffect(() => {
    console.log("render effect");
    const controller = new AbortController();
    // api fetch
    
    fetchData(controller);
    return()=>{
      controller.abort();
    }
    
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
        <br />
        {PCount}
    </div>
  )
}

export default memo(Post);
