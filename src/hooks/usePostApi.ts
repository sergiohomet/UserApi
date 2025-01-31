import {useState } from "react";

export function usePostApi() {
  const [posts, setPosts] = useState([])
  
  const fetchPost = async (page: number) => {
    const limit = 12
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
        console.log(error)
    }
  }

  return {
    posts,
    fetchPost
  }
  
}