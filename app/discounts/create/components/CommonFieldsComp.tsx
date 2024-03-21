import React from "react";

import {
    Form,
    Input,
  } from 'antd';
import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const CommonFieldsComp = () => {

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
                <Input placeholder="Название объявления!" />
            </Form.Item>
            <Form.Item
                label="Описение:"
                name="description"
                rules={[{ required: true, message: 'Обязательное поле!' }]}
            >
                <Input.TextArea />
            </Form.Item>
        </>
    );
};

export default CommonFieldsComp;
