import { useEffect, useState } from 'react'

import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import { apirul,filterData } from './data';
function App() {
  const [courses,setcourse]=useState(null);
  const [category,setcategory]=useState(filterData[0].title);
  async function fetchdata()
  {
    try
    {
      let response=await fetch(apirul);
      let output=await response.json();
      setcourse(output);
    }
    catch(error)
    {
      console.log("ERROR")
    }
  }

  useEffect(()=>{
    fetchdata();
  },[]);
  return (
  <>
    <div>
      <div>
        {/* <h1>HELLO</h1> */}
        <NavBar/>
        <Filter 
        filterData={filterData} 
        category={category}
        setcategory={setcategory}
        />
      </div>
    </div>
  </>
  )
  
}

export default App
