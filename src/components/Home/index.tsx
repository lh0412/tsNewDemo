import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";


interface Props { };

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