import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Roompage from "./RoomPage";
import Login from "./Login";
import Signup from "./Signup";

import { initialState } from "./Reducer";
import { reducer } from "./Reducer";
import { DataLayer } from "./Datalayer";
import Mybooking from "./Mybooking";

function App() {
  return (
    // BEM
    <div className="app">
      <DataLayer initialstate={initialState} reducer={reducer}>
        <Router>
          <Header />

          {/* */}

          <Switch>
            <Route path="/room/:id">
              <Roompage />
            </Route>
            <Route path="/myroom">
              <Mybooking />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </Router>
      </DataLayer>
    </div>
  );
}

export default App;
