import React from "react";
import { Link } from "react-router";

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default class Layout extends React.Component {


    render() {

        return (
            <div>
                <Navbar />

                {this.props.children}

                <Footer />
            </div>
        );
    }
}
