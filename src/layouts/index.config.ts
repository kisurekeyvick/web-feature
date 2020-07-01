import KisurePic from '@/assets/img/kisure/kisure.jpg';
import KISURELAYOUT from '@/layouts/layout-kisure';

/** 个人模板 */
export type ILayoutName = 'kisure' | '';

export interface IUserInfo {
    name: string;
    pic?: any;
    desc?: string;
    key: number;
    redirectToUrl: string;
    layoutName: ILayoutName;
    layout: React.Component | React.FC;
}

export const User: IUserInfo[] = [
    {
        name: 'Kisure',
        desc: '个人博客案例',
        pic: KisurePic,
        key: 1,
        redirectToUrl: '/k/home',
        layoutName: 'kisure',
        layout: KISURELAYOUT
    }
];
