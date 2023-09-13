import React, { Component } from "react";
import axios from 'axios';
import "./Styles/Home.css";
import User from "./User-login";
import { withRouter } from 'react-router-dom';

// Declare the wallpaper component.
class Wallpaper extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: [],
      restaurants: [],
      suggestions: [],
      text: ''
    }
  }

  componentDidMount = async () => {
    const result = await axios({
      method: 'GET',
      url: 'http://localhost:8900/restaurants',
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ restaurants: result.data });
  }
  // get the value from locations dropdown menu.
  handleLocationChange = async (event) => {
    const location_id = event.target.value;
    // save into session storage.
    sessionStorage.setItem("location_id", location_id);
    const result = await axios({
      method: 'GET',
      url: `http://localhost:8900/locations/${location_id}`,
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ restaurantList: result.data });
  };

  handleSearch = (event) => {
    const { restaurantList, restaurants } = this.state;
    const text = event.target.value;
    this.setState({ text });
    if (restaurantList.length === 0) {
      const result = text.length > 0 ? restaurants.filter(item => item.name.toLowerCase().includes(text.toLowerCase())) : [];
      this.setState({ suggestions: result });
    } else {
      const filteredRestaurants = text.length > 0 ? restaurantList.filter(item => item.name.toLowerCase().includes(text.toLowerCase())) : [];
      this.setState({ suggestions: filteredRestaurants });
    }

  }

  handleNavigate = (id) => {
    this.props.history.push(`/details?restaurant=${id}`);
  }

  render() {
    // Destructure the locations value props variable which is coming from homepage component.
    const { ddlocations } = this.props;
    const { suggestions, text } = this.state;
    return (
      <div>
        {/* This is for background-image */}
        <div className="background">
          <div className="container">
            <div style={{ float: "right" }}>
              <User />
            </div>
          </div>
          {/* This is for logo */}
          <div className="homelogo text-center">
            <strong>e!</strong>
          </div>
          {/* This is for heading */}
          <header>Discover the best food & drinks in Delhi NCR</header>

          <div
            className="dropdown-block"
          >
            {/* This is for dropdown menu */}
            <div style={{ display: "inline-block" }}>
              <select
                className="home-dropdown"
                onChange={this.handleLocationChange}
              >
                <option className="Bengaluru">Please Select a location</option>
                {ddlocations.map((item) => {
                  return (
                    <option value={item.location_id} className="Bengaluru">
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* This is for search bar and search icon */}
            <div style={{ display: "inline-block", verticalAlign: 'top' }}>
              <span className="glyphicon glyphicon-search search"></span>
              <input
                type="text"
                placeholder="Search for restuarants... e.x Gulab"
                className="input-box"
                onChange={this.handleSearch}
              /><div>
                {suggestions.length > 0 ? suggestions.map((item) => {
                  return <div className="search-result-restaurant-block" onClick={() => this.handleNavigate(item._id)}>
                    <div className="search-result-image-block">
                      <img src={item.thumb} height="43" width="43" style={{ borderRadius: '50%' }}></img>
                    </div>
                    <div className="search-result-restaurant-details">
                      <div className="search-result-restaurant-name"> {item.name}</div>
                      <div className="search-result-restaurant-address">{item.address}</div>
                    </div>
                    <div style={{ border: '1px solid #e9e9f2' }}></div>
                  </div>
                }) : text.length > 0 ? <div className="no-result-block">
                  <div className="no-result-message">No results found</div>
                </div> : null}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

{
  /* exporting this component to homepage component */
}
export default withRouter(Wallpaper);
