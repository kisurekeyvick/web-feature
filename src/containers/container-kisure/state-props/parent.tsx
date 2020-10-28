import React from 'react';
import { ChildContainer } from './child';
import { Card,Tag } from 'antd';

interface IState {
  count: number
  [key: string]: any
}

interface IProps {
  [key: string]: any
}

export default class ParentContainer extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {
      count: 1
    }
  }

  private countAdd = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    const childProps = {
      parentCount: this.state.count,
      countAdd: this.countAdd
    }

    return (
      <div>
        <Card title="父级卡片" style={{ width: 600 }}>
          <p>父级的count属性值：<Tag color="magenta">{this.state.count}</Tag></p>

          <ChildContainer {...childProps}/>
        </Card>
      </div>
    )
  }
}

