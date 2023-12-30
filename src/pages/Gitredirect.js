import React, { useEffect } from 'react';

const Gitredirect= () => {
  useEffect(() => {
    const handleCallback = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      console.log(code);
    //   const response = await axios.post('YOUR_BACKEND_SERVER_URL/github/callback', { code });
    //   console.log(response.data); // Handle the response, store the token, etc.
    };

    handleCallback();
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default Gitredirect;
