'use client'

import React from 'react';
import Link from 'next/link';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { PlusOutlined, FlagOutlined, EditOutlined, LoginOutlined , UnorderedListOutlined} from '@ant-design/icons';
import { FloatButton, Layout, Menu, theme, Image } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
                {key: '2',  icon: React.createElement(FlagOutlined), label: (<Link href="/">Скидки на карте</Link>),},
                {key: '3',  icon: React.createElement(UnorderedListOutlined), label: (<Link href="/">Скидки списком</Link>),},
                {key: '5',  icon: React.createElement(LoginOutlined), label: (<Link href="/user/login">Войти</Link>),},
                {key: '6',  icon: React.createElement(LoginOutlined), label: (<Link href="/test">Тест</Link>),},
];


import '@/app/ui/global.css';
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
        // defaultCollapsed
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Link href="/">
          <Image
          preview={false}
            className='ml-6 mt-4 bg-white p-1 rounded !w-3/5'
            // width={120}
            src="/files/logo.png"
            alt="логотип давсе"
          />
        </Link>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} >Давсе</Header> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 5,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className='!min-h-screen'
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by <a href='https://github.com/shazam-dev' >Shazam_dev</a> ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
    <FloatButton icon={<PlusOutlined />}  tooltip={<p>Создать</p>} type="primary" href="/discounts/create" style={{ right: 24 }} />
    </AntdRegistry>
        </body>
    </html>
  );
}