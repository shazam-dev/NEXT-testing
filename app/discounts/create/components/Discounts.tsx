import React from "react";

import {
    Form,
    Input,
    Select,
  } from 'antd';
import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const Discounts = () => {
    return (
        <>

                    <Form.Item
                    // hidden
                        hasFeedback
                        label="Цена:"
                        name="cost"
                        validateFirst
                        rules={[{ required: true, pattern: /^[0-9]*$/, message: 'Введите сумму без копеек!' }]}
                    >
                        <Input placeholder="Цена со скидкой!" />
                    </Form.Item>
                    <Form.Item label="Скидка (%)" name="sale" rules={[{ required: true, message: 'Обязательное поле!' }]}>
                        <Select>
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
                    <Form.Item label="Категория:" name="cat" rules={[{ required: true, message: 'Обязательное поле!' }]}>
                        <Select>
                        {globalParamsObject.discounts.discountsCategory.map(
                            (item: string, index: number) => {
                                return (
                                    <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                );
                            }
                        )}
                        </Select>
                    </Form.Item>

        </>
    );
};

export default Discounts;
