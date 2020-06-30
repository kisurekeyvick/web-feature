import React from 'react';
import { hot } from 'react-hot-loader';
import ErrorBoundary from '@/components/error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import './App.scss';
import './theme.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Layout from '@/layouts';

Spin.setDefaultIndicator(<LoadingOutlined  style={{ fontSize: 24 }} spin />)

function App() {
    return (
        <ErrorBoundary>
            <Provider store= {store}>
                <Router>
                    <Layout />
                </Router>
            </Provider>
        </ErrorBoundary>
  );
}

export default hot(module)(App);
