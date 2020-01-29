import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "../SortBySelect/SortBySelect";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: getRestaurants(),
            cuisines: getCuisines(),
            selectedCuisine: null,
            selectedSort: "name",

        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleFilter(name) {
        this.setState({
            selectedCuisine: name
        })
    }

    handleSort(event) {
        console.log("[handlesort] click", event.target.value)
        this.setState({
            selectedSort: event.target.value
        })
    }


    render() {
        const filteredRestaurants = this.state.restaurants.filter(restaurant =>
            this.state.selectedCuisine === null || restaurant.cuisine.name === this.state.selectedCuisine)

        filteredRestaurants.sort(this.state.selectedSort === 'price' ? pricingSort : alphabeticalSort)


        return (
            <div className="container">
                <div className="row">
                    <FilterBar cuisines={this.state.cuisines} onClick={this.handleFilter}></FilterBar>
                    <SortBySelect onChange={this.handleSort}></SortBySelect>
                </div>
                <div className="row">
                    {filteredRestaurants.map(restaurant => (
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex" key={restaurant._id}>
                            <Restaurant details={restaurant} />
                        </div>
                    ))}
                </div>
            </div>
        )

    }
}

function alphabeticalSort(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}

function pricingSort(a, b) {
    return a.averagePrice - b.averagePrice;
}

export default HomePage;