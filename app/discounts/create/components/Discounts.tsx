"use client"
import React from "react";

import {
    Form,
    Input,
    Select,
    Slider
  } from 'antd';
import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const Discounts = () => {
    return (
        <>
                    <Form.Item
                    // hidden
                        hasFeedback
                        label="Заголовок:"
                        name="title"
                        validateDebounce={1000}
                        rules={[{ required: true, message: 'Обязательное поле!' }]}
                    >
                        <Input placeholder="название скидки" />
                    </Form.Item>
                    <Form.Item
                        label="Описение:"
                        name="description"
                        rules={[{ required: true, message: 'Обязательное поле!' }]}
                    >
                        <Input.TextArea placeholder="условия, график ..." />
                    </Form.Item>
                    <Form.Item
                    // hidden
                        hasFeedback
                        label="Цена:"
                        name="cost"
                        validateDebounce={1000}
                        rules={[{ required: true, pattern: /^[0-9]*$/, message: 'Введите сумму без копеек!' }]}
                    >
                        <Input placeholder="руб. (цена со скидкой)" />
                    </Form.Item>
                    <Form.Item name="sale" 
                    label="Скидка"
                        hasFeedback
                        validateDebounce={1000}
                        rules={[{ required: true, message: 'Обязательное поле!' }]}>
                        <Select  placeholder="%" >
                            <Select.Option value="5">5</Select.Option>
                            <Select.Option value="10">10</Select.Option>
                            <Select.Option value="15">15</Select.Option>
                            <Select.Option value="20">20</Select.Option>
                            <Select.Option value="35">25</Select.Option>
                            <Select.Option value="30">30</Select.Option>
                            <Select.Option value="35">35</Select.Option>
                            <Select.Option value="40">40</Select.Option>
                            <Select.Option value="45">45</Select.Option>
                            <Select.Option value="50">50</Select.Option>
                        </Select>
                    </Form.Item>
                    {/* <Form.Item label="Категория:" name="cat"
                        hasFeedback
                        validateDebounce={1000}
                        rules={[{ required: true, message: 'Обязательное поле!' }]}>
                        <Select>
                        {globalParamsObject.discounts.discountsCategory.map(
                            (item: string, index: number) => {
                                return (
                                    <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                );
                            }
                        )}
                        </Select>

                    </Form.Item> */}

                    <Form.Item name="slider" label="Срок размещения (дней)"  initialValue={1}>
                        <Slider max={60} min={1} 
                            marks={{
                            7: 'неделя',
                            30: 'месяц',
                            60: '60',
                            }}
                        />
                    </Form.Item>

        </>
    );
};

export default Discounts;
