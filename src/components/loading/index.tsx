import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.scss';

const LoadingComopnent:React.FC = () => {
    return (
        <Spin className='loading-component-spin' indicator={<LoadingOutlined style={{ fontSize: 24 }} spin/>} />
    );
};

export default LoadingComopnent;
