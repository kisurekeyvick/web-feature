import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { BackTop } from 'antd';
import Loading from '@/components/loading';
import routes from '@/routes/route-kisure';

const kisure: React.FC = () => {
    return (
        <div className='kisure-layout'>
            <Suspense fallback={<Loading />}>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </Suspense>
            <BackTop />
        </div>
    )
};

export default kisure;
