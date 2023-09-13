import React, { Component } from "react";
import "./Styles/Filter.css";
import User from "./User-login";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
    // User clicks the logo will navigate to homepage.
    handleGoHome = () => {
        this.props.history.push('/');
    }
    render() {
        const { value, cartQty } = this.props;
        return (
            <div>
                <nav>
                    <div className="container">
                        <div className="logo" onClick={this.handleGoHome} style={{ display: 'inline-block' }}>
                            <div>e!</div>
                        </div>

                        <div style={{ display: 'inline-block', verticalAlign: 'top', float: 'right' }}>
                            <User value={value} cartQty={cartQty} />
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar);