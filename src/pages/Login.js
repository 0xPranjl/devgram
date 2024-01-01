import React from 'react';
import './Login.css';
import '../App.css';
function Login() {
  const signInWithGitHub = () => {
    window.location.href=`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=user`;
  };

  return (
    <div className="App">
          <h1>Login or Signup</h1>
      <div className="login-container">
        <button className="github-btn" onClick={signInWithGitHub}>
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
}

export default Login;
