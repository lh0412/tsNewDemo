import * as React from 'react';

//初始状态
const initialState = { Count: 0 };
//使用ts来对他进行类型判断，并且把属性都标记为只读
type State = Readonly<typeof initialState>;
/**
 * Component参数
 *  1.组件属性类型（由于我们的组件目前还没有任何属性，故我们这里设置为object）
 *  2.组件状态类型（我们这里使用前面定义的State类型）
 */
export class Ant extends React.Component<object, State>{
  /**
   * 使用时，我们需要显式的把状态定义为只读，并声明为State类型。
   * 注：为什么声明为只读呢？
   * 这是因为react不允许直接更新state及其属性。
   * 例如下面的做法是错误的
   * this.state.count = 2;
   * this.state = {count:2}
   * 通过使用Readonly显示的把类型type State的属性都标记为只读属性，以及声明state为只读对象
   */
  readonly state: State = initialState
  render() {
    const { Count } = this.state;
    return <div>
      <h1>{Count}times</h1>
      <div onClick={this.handleIncrement}>click me</div>
    </div>
  }
  //点击事件
  private handleIncrement = () => this.setState({ Count: this.state.Count + 1 })
}

//将组件更新函数独立成组件类外部的纯函数。这是一种常用的模式
const incrementClicksCount = (prevState: State) => ({ Count: prevState.Count + 1 })