import { useEffect, useState } from 'react'
import { dataFetcher } from './dataFetcher';

export const GetPostList = () => {
  const [postList, setPostList] = useState<any[]>([]);

  const fetchPostLists = async() =>{
    const postLists = await dataFetcher('https://jsonplaceholder.typicode.com/users');
    setPostList(postLists);
  }

  useEffect(()=>{
    fetchPostLists()
  },[]);

  return postList;
}

