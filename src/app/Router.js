import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SearchResultPage from "../components/main/SearchResults/";

const MainRouter = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={SearchResultPage}/>
    </Switch>
  )
};

export default (MainRouter);
