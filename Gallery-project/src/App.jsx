import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData,setUserData] = useState([]);
  const [index,setIndex] = useState(1);

const getData = async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
  setUserData(response.data)
}

useEffect(()=>{
  getData();
},[index]);

let printUserData = <h3 className='loading'>Loading</h3>
if(userData.length>0){
  printUserData = userData.map(function(elem,idx){

    return <div key ={idx}>
      <a href={elem.url} target='_blank'>
        <div>
      <img  className ="images" src={elem.download_url}></img>
    </div> 
    <h4>{elem.author}</h4>
      </a>
    </div>;
  })
}
  return (
    <div className='parent'>
      <h1>Gallery</h1>
      <div className='images_div'>
        {printUserData}
      </div>
      <div className='button'>
        <button onClick={()=>{
           if(index>1){setIndex(index-1)}
          console.log("prev button");
          setUserData([])
        }}>Previous</button>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
          console.log("next button clicked")
        }}>Next</button>
      </div>
    </div>
  )
}

export default App