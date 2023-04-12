import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const items1: MenuProps['items'] = ['product','user',  'Category'].map((key) => ({
  key,
  label: `${key}`,
}));

const items2: MenuProps['items'] = ['product','user','Category'].map(
  (icon, index) => {
    const key = String(icon);

    return {
      key: `${key}`,
      // icon: React.createElement(icon),
      label: `${key}`,

      children: new Array(3).fill(null).map((_, j) => {
        const subKey = index * 3 + j + 1;
        return {
          key: subKey,
          label: `${subKey}`,
        };
      }),
    };
  },
);

const LayoutAdmin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content style={{ padding: '10px 50px' }}>
    
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content  style={{ padding: '10px 24px', minHeight: 280  }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    </div>
  );
};

export default LayoutAdmin;
