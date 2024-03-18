"use client"

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

const CustomSider = () => {
  // console.log(child)
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (<>

      <Content style={{ margin: '24px 16px 0' }} >
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
          >
          {/* {child} */}
          fhdjfhdjbc
        </div>
      </Content>
  </>
    );
};

export default CustomSider;
