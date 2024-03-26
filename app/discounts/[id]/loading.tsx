'use client'
import React from 'react';
import { Col, Row, Skeleton} from 'antd';

export default function Loading() {
  return (




<Row gutter={[24, 24]} className="!m-5"> 
    <Col span={24} lg={12}>
      <Skeleton  />
    </Col>
    <Col span={12}>
      <Skeleton />
    </Col>
</Row>
);
  }