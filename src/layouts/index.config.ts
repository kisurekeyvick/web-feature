import KisurePic from '@/assets/img/kisure/kisure.jpg';

export interface IUserInfo {
    name: string;
    pic?: any;
    desc?: string;
}

export const User: IUserInfo[] = [
    {
        name: 'Kisure',
        desc: '个人博客案例',
        pic: KisurePic
    }
];
