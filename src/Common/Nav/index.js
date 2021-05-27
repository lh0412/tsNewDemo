import React from "react";
/**
 * 导航栏组件
 */
export var Nav = function (title, right) {
    return React.createElement("div", { className: "nav" },
        React.createElement("span", null, "\u8FD4\u56DE"),
        React.createElement("span", null, title),
        React.createElement("span", null, right));
};
//# sourceMappingURL=index.js.map