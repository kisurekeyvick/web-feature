import { RouteConfig } from 'react-router-config';

type ILayout = 'kisure' | null | undefined | '';

export interface Route extends RouteConfig {
    name?: string
    layout?: ILayout
}
