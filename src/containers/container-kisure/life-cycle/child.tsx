import React from 'react';
import { Card, Tag, Button } from 'antd';

interface IState {
  childVal: string
  [key: string]: any
}

interface IProps {
  parentCount: number
  childVal?: string
  [key: string]: any
}

export default class ChildContainer extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {
      childVal: ''
    }

    console.log('子级组件开始创建')
    console.log('子级组件----constructor')
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    console.log('子级组件------getDerivedStateFromProps')
    if (nextProps.parentCount > 4) {
      return {
        childVal: nextProps.childVal
      }
    }

    return null
  }

  componentDidMount() {
    console.log('子级组件加载完毕----componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('子级组件触发----shouldComponentUpdate')

    return true
  }

  componentWillUnmount() {
    console.log('子级组件开始卸载----componentWillUnmount')
  }

  render() {
    console.log('子级组件开始render----render')

    return <div>
      <Card title="子级卡片" style={{ width: 300 }}>
        <Tag color="magenta">{this.props.parentCount}</Tag>
        <p>{this.state.childVal}</p>
      </Card>
    </div>
  }
}