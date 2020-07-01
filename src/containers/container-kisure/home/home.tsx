import React from 'react';
import './home.scss';

interface IProps {
    [key: string]: any;
}

interface IState {
    [key: string]: any;
}

export default class HomeContainer extends React.Component<IProps, IState> {
    constructor(public props: IProps) {
        super(props);
    }

    render() {
        return <p>
            kisure home page
        </p>
    }
}
