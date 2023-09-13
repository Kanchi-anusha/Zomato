import React, { Component } from 'react';
import Wallpaper from './Wallpaper';
import Quicksearch from './Quicksearch';
import axios from 'axios';


// declaring Homepage component.
class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            locations : [],
            mealtypes : [],
            restaurants : []
        }
    }

    
    componentDidMount = async() => {
        sessionStorage.clear();

        // making api call to fetching the locations data.
        let location = await axios({
            method : 'GET',
            url : 'http://localhost:8900/locations',
            headers : {'content-type' : 'application/json'}
        });
        // update locations variable in state.
        this.setState({locations : location.data});

        // making another api call to fetching mealtypes data.
        let mealtype = await axios({
            method : 'GET',
            url : 'http://localhost:8900/mealtypes',
            headers: {'content-type':'application/json'}
        });
        //  update mealtypes variable in state.
        this.setState({mealtypes : mealtype.data});

        let restaurants = await axios({
            method: 'GET',
            url: 'http://localhost:8900/restaurants',
            headers: {'content-type':'application/json'}
        });
        this.setState({restaurants: restaurants.data});
    }

    render() { 
        const {locations, mealtypes, restaurants} = this.state;
        return ( <div>

            {/* Rendering the wallpaper and quicksearch component  */}
            <Wallpaper ddlocations={locations} />
            <Quicksearch quicksearch={mealtypes} />
           
        </div> );
    }
}
 
// exporting to router component.
export default Homepage;