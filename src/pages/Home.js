import React, {useEffect} from 'react';
import { account } from '../appwrite/config';

const Home = () => {
  useEffect(()=>{
     console.log(account)
  },[])
  return (
    <div>
        I am Home
    </div>
  )
}

export default Home
