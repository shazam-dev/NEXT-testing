"use client"
import React, { useState } from "react";

import ImageResizingComp from "@/app/discounts/create/components/ImageResizingComp";
import CommonFieldsComp from "@/app/discounts/create/components/CommonFieldsComp";
import MapChoiceComp from "@/app/discounts/create/components/MapChoiceComp";
import Discounts from "@/app/discounts/create/components/Discounts";


import globalParamsObject from "@/lib/parameters/mainAppParameterObject";
import { Button, Flex, Form, Input, InputNumber   } from 'antd';


const CreateDiscount = () => {

    const [step, setStep] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [flag, setFlag] = useState<number>(1);
    const [createObject, setCreateObject] = useState<any>({});
    


    
    function changeCreateObject(agent1: any) {
        setCreateObject({ ...createObject, ...agent1 });
    }

    function nextStep() {
        if (!globalParamsObject.main.checkAdCategory[0][step].every((i: any) => Boolean(createObject[i]))
        ) {
            setFlag(0);
            return;
        }
        setStep(step + 1);
        setFlag(1);
    }

    const stepsComponents: any = [
        <ImageResizingComp
            key={1}
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <MapChoiceComp
            key={2}
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <CommonFieldsComp
            key={3}
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <Discounts
            key={4}
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
    ];

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


    const comutator = () =>{
        if(step === 3){
            if(!loading){
                sendToServer()
            }
        }else{
            nextStep()
        }
    }

    return (
        <Flex gap="middle" align="start" vertical>
            <Flex className="w-full" justify="center" align="flex-start">

                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    className=""
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                {/* {stepsComponents[step]} */}
                <Form.Item
                    hasFeedback
                    label="Field C"
                    name="field_c"
                    validateFirst
                    rules={[{ pattern: /^[0-9]*$/, message: 'Continue input to exceed 6 chars' }]}
                >
                    <Input placeholder="Validate one by one" />
                    {/* <InputNumber min={1} max={10} defaultValue={3} onChange={(value)=>{console.log(value)}} /> */}
                </Form.Item>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type={ step === 3 ? 'primary' : 'dashed' } loading={loading}
                            onClick={comutator}  htmlType="submit">
                            {step === 3 ? 'Опубликовать' : 'Следующий шаг'}
                            
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
                            
    );
};

export default CreateDiscount;
