'use client'
import React,  { FC, useEffect, useState } from "react";

import { Button, Flex, Form, Input, type FormProps, message   } from 'antd';
import { authenticate } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const LoginReg: FC = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined)

    const { pending } = useFormStatus()

console.log(pending)

    return (
        <>

<form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <button aria-disabled={pending} type="submit">
      Login
    </button>
    </form>

                {/* <Flex gap="middle" align="center"  justify="center" vertical className="h-screen">
                <Flex className="lg:w-1/3 w-4/5">

                <Form
                    name="basic"
                    className="w-full "
                    // initialValues={{ remember: true }}
                    // action={dispatch}
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
                        <Button type='primary' disabled={pending} className="w-full "
                             htmlType="submit">Вход / Регистрация                            
                        </Button>
                    </Form.Item>
                    <div>{errorMessage && <p>{errorMessage}</p>}</div>
                </Form>

                </Flex>
                </Flex> */}

        </>
    );
};

export default LoginReg;
