import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bio from '../component/Bio';
const Gitredirect= () => {
  const [name,sname]=useState();
  const [pic,spic]=useState();
  const [rno,srno]=useState();
  const [joindate,sjoindate]=useState();
  useEffect(() => {
    const handleCallback = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      console.log(code);
      const token=await getUserDetails("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");
      console.log(token);
      //   const response = await axios.post('YOUR_BACKEND_SERVER_URL/github/callback', { code });
    //   console.log(response.data); // Handle the response, store the token, etc.
    };

    handleCallback();
  }, []);
  const getUserDetails = async (accessToken) => {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const userDetails = response.data;
    sname(userDetails.name);
    spic(userDetails.avatar_url);
    console.log(userDetails);
    return userDetails;
  };
  return (
    <div>
      <p>Redirecting...</p>
      <div>
      <Bio
        avatar={pic}
        username={name}
        totalRepositories={50}
        dateJoined="January 1, 2022"
        contributionsThisYear={100}
      />
    </div>
    </div>
  );
};

export default Gitredirect;
