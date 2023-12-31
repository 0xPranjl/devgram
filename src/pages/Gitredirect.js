import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { App } from "octokit";
import Bio from '../component/Bio';
import { useSearchParams } from 'react-router-dom';
import GitHubCalendar from 'react-github-contribution-calendar';
const Gitredirect= () => {
  const [name,sname]=useState();
  const [pic,spic]=useState();
  const [rno,srno]=useState();
  const [joindate,sjoindate]=useState();
  const [uid,suid]=useState();

  var values = {
    '2016-06-23': 1,
    '2016-06-26': 2,
    '2016-06-27': 3,
    '2016-06-28': 4,
    '2016-06-29': 4
  }
  var until = '2016-06-30';
 const [params]=useSearchParams();
 console.log(params.get("code"));
 console.log(params.get("installation_id"));
  useEffect(() => {
    const handleCallback = async () => {
      // const code = new URLSearchParams(window.location.search).get('code');
      // console.log(code);
      // const token=await getUserDetails("ghu_ZBWCSQCZdblSulasIY3izSGvyGxs2s1TqmOq");
      // console.log("token"+token);

    

      //   const response = await axios.post('YOUR_BACKEND_SERVER_URL/github/callback', { code });
    //   console.log(response.data); // Handle the response, store the token, etc.
    };

    handleCallback();
  
  }, []);
  y("ghu_ygUFFErjh2b5EgQU1aeA6aMLjzrOA60UBeBN");
  async function y(accessToken){
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
  }
  // const getUserDetails = async (accessToken) => {
  //   const response = await axios.get('https://api.github.com/user', {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  
  //   const userDetails = response.data;
  //   sname(userDetails.name);
  //   spic(userDetails.avatar_url);
  //   suid(userDetails.login);
  //   srno(userDetails.public_repos);
  //   sjoindate(userDetails.created_at);
  //   console.log(userDetails);




  //   return userDetails;
  // };
  return (
    <div>
      <div>
      <Bio
        avatar={pic}
        name={name}
        username={"( "+uid+" )"}
        totalRepositories={rno}
        dateJoined={joindate}
        contributionsThisYear={100}
      />
      <GitHubCalendar values={values} until={until}/>
    </div>
    </div>
  );
};


export default Gitredirect;
