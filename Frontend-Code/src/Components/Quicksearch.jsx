import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Styles/Home.css";

// Declaring the quick search component.
class QuickSerch extends Component {

  // handling the function when clicks on mealtype or locations dropdown or both.
  handleClick = (id, name) => {
    // get the location value from session storage.
    const location_id = sessionStorage.getItem('location_id');
    // if user clicks dropdown and mealtype send both value in query string.
    if (location_id) {
      this.props.history.push(`/filter?mealtype=${id}&mealtype_name=${name}&location=${location_id}`);
      // if user only clicks on mealtype then send mealtype value in query string.
    } else {
      this.props.history.push(`/filter?mealtype=${id}&mealtype_name=${name}`);
    }

  }
  render() {
    // Destructuring the quick search value from props which is coming from homepage component.
    const { quicksearch } = this.props;
    return (
      <div>
        <div className="container">
          <a href="https://pages.razorpay.com/zfi-oxygen" target="blank">
            <img src="https://b.zmtcdn.com/data/o2_assets/cf8a75f38e24a66e674c0c9ff962bc3e1619590647.png?output-format=webp" width="100%" height="100%" style={{marginTop: '50px', borderRadius: '1.2rem'}}/>
          </a>
          <div className="Quick">Quick Searches</div>
          <div className="discover">Discover restaurants by type of meal</div>

          <div className="row" style={{ marginTop: "30px" }}>
            {/* Iterate the mealtypes data for displaying to user with proper styling */}
            {quicksearch.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" onClick={() => this.handleClick(item.mealtype_id, item.name)}>
                  <div className="mealtype-image">
                    <img
                      className="home-img"
                      src={item.image}
                      alt="breakfast"
                      height="248"
                      width="100%"
                    />
                    <div className="mealtype-heading">{item.name}</div>
                    <div className="mealtype-content">{item.content}</div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

// exporting this component to homepage component.
export default withRouter(QuickSerch);
