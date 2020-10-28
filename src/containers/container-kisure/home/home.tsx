import React from 'react';
import './home.scss';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

interface IProps {
    [key: string]: any;
}

interface IState {
  collapsed: boolean;
  [key: string]: any;
}

export default class HomeContainer extends React.Component<IProps, IState> {
    constructor(public props: IProps) {
        super(props);

        this.state = {
          collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    render() {
        return <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<CalendarOutlined />}>
              <Link to="/k/jsx">jsx</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              <Link to="/k/stateprops">state和props</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
              <Link to="/k/leftCycle">生命周期</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    }
}
