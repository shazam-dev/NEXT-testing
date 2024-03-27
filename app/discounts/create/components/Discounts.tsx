"use client"
import React from "react";

import {
    Form,
    Input,
    Select,
    Slider, Typography, Space, Flex
  } from 'antd';
  const { TextArea } = Input;
import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const Discounts = ({ changeCreateObject, createObject }: any) => {
    return (
        <>

{/* <Flex vertical gap={24}> */}
                        <Input placeholder="название скидки" showCount maxLength={30} status="" addonBefore="Название:" />
                  
     
                        <TextArea  placeholder="Описание" showCount maxLength={500} status=""  />

                        <Input placeholder="цена со скидкой без копеек!" showCount maxLength={8} status="" addonBefore="Цена:"  onChange={(e: any) =>
                                changeCreateObject({
                                    cost: +e.target.value,
                                })
                            } />


                        {/* <Space.Compact> */}
                            {/* <Input value="Скидка" disabled/> */}
                            <Select  placeholder="Скидка (%)" defaultValue={"5"} 
                            onChange={(value: any) =>
                                changeCreateObject({
                                    discount: value,
                                })
                            }>
                                <Select.Option value="5">Скидка 5%</Select.Option>
                                <Select.Option value="10">Скидка 10%</Select.Option>
                                <Select.Option value="15">Скидка 15%</Select.Option>
                                <Select.Option value="20">Скидка 20%</Select.Option>
                                <Select.Option value="25">Скидка 25%</Select.Option>
                                <Select.Option value="30">Скидка 30%</Select.Option>
                                <Select.Option value="35">Скидка 35%</Select.Option>
                                <Select.Option value="40">Скидка 40%</Select.Option>
                                <Select.Option value="45">Скидка 45%</Select.Option>
                                <Select.Option value="50">Скидка 50%</Select.Option>
                            </Select>
                        
                        {/* </Space.Compact> */}
                        <Select placeholder="Категория" defaultValue={1} >
                            {globalParamsObject.discounts.discountsCategory.map(
                                (item: string, index: number) => {
                                    return (
                                        <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                    );
                                }
                            )}
                        </Select>

                    {/* <Form.Item name="slider" label="Срок размещения (дней)"  initialValue={1}> */}

                    <Typography.Title level={5}>Срок размещения (дней):</Typography.Title>
                        <Slider max={60} min={1} 
                            marks={{
                            7: 'неделя',
                            30: 'месяц',
                            60: '60 дней',
                            }}
                        />


                        {/* </Flex> */}
                        <br />




        </>
    );
};

export default Discounts;
