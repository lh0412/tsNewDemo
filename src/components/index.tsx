/**
 * 路由
 */
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, HashRouter as Router } from 'react-router-dom';
import "../styles/index.scss";
import Ant from './Ant/index';
import HomeComponent from './Home/index';

class App extends React.PureComponent<any, any> {
  render() {
    return <div>
      <Suspense fallback={<div className="com-loading">正在加载...</div>}>
        <Router>
          <Switch>
            <Route path={`/`} exact component={HomeComponent} />
            <Route path={`/ant`} component={Ant} />
          </Switch>
        </Router>
      </Suspense>
    </div >
  }
}
export default App;
