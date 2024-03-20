"use client"
import React,  { useState } from "react";
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation'
 
import { Button   } from 'antd';
 
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

      const { trigger, isMutating, data, error } = useSWRMutation('/api/users', sendRequest, /* options */)

      const postUser = async () => {
        try {
          const result = await trigger({ username: 'johndoe' }, /* options */)
          console.log(result)
        } catch (e) {
          // error handling
        }
      }
      console.log(1, data, 2, error, 3, isMutating)

//     const { data: posts, error, isLoading } = useSWR<any>(`/api/users`, fetcher);
//     if(error) return <div>failed to load</div>
//     if(isLoading) return <div>loading...</div>

// console.log(posts)

    // // const dispatch = useDispatch();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const makeLogin = () => {
      
    // };

    return (
        <>
            {/* <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Введите пароль"
                    />
                </Form.Group>
            </Form> */}

            <Button type='primary' onClick={postUser} disabled={isMutating}>Следующий шаг
                            
                        </Button>
        </>
    );
};

export default LoginPage;
