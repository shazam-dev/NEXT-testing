"use client"
import React, {FC} from "react";
import { Layout, Menu, theme, Image} from 'antd';
import Link from 'next/link';
const { Sider } = Layout;
import { HomeOutlined, FlagOutlined, EditOutlined, LoginOutlined , UnorderedListOutlined} from '@ant-design/icons';

const items = [{key: '1',  icon: React.createElement(HomeOutlined), label: (<Link href="/">Главная</Link>)},
                {key: '2',  icon: React.createElement(FlagOutlined), label: (<Link href="/">Скидки на карте</Link>),},
                {key: '3',  icon: React.createElement(UnorderedListOutlined), label: (<Link href="/">Скидки списком</Link>),},
                {key: '4',  icon: React.createElement(EditOutlined), label: (<Link href="/">Создать</Link>),},
                {key: '5',  icon: React.createElement(LoginOutlined), label: (<Link href="/">Войти</Link>),},
                {key: '6',  icon: React.createElement(LoginOutlined), label: (<Link href="/test">Тестирование</Link>),},
];

const CustomSider = ({child}: any) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
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
    );
};

export default CustomSider;
