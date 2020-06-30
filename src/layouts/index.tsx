import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import KISURELAYOUT from './layout-kisure';
import { Card } from 'antd';
import { User, IUserInfo } from './index.config';

/** pic */
import defaultUser from '@/assets/img/common/yurisa.jpg';
import './index.scss';

const { Meta } = Card;

const BaseLayout: React.FC = () => {
    const [currentLayout, setLayout] = useState('');
    const handleClickLayout = (layoutName: string) => {
        setLayout(layoutName);
    };

    return (
        <div className='app-layout'>
            {
                /** 默认没有状态 展示选择的card */
                currentLayout === '' && <div className="cards-container">
                    {
                        User.map((person: IUserInfo) => {
                            return <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="person" src={ person.pic || defaultUser} />}
                                    onClick={() => handleClickLayout('kisure')}>
                                    <Meta title="介绍" description={ person.desc || '这个人很懒什么都没留下' } />
                                </Card>
                        })
                    }
                </div>
            }
            {
                /** kisure的个人博客 */
                currentLayout === 'kisure' && <KISURELAYOUT />
            }
            {
                /** 其他的个人博客 */
            }
        </div>
    );
};

export default withRouter(BaseLayout);