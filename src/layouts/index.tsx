import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card } from 'antd';
import { User, IUserInfo } from './index.config';

/** pic */
import defaultUser from '@/assets/img/common/yurisa.jpg';
import './index.scss';

const { Meta } = Card;

const BaseLayout: React.FC = () => {
    const [currentLayout, setLayout] = useState('');

    const handleClickLayout = (person: IUserInfo) => {
        setLayout(person.layoutName);
    };

    useEffect(() => {
        const pathName = window.location.pathname;
        const person: IUserInfo | undefined = User.find((person: IUserInfo) => person.redirectToUrl === pathName);
        person && handleClickLayout(person);
    }, [currentLayout]);

    return (
        <div className='app-layout'>
            {
                /** 默认没有状态 展示选择的card */
                currentLayout === '' ? <div className="cards-container">
                    {
                        User.map((person: IUserInfo) => {
                            return <Link key={person.key} to={person.redirectToUrl}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="person" src={ person.pic || defaultUser} />}
                                            onClick={() => handleClickLayout(person)}>
                                            <Meta title="介绍" description={ person.desc || '这个人很懒什么都没留下' } />
                                        </Card>
                                    </Link>
                        })
                    }
                </div> : User.filter((person: IUserInfo) => person.layoutName === currentLayout).map((person: IUserInfo) => {
                    const Container: any = person.layout;
                    return <div key={person.key}><Container/></div>;
                })
            }
        </div>
    );
};

export default withRouter(BaseLayout);