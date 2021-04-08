import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Header from "../components/common/Header";
import ArtistPage from "../pages/ArtistPage";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/game" component={MainPage} />
          <Route exact path="/artist" component={ArtistPage} />
          <Route exact path="/studio" component={MainPage} />
          <Route exact path="/store" component={MainPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
