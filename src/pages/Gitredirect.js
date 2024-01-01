import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { App } from "octokit";
import Bio from '../component/Bio';
import { useSearchParams } from 'react-router-dom';
import GitHubCalendar from 'react-github-contribution-calendar';
import Lottie from 'react-lottie';
import '../App.css'; 
import { Octokit } from "https://esm.sh/@octokit/core";
import * as animationData from './githubani.json';
import { Chart } from "react-google-charts";

import * as loading from './loading.json';
const Gitredirect= () => {
 
  
   const options = {
    title: "Mostly used language",
    pieSliceText: "label",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
 
  const loadOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const [name,sname]=useState();
  const [pic,spic]=useState();
  const [rno,srno]=useState();
  const [joindate,sjoindate]=useState();
  const [uid,suid]=useState();
  const [accessToken,sat]=useState("");
  const [ifaccess,sif]=useState(true);
  const [loader,sloader]=useState(true);
  const [data,sdata]=useState([]);
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
      getrepo(t.data);

    };
  }
    if(accessToken==""){
    handleCallback();
    }
  
  }, []);
  const getrepo=async(accessToken)=>{
  const octokit = new Octokit({
    auth: accessToken
  })
  
  var x=await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    per_page:100
  });
  const newArray = x.data.map(({ language }) => (language ));
  const filteredArray = newArray.filter((element) => element !== null);
  const occurrencesArray = countOccurrences(filteredArray);
  var datar=[["lang","known"]];
  const all = [...datar, ...occurrencesArray];
  sdata(all);
 // const d=countUniqueCombinations(newArray);
  console.log(newArray);


}
function countOccurrences(arr) {
  return Object.entries(
    arr.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {})
  ).map(([value, count]) => [value, count]);
}



function getDistinctElements(arr) {
  // Use a Set to store distinct elements
  const distinctSet = new Set(arr);

  // Convert the Set back to an array
  const distinctArray = Array.from(distinctSet);

  return distinctArray;
}



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
    sloader(false);
    var x=await axios.get("http://localhost:3001/gitaccesstoken?userid="+userDetails.login);
     if(x.data=="not given access yet"){
      sif(false);
      setTimeout(()=>{
        window.location.href="https://github.com/apps/0xdevgram/installations/new";
      },4000);
    }

    return userDetails;
  };
  return (
    <div>
      {loader? 
      <>
      <Lottie options={loadOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
              </>:<>
      {ifaccess?<div>
      <Bio
        avatar={pic}
        name={name}
        username={"( "+uid+" )"}
        totalRepositories={rno}
        dateJoined={joindate}
        contributionsThisYear={100}
      />
      <GitHubCalendar values={values} until={until}/>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"150px"}
    />
    </div>:<>
    <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
              <h2>Connect your github redirecting...</h2>
    </>
}
      </>
}
    </div>
  );
};


export default Gitredirect;
