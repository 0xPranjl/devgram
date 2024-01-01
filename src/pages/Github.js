// Auth.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Octokit } from "@octokit/rest";
const Github = () => {
  const history = useNavigate();
 const REDIRECT_URI="http://localhost:3000/gitredirect";
 const CLIENT_ID="Iv1.65b8afe4ea264973"
 const x=()=>{
  window.location.href="https://github.com/apps/0xdevgram/installations/new";
 //window.location.href=`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`
 } 
 return (
    <div>
      <button onClick={x}>Login with GitHub</button>
    </div>
  );
};

export default Github;
