"use client"
import React, { useState } from "react";

import ImageResizingComp from "@/app/discounts/create/components/ImageResizingComp";
import MapChoiceComp from "@/app/discounts/create/components/MapChoiceComp";
import Discounts from "@/app/discounts/create/components/Discounts";


import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv()

interface MyData {
    discount: string,
    cost: number,
}




import { Button, Col, Row  , Flex  } from 'antd';

const CreateDiscount = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [createObject, setCreateObject] = useState<any>({});
    
    function changeCreateObject(agent1: any) {
        setCreateObject({ ...createObject, ...agent1 });
    }



    const schema: JSONSchemaType<MyData> = {
      type: "object",
      properties: {
        discount: {type: "string", minLength: 1},
        cost: {type: "integer", minimum: 1},
        // bar: {type: "string", nullable: true}
      },
      required: ["discount", "cost"],
      additionalProperties: false
    }
    
    const validate = ajv.compile(schema)

    
    
    const sendToServer = () => {
      
      if (!validate(createObject)) {
        console.log(createObject)
        console.log(validate.errors)
      }

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
      <Row gutter={[12, 12]}  justify="center">
      <Col  span={20} lg={12} >
      <Flex vertical gap={24}>
         <ImageResizingComp changeCreateObject={changeCreateObject}
            createObject={createObject}/>

                    <MapChoiceComp changeCreateObject={changeCreateObject}
            createObject={createObject} />

                    <Discounts  changeCreateObject={changeCreateObject}
            createObject={createObject}/>



                    <Button type="primary" loading={false} className="mb-5"
                    // disabled
                    onClick={sendToServer}
                    >
          Опубликовать!
        </Button></Flex>
      </Col>


        </Row>



                  

                            
    );
};

export default CreateDiscount;
