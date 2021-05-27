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
import * as React from 'react';
import "./style.scss";
var Ant = /** @class */ (function (_super) {
    __extends(Ant, _super);
    function Ant(props) {
        var _this = _super.call(this, props) || this;
        /**2.
         * 使用时，我们需要显式的把状态定义为只读，并声明为State类型。
         * 注：为什么声明为只读呢？
         * 这是因为react不允许直接更新state及其属性。
         * 例如下面的做法是错误的
         * this.state.count = 2;
         * this.state = {count:2}
         * 通过使用Readonly显示的把类型type State的属性都标记为只读属性，以及声明state为只读对象
         *  readonly state: State = initialState
         */
        //返回事件
        _this.fnGoback = function () {
            _this.props.history.goBack();
        };
        //点击事件
        _this.handleIncrement = function () {
            _this.setState({ age: _this.state.age + 1 });
        };
        _this.state = {
            age: 0,
            name: "xiaofang"
        };
        return _this;
    }
    Ant.prototype.render = function () {
        var age = this.state.age;
        return React.createElement("div", { className: "ant-wrap" },
            React.createElement("div", { className: "nav" },
                React.createElement("span", { onClick: this.fnGoback }, "\u8FD4\u56DE"),
                React.createElement("span", null, "\u9996\u9875"),
                React.createElement("span", null)),
            React.createElement("h1", null,
                age,
                " years old"),
            React.createElement("div", { onClick: this.handleIncrement }, "click me"));
    };
    return Ant;
}(React.Component));
/*
 *将组件更新函数独立成组件类外部的纯函数。这是一种常用的模式
 *const incrementClicksCount = (prevState: State) => ({ Count: prevState.age + 1 })
 */
export default Ant;
//# sourceMappingURL=index.js.map