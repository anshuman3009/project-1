import React, { useEffect, useState } from "react";
import Card from './Card';

const Cards=(props)=>
{
    let courses=props.courses;
    let category=props.category;

    const [likedcourse,setlikedcourse]=useState([]);
    
    function getCourses()
    {
        if(category==='All')
        {
            console.log("OBJECT VIEW",courses);
            console.log(category);
            let allcourses=[];
            Object.values(courses).forEach(array=>
            {
                array.forEach(coursesData =>
                {
                    allcourses.push(coursesData);
                })
            })
            console.log("ARRAY VIEW",allcourses);
            return allcourses;
        }
        else
        {
            console.log(courses[category]);
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course)=>
            (
                <Card 
                course={course}
                likedcourse={likedcourse}
                setlikedcourse={setlikedcourse}
                ></Card>
            ))
        }
        </div>
    )

}

export default Cards;