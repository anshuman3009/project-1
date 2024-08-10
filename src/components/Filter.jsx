const Filter=(props)=>
{
    let filterdata=props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;

    return (
        <div>
            <h1>HELO</h1>
            {
            filterdata.map( (data) =>
            (
                <button>{data.title}
                </button>
            ))}
        </div>
    )
}

export default Filter;