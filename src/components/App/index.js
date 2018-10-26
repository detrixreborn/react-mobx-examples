import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DevTool from 'mobx-react-devtools';
import Browse from '../../components/Browse';
import Lobby from '../../components/Lobby';
import Callback from '../../components/Callback';
import Dashboard from '../../components/Dashboard';
import Chart from '../../components/Chart';
import Header from '../../components/Header';
import Player from '../../components/Player';
import Playlist from '../../components/Playlist';
import {browse, dashboard, callback, lobby , chart} from '../../constants/pathnames';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={browse} component={Browse} />
          <Route exact path={dashboard} component={Dashboard} />
          <Route exact path={callback} component={Callback} />
          <Route exact path={chart} component={Chart}/>
          <Route exact path={lobby} component={Lobby}/>
          <Redirect to={lobby} />
        </Switch>
        <Playlist />
        <Player />
        <DevTool/>
      </div>
    );
  }

}
