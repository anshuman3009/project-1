import React from "react";
import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import 'react-toastify/dist/ReactToastify.css';



import { toast } from "react-toastify";

const Card=(props)=>
{

    let likedcourse=props.likedcourse;
    let setlikedcourse=props.setlikedcourse;
    let course=props.course;
    

    const [liked,setlike]=useState(false);
    function handlelike ()
    {
        if(likedcourse.includes(course.id))
        {
            setlikedcourse((prev)=> prev.filter((cid)=>(cid!=course.id)));
            toast.warning('DISLIKED THE COURSE');
        }
        else
        {
            if(likedcourse.length==0)
                setlikedcourse([course.id])
            else
            {
                setlikedcourse((prev)=>[...prev,course.id]);
            }
            toast.success('COURSE LIKED');
        }
    }
    return (
        <div>
            <div>
                <img src={course.image.url}></img>
            </div>
            <p>{course.title}</p>
            <p>{course.description}</p>
            <button onClick={handlelike}>
                {
                     likedcourse.includes(course.id)?<FcLike/>:<FcLikePlaceholder/>
                }
            </button>
            
        </div>
    )
}

export default Card;