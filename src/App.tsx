import React, { Component } from 'react';
// import styled from 'styled-components';
import { Home } from './routes/Home';
import { Show } from './routes/Show';

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export interface State {
  query: string,
  showsData: showData[],
}

export interface Props {
}

export interface showData {
  id: number,
  name: string,

}
  
class App extends React.Component<Props, State> {

  state: State = {
    query: "",
    showsData: [],
  }

  setQuery = (query: string) => {
    this.setState({ query: query });
    fetch("http://api.tvmaze.com/search/shows?q=" + query)
      .then(res => res.json())
      .then(res => this.setState(
        {
          showsData: res.map((show: any) => {
            return {
              score: show.score,
              id: show.show.id,
              name: show.show.name,
              image: show.show.image,
            }
          })
        }
      ))
  }


  render() {

    return (
      <Router>
        <Switch>
          <Route path="/home" render={({ history }: any) =>
            <Home query={this.state.query} setQuery={this.setQuery} showsData={this.state.showsData} history={history}></Home>
          }>
          </Route>
          <Route path="/shows/:id" render={({ match }: any) =>
            <Show showsData={this.state.showsData} match={match}></Show>
          }>
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Router >
    );
  }
}

export default App;
