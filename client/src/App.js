import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//PAGES
import DashboardPage from "./views/Dashboard/Dashboard";
import InventoryPage from "./views/Inventory/Inventory";
import DesignsPage from "./views/Designs/Designs";
import BuildsPage from "./views/Builds/Builds";
import ProjectPage from "./views/Projects/Projects";
import SettingsPage from "./views/Settings/Settings";
import FourOhFour from "./views/NotFound/404";
import AddItemPage from "./views/Forms/AddItem/AddItem";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/designs" component={DesignsPage} />
          <Route exact path="/builds" component={BuildsPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/additem" component={AddItemPage} />
          {/* If user routes to anything other than the routes above, it will route to 404 page */}
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
