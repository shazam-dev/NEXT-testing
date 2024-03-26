"use client"
import React, { useState } from "react";

import ImageResizingComp from "@/app/discounts/create/components/ImageResizingComp";
import MapChoiceComp from "@/app/discounts/create/components/MapChoiceComp";
import Discounts from "@/app/discounts/create/components/Discounts";


import globalParamsObject from "@/lib/parameters/mainAppParameterObject";
import { Button, Flex, Form, Input, type FormProps   } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

const CreateDiscount = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [createObject, setCreateObject] = useState<any>({});
    



console.log(createObject)



      const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const onValuesChange: FormProps<FieldType>["onValuesChange"] = (values) => {
        console.log(12334546, values);
      };



    
    function changeCreateObject(agent1: any) {
        setCreateObject({ ...createObject, ...agent1 });
    }




    const sendToServer = () => {
      alert(890)
        // if (
        //     adCategory &&
        //     !globalParamsObject.main.checkAdCategory[+adCategory - 1][
        //         step
        //     ].every((i: any) => Boolean(createObject[i]))
        // ) {
        //     setFlag(0);
        //     return;
        // }

        // const formData = new FormData();
        // Object.entries({
        //     ...createObject,
        //     userId: stateUser.id,
        //     adCategory,
        // }).map((item: any) => {
        //     return formData.append(item[0], item[1]);
        // });

        // setLoading(true);

        // createDiscount(formData)
        //     .then((data) => {
        //         dispatch({
        //             type: "ALERT",
        //             payload: {
        //                 modal: true,
        //                 variant: "success",
        //                 text: `Успешно!`,
        //             },
        //         });
        //         setTimeout(function () {
        //             // window.location.replace("/user/user-ads-list");
        //             navigate(`/user/user-ads-list`); // <-- redirec
        //         }, 800);
        //     })
        //     .catch((error: any) => {
        //         console.log(error)
        //         // if (error.response && error.response.data) {
        //         //     dispatch({
        //         //         type: "ALERT",
        //         //         payload: {
        //         //             modal: true,
        //         //             variant: "warning",
        //         //             text: `${error.response.data.message}`,
        //         //         },
        //         //     });
        //         // }
        //     })
        //     .finally(() => setLoading(false));
    };




    return (
        <Flex gap="middle" align="start" vertical>
            <Flex className="w-full" justify="center" align="flex-start">

                <Form

                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    className="md:w-1/3"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    onValuesChange={onValuesChange}
                    autoComplete="off"
                >


                    <ImageResizingComp changeCreateObject={changeCreateObject}/>

                    <MapChoiceComp />

                    <Discounts />



                    <Form.Item >
                        <Button type='primary' loading={loading} className=" w-full"
                             htmlType="submit">Опубликовать
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
                            
    );
};

export default CreateDiscount;
