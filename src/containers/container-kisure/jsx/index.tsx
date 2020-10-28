import React from 'react';

interface IState {
  [key: string]: any
}

interface IProps {
  [key: string]: any
}

export default class JsxContainer extends React.PureComponent<IProps, IState> {
  constructor(public props: IProps) {
    super(props);

    this.state = {}

    const dom = React.createElement('div', { className: 'kisure', onClick: () => {} }, [
      React.createElement('span', { key: '1'/*...*/ }),
        React.createElement('span', { key: '2'/*...*/ })
    ])

    console.log('dom', dom)
  }

  render() {
    return (
      <div>
        <p>jsxcontainer</p>
      </div>
    )
  }
}