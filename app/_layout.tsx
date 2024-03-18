'use client'

import React from 'react';
import Link from 'next/link';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { HomeOutlined, FlagOutlined, EditOutlined, LoginOutlined , UnorderedListOutlined} from '@ant-design/icons';
import { Layout, Menu, theme, Image} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );
const items = [{key: '1',  icon: React.createElement(HomeOutlined), label: (<Link href="/">Главная</Link>)},
                {key: '2',  icon: React.createElement(FlagOutlined), label: (<Link href="/">Скидки на карте</Link>),},
                {key: '3',  icon: React.createElement(UnorderedListOutlined), label: (<Link href="/">Скидки списком</Link>),},
                {key: '4',  icon: React.createElement(EditOutlined), label: (<Link href="/">Создать</Link>),},
                {key: '5',  icon: React.createElement(LoginOutlined), label: (<Link href="/">Войти</Link>),},
                {key: '6',  icon: React.createElement(LoginOutlined), label: (<Link href="/test">Тестирование</Link>),},
];


import '@/ui/global.css';
// import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}> */}
      <body className={`antialiased`}>
      <AntdRegistry>
      <Layout>
      <Sider
        className='h-screen'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Image
          className='m-5 bg-white p-2 rounded'
          width={120}
          src="/files/logo.png"
          alt="логотип давсе"
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} >Давсе</Header> */}
        <Content style={{ margin: '24px 16px 0' }} >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by <a href='https://github.com/shazam-dev' >Shazam_dev</a> ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
    </AntdRegistry>
        </body>
    </html>
  );
}