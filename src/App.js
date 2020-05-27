import React, { Component } from "react";
import NavbarComponent from "./component/navbarcomponent";
import Navbarjumbotroncomponent from "./component/navbarjumbotroncomponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/homecontainer"
import Createuser from "./containers/createuser";
import Viewuser from "./containers/viewuser";
import Edituser from "./containers/edituser";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <Navbarjumbotroncomponent />
        <BrowserRouter>
       <Route path= "/" exact component={HomeContainer}/>
          <Route path="/create" exact component={Createuser}/>
          <Route path="/view/:id" exact component={Viewuser}/>
          <Route path="/edit/:id" exact component={Edituser}/>
        </BrowserRouter>
      </div>
    );
  }
}
