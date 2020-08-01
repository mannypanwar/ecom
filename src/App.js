import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signInAndSignUpPage from "./pages/signIn-and-signUp/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
