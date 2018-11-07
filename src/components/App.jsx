import React from "react";
import Nav from './Nav';
import ProduceList from './ProduceList';
import Welcome from './Welcome';
import MarketSchedule from './MarketSchedule'
import { Switch, Route } from 'react-router-dom';

function App(){
  const mainStyles = {
    marginTop: "82px"
  }
  return (
    <div>
      <Nav/>
      <div style={mainStyles}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path ='/schedule' component={MarketSchedule} />
        <Route path='/produce' component={ProduceList} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
