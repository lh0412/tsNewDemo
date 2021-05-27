var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 路由
 */
import React, { Suspense } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import "../styles/index.scss";
import Ant from './Ant/index';
import HomeComponent from './Home/index';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Suspense, { fallback: React.createElement("div", { className: "com-loading" }, "\u6B63\u5728\u52A0\u8F7D...") },
                React.createElement(Router, null,
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/", exact: true, component: HomeComponent }),
                        React.createElement(Route, { path: "/ant", component: Ant })))));
    };
    return App;
}(React.PureComponent));
export default App;
//# sourceMappingURL=index.js.map