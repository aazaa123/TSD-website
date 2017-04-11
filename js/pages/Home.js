import React from "react";
import { Link } from "react-router";

import TeamSelect from "./../components/TeamSelect"
import TeamDota from "./TeamDota"

export default class Home extends React.Component {

    render() {
        return (

            <div>
                <TeamDota />
            </div>

        );
    }
}
