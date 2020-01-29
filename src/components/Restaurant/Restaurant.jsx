import React from "react";


function Restaurant(props) {
    return (
        <div className="card my-3" style={{ width: '20rem' }} key={props.details._id}>
            <img
                src={props.details.imageUrl}
                className="card-img-top img-fluid"
                alt="restaurant"
            />
            <div className="card-body">
                <h5 className="card-title">{props.details.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.details.cuisine.name}
                </h6>
                <p className="card-text">
                    {props.details.openingTime} - {props.details.closingTime}
                </p>
                <p className="card-text">
                    Avg Price: ${props.details.averagePrice}
                </p>
            </div>

            <div className="card-footer text-muted">
                <button className="btn btn-primary btn-sm">Order</button>
            </div>
        </div>
    )
}

export default Restaurant;