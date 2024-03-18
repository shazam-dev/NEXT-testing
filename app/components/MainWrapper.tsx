"use client"
import React, {FC} from "react";

import { theme} from 'antd';


const MainWrapper = ({child}: any) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
         {child}
          </div>
    );
};

export default MainWrapper;
