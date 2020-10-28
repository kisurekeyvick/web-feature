import React from 'react';
import { Button, Tag, Card } from 'antd';

interface IState {
  [key: string]: any
}

interface IProps {
  countAdd: Function
  parentCount: number
  [key: string]: any
}

export class ChildContainer extends React.PureComponent<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Card title="子级卡片" style={{ width: 300 }}>
        <Tag color="magenta">{this.props.parentCount}</Tag>
        <Button type="primary" onClick={() => this.props.countAdd()}>添加</Button>
      </Card>
    )
  }
}
