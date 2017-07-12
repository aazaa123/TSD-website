import React from "react";

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default class HomeLayout extends React.Component {


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
