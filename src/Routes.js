import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginYeji from "pages/yejikang/Login/Login";
import MainYeji from "pages/yejikang/Main/Main";
import LoginDongho from "pages/donghokim/Login/Login";
import MainDongho from "pages/donghokim/Main/Main";
import LoginDaseul from "pages/daseulsong/Login/Login";
import MainDaseul from "pages/daseulsong/Main/Main";
import LoginHwichan from "pages/hwichanyu/Login/Login";
import MainHwichan from "pages/hwichanyu/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginYeji} />
          <Route exact path="/main-yeji" component={MainYeji} />
          <Route exact path="/login-dongho" component={LoginDongho} />
          <Route exact path="/main-dongho" component={MainDongho} />
          <Route exact path="/login-daseul" component={LoginDaseul} />
          <Route exact path="/main-daseul" component={MainDaseul} />
          <Route exact path="/login-hwichan" component={LoginHwichan} />
          <Route exact path="/main-hwichan" component={MainHwichan} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
