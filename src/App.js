import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Fav from "./Components/Fav";
import Home from "./Components/Home";
import Productdetails from "./Components/Productdetails";
import Nav from "./Components/Nav/Nav";
import Product from "./Components/Product";
import Categoryproducts from "./Components/Categoryproducts";

function App() {
  return (
    <>
      <Router>
        <Nav />
          <Route path="/" exact component={Home}/>
          <Route path="/Product"  exact component={Product}/>
          <Route path="/Productdetails/:id"  exact component={Productdetails}/>
          <Route path="/Categoryproducts/:category"  exact component={Categoryproducts}/>
          <Route path="/fav"  exact component={Fav}/>
        
      </Router>
    </>
  );
}

export default App;
