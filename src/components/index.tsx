/**
 * 路由
 */
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, HashRouter as Router } from 'react-router-dom';
import { Ant } from './Ant';
import { HomeComponent } from './Home/index';
// const Mian = lazy(() => import("./Ant"));

export interface Props { }
export default class App extends React.PureComponent<Props, any> {
  render() {
    return <div>
      <Suspense fallback={<div className="com-loading">正在加载...</div>}>
        <Router>
          <Switch>
            <Route path={`/`} exact component={() => <HomeComponent />} />
            <Route path={`/ant`} component={() => <Ant />} />
          </Switch>
        </Router>
      </Suspense>
    </div >
  }
}
