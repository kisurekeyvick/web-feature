import React from 'react';
import ChildContainer from './child'
import { Card, Tag, Button } from 'antd';

interface IState {
  count: number
  [key: string]: any
}

interface IProps {
  [key: string]: any
}

export default class LifeCycleContainer extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {
      count: 1,
      childVal: 'hello'
    }

    console.log('父级组件开始创建')
    console.log('父级组件----constructor')
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    console.log('父级组件------getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('父级组件加载完毕----componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('父级组件触发----shouldComponentUpdate')

    return true
  }

  componentWillUnmount() {
    console.log('父级组件开始卸载----componentWillUnmount')
  }

  private countAdd = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    console.log('父级组件开始render----render')
    const { count, childVal } = this.state
    const childProps = {
      parentCount: count,
      childVal
    }

    return <div>
      <Card title="父级卡片" style={{ width: 600 }}>
        <p>父级的count属性值：<Tag color="magenta">{this.state.count}</Tag></p>
        <Button type="primary" onClick={() => this.countAdd()}>添加</Button>
        <ChildContainer {...childProps}/>
      </Card>
    </div>
  }
}