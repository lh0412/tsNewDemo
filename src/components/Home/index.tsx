import React from "react";

import "./style.scss";

/**
 * ts中的&表示交集，两个类型都拥有的类型
 * 在 typescript 中, 我们定义类型有两种方式： 接口(interface) 和类型别名(type alias)
 */
// type HomeProps = Props & RouteComponentProps;

interface State {
  test: number
};
class Home extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      test: 0
    }
  }
  //定义方法 
  Increase = () => {
    this.setState({
      test: this.state.test + 1
    });
  }
  render() {
    let { test } = this.state;
    return <div>
      <div className="nav">
        <span>返回</span>
        <span>首页</span>
        <span></span>
      </div>
      <p>{test} times</p>
      <div onClick={this.Increase} className="btn">click me to Increase</div>
      <div onClick={this.FntoAnt} className="btn">click me to Ant.tsx</div>
    </div>
  }
  private FntoAnt = () => {
    this.props.history.push('/ant');
  }
}
export default (Home);