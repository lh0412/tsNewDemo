import React from "react";
import "./style.scss";
/**
 * ts中的&表示交集，两个类型都拥有的类型
 * 在 typescript 中, 我们定义类型有两种方式： 接口(interface) 和类型别名(type alias)
 */
interface State {
    test: number;
}
declare class Home extends React.Component<any, State> {
    constructor(props: any);
    Increase: () => void;
    render(): any;
    private FntoAnt;
}
declare const _default: typeof Home;
export default _default;
