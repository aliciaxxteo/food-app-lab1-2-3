import React from "react";

function SortBySelect(props) {
    return (
        <div>
            <label>Sort By </label>
            <select className="btn-primary" onChange={props.onChange}>
                <option value="name">
                    Restaurant Name
                </option>
                <option value="price">
                    Average Price
                </option>
            </select>
        </div>

    )
}

export default SortBySelect