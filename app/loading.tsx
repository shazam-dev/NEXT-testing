'use client'
import React from 'react';
import { Flex, Spin , Alert} from 'antd';

export default function Loading() {
  return (
  <div className='h-screen'>
    <Flex  gap="small" vertical>

    <Spin tip="Геолокация...">
      {/* <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      /> */}
      <div className="content mt-10 text-center pt-10" >Ищем ваше местоположение!</div>
    </Spin>
    </Flex>

  </div>
);
  }