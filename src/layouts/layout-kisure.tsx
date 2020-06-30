import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { BackTop } from 'antd';

const kisure: React.FC = () => {
    return (
        <div className='kisure-layout'>
            hello kisure!
            <BackTop />
        </div>
    )
};

export default kisure;
