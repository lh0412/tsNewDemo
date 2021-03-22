import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./style.scss";


interface Props { };

/**
 * ts中的&表示交集，两个类型都拥有的类型
 * 在 typescript 中, 我们定义类型有两种方式： 接口(interface) 和类型别名(type alias)
 */
type HomeProps = Props & RouteComponentProps;

interface State { };
class Home extends React.Component<HomeProps, State> {
  constructor(props: HomeProps) {
    super(props);
  }

  //public 定义状态
  public state = {
    test: 0
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
      <p>{test}times</p>
      <div onClick={this.Increase}>click me to Increase</div>
      <div onClick={this.FntoAnt}>click me to Ant.tsx</div>
    </div>
  }
  private FntoAnt = () => {
    this.props.history.push('/ant');
  }
}

export const HomeComponent = withRouter(Home);