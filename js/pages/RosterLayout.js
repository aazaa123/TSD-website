import React from "react";

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import TeamSelect from "./../components/TeamSelect";
import TeamDota from "./../components/TeamDota";

export default class RosterLayout extends React.Component {


    render() {

        return (
            <div>
                <TeamSelect />

                {this.props.children}

                <Footer />
            </div>
        );
    }
}
