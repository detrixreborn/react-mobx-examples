import React from 'react';
import PropTypes from 'prop-types';
import {routeMap} from "../../constants/routeNames";

function LobbyMenuItem({name}) {
    console.log('some: ', routeMap);
    return (
        <li>
            <a href={routeMap[name]}>{name}</a>
        </li>
    )
}

LobbyMenuItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default LobbyMenuItem;
