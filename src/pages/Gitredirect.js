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
  const [accessToken,sat]=useState("");
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
      if(params.get("installation_id")!=undefined){
        var x=await axios.get("http://localhost:3001/addgitaccess?code="+params.get("code"));
        getUserDetails(x.data);
      }
      else{
      var t=await axios.get("http://localhost:3001/code2token?code="+params.get("code"));
      sat(t.data);
      getUserDetails(t.data);

    };
  }
    if(accessToken==""){
    handleCallback();
    }
  
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
    suid(userDetails.login);
    srno(userDetails.public_repos);
    sjoindate(userDetails.created_at);
    console.log(userDetails);
    var x=await axios.get("http://localhost:3001/gitaccesstoken?userid="+userDetails.login);
     if(x.data=="not given access yet"){
      window.location.href="https://github.com/apps/0xdevgram/installations/new";
    }

    return userDetails;
  };
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
