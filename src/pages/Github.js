// Auth.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Github = () => {
  const history = useNavigate();

  const handleLogin = () => {
    window.location.href = "https://github.com/login/oauth/authorize?client_id="+process.env.REACT_APP_GITHUB_CLIENT_ID+"&redirect_uri=http://localhost:3000/gitredirect&scope=user+repo";
  };


  // Handle the GitHub callback
//   React.useEffect(() => {
//     const code = new URLSearchParams(window.location.search).get('code');

//     if (code) {
//       // Exchange code for access token
//       // Perform API requests using the access token
//       // Redirect to the main app after authentication
//       history.push('/repos');
//     }
//   }, [history]);

  return (
    <div>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default Github;
