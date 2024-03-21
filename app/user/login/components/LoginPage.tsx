"use client"
import React,  { useEffect, useState } from "react";
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation'
 
import { Button, Flex, Form, Input, type FormProps, message   } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// import { login } from "../../../api/userAPI";
// import { useDispatch } from "react-redux";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
async function sendRequest(url: string, { arg }: { arg: { username: string }}) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(arg)
    }).then(res => res.json())
  }

const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
      const { trigger, isMutating, data, error, } = useSWRMutation('/api/users', sendRequest,)





      const onFinish = async(values: any) => {
        try {
          await trigger(values, /* options */)
          messageApi.open({
            type: 'success',
            content: 'This is a success message',
          });
        } catch (e) {
          // error handling
        }

      };
      // useEffect(() => {
      //   console.log(!data)
      //   if(!data) return;
      //   messageApi.open({
      //     type: 'success',
      //     content: 'This is a success message',
      //   });
      // }, [JSON.stringify(data)])

    return (
<>
      {contextHolder}
                <Form
                    name="basic"
                    className="w-full "
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <Form.Item
                      name="email"
                      hasFeedback
                      validateDebounce={1000}
                      rules={[{ required: true, type: 'email', max: 50, message: 'Введите email!' }]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                      name="password"
                      hasFeedback
                      validateDebounce={1000}
                      rules={[{ required: true,  max: 50, message: 'Введите пароль до 50 символов!' }]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' disabled={isMutating} className="w-full "
                             htmlType="submit">Вход / Регистрация                            
                        </Button>
                    </Form.Item>
                </Form>
                </>
    );
};

export default LoginPage;
