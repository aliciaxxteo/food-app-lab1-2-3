import React from "react";

function FilterBar(props) {
    console.log(props)
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={() => props.onClick(null)}>All</button>
            {props.cuisines.map(cuisine => {
                return <button type="button" className="btn btn-primary" key={cuisine._id} onClick={() => props.onClick(cuisine.name)}>{cuisine.name}</button>
            })}
        </div>
    )
}

export default FilterBar