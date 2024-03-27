"use client"
import React, { useState } from "react";

import ImageResizingComp from "@/app/discounts/create/components/ImageResizingComp";
import MapChoiceComp from "@/app/discounts/create/components/MapChoiceComp";
import Discounts from "@/app/discounts/create/components/Discounts";
    // import * as v from 'valibot';
import axios from "axios";

import {
  useMutation,
} from '@tanstack/react-query'

import { Button, Col, Row  , Flex  } from 'antd';

const CreateDiscount = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [createObject, setCreateObject] = useState<any>({sale: "5", range: 1, cat: 1, description: "", image: null});
  // const [address, setaAddress] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // address, latitude, longitude 
  
  // console.log(createObject.image && createObject.image[0].originFileObj)
  console.log(createObject)

  function changeCreateObject(agent1: any) {
    setCreateObject({ ...createObject, ...agent1 });
  }

  const mutation = useMutation({
    mutationFn: (newTodo: any) => {
      return axios.post('/api/auth/discounts/coordinates', newTodo)
    },
  })


    // const Schema = v.object({
    //   title: v.string('Это обязательное поле!', [v.minLength(1, 'Минимальная длинна 3 символа!') ]),
    //   cost: v.number('Введите целое число без копеек, запятых и точек!', [v.integer('Введите целое число без копеек, запятых и точек!'),]),
    //   address: v.string('Это обязательное поле!', [v.minLength(1, 'Минимальная длинна 3 символа!') ]),
    // });
      // console.log( v.safeParse(Schema, createObject))
    
    

    const sendToServer = () => {
      if(!Boolean(createObject.image)){
        alert("Картинка не загружена!");
        return;}
      if(!Boolean(createObject.title) || !Boolean(createObject.cost)){
        alert("Вы не ввели название и цену!");
        return;}
        if(!Boolean(createObject.address)){
          alert("Вы не ввели адрес!");
          return;}
      if(!Boolean(createObject.latitude) || !Boolean(createObject.longitude)){
        alert("Введите адрес заново, он не найден!");
        return;}
          
        mutation.mutate(createObject)
    };




    return (
      <Row gutter={[12, 12]}  justify="center">
      <Col  span={20} lg={12} >
      <Flex vertical gap={24}>
         <ImageResizingComp changeCreateObject={changeCreateObject}
            createObject={createObject}/>

                    <MapChoiceComp changeCreateObject={changeCreateObject}
            createObject={createObject}/>

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
