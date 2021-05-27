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
import React from "react";
import "./style.scss";
;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        //定义方法 
        _this.Increase = function () {
            _this.setState({
                test: _this.state.test + 1
            });
        };
        _this.FntoAnt = function () {
            _this.props.history.push('/ant');
        };
        _this.state = {
            test: 0
        };
        return _this;
    }
    Home.prototype.render = function () {
        var test = this.state.test;
        return React.createElement("div", null,
            React.createElement("div", { className: "nav" },
                React.createElement("span", null, "\u8FD4\u56DE"),
                React.createElement("span", null, "\u9996\u9875"),
                React.createElement("span", null)),
            React.createElement("p", null,
                test,
                " times"),
            React.createElement("div", { onClick: this.Increase, className: "btn" }, "click me to Increase"),
            React.createElement("div", { onClick: this.FntoAnt, className: "btn" }, "click me to Ant.tsx"));
    };
    return Home;
}(React.Component));
export default (Home);
//# sourceMappingURL=index.js.map