'use client'
import React from 'react';
import { Flex, Spin , Image} from 'antd';

export default function Loading() {
  return (

    <Flex gap="middle" align="center"  justify="center" vertical className="h-96">
        <Flex className="" vertical={true}>
          <Image
              preview={false}
                className=''
                // width={120}
                src="/files/icons8-sale.gif"
                alt="логотип давсе"
              />
              
          <p className="text-center"></p>
        </Flex>
    </Flex>


);
  }