import React from 'react';
import ParentContainer from './parent'

interface IState {
  [key: string]: any
}

interface IProps {
  [key: string]: any
}

export default class StatePropsContainer extends React.Component<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {}
  }

  render() {
    return <div>
      <ParentContainer />
    </div>
  }
}