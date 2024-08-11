import { set } from "lodash";

const Filter=(props)=>
{
    let filterdata=props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;

    function handleclick(category)
    {
        setcategory(category);
    }

    return (
        <div>
            {
            filterdata.map( (data) =>
            (
                <button 
                onClick={()=>handleclick(data.title)}>
                {data.title}
                </button>
            ))}
        </div>
    )
}

export default Filter;