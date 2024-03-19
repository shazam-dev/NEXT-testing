"use client"
import React, { useEffect, useState, Suspense } from "react";
import { Col, Row } from 'antd';
// import { fetchAdById } from "../../../api/discountAPI";
import useSWR from 'swr'
import globalParamsObject from "@/lib/parameters/mainAppParameterObject";
// import CustomImag from "@/app/discounts/[id]/customImag";
// const fetcher = (...args) => fetch(...args).then(res => res.json())

const fetcher = async (
    input: RequestInfo,
    init: RequestInit,
    ...args: any[]
  ) => {
    const res = await fetch(input, init);
    return res.json();
  };



export default function Page({ params }: { params: { id: string } }) {
        const id = params.id;

        const { data } = useSWR('/api/discounts/1', fetcher, { suspense: true })

    // useEffect(() => {
    //     fetchAdById({ adId })
    //         .then((data: any) => {
    //             setdata(data);
    //         })
    //         .catch((error) => {
    //             if(error.response && error.response.data) {
    //                 dispatch({type: "ALERT", payload: {modal: true, variant: 'warning', text: `${error.response.data.message}`}});
    //             } 
    //         });
    // }, []);

    return (
            <Row gutter={[24, 24]} className="!m-5"> 
                <Col span={24} lg={12}>
                <div className="card-user_cab">
                    <div className="back_wrap_new" 
                    // style={{backgroundImage: `url(${data.image})`}}
                    >
                        <img  alt="скидка Волгограда" src={data.img} className='card_img-user_cab' />
                    </div>
                </div>
                </Col>
                <Col span={12}>
                        <ul>
                            <li>
                                Название: {data.name}
                            </li>
                            <li>
                                Скидка (%): {data.discount}
                            </li> 
                            <li>
                                Категория скидки: {globalParamsObject.discounts.discountsCategory[data.discountCategory - 1]}
                            </li> 
                            <li>
                                Цена (руб.): {data.cost}
                            </li>
                            
                            <li>
                                Описание: {data.description}
                            </li>
                            <li>
                                Адрес: {data.address}
                            </li>

                        </ul>
                </Col>
            </Row>
    );
};

