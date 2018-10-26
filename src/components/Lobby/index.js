import React from 'react'
import { routeNames } from '../../constants/routeNames';
import LobbyMenuItem from './LobbyMenuItem';

function Lobby() {
    return (
        <ul>
            {routeNames.map((item) => {
               return <LobbyMenuItem key={item} name={item}/>
            })}
        </ul>
    );
}

export default Lobby;
