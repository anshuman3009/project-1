import { useEffect, useState } from 'react'

// import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apirul,filterData } from './data';
import Spinner from './components/Spinner';
function App() {
  const [courses,setcourse]=useState({});
  const [loading,setloading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title);
  async function fetchdata()
  {
    setloading(true);
    try
    {
      let response=await fetch(apirul);
      let output=await response.json();
      setcourse(output.data);
      // console.log(courses);
    }
    catch(error)
    {
      console.log("ERROR")
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchdata();
  },[]);
  return (
  <>
      <div className='min-h-screen min-w-full flex flex-col bg-bgDark2'>
        <div>
          <NavBar/>
        </div>
        <div className='bg-bgDark2'>
          <Filter 
          filterData={filterData} 
          category={category}
          setcategory={setcategory}
          />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
           {  loading? <Spinner/>: <Cards courses={courses} category={category}></Cards>}
        </div>
    
      </div>
    
  </>
  )
}

export default App
