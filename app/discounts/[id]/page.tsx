"use client"
import React, {useState,  Suspense} from "react";
import { Col, Row, Image, Skeleton } from 'antd';
// import useSWR from 'swr'

// const fetcher = async (
//     input: RequestInfo,
//     init?: RequestInit
//   ) => {
//     const res = await fetch(input, init);
//     return res.json();
//   };
import getMovies from "@/lib/api/getMovies";

import { useQuery, useSuspenseQuery  } from "@tanstack/react-query";
import List from "./components/page";

export default function Page({ params }: { params: { id: string } }) {

    const id = params.id || 1;
          
    // const [zoom, setZoom] = useState<any>(11);


    // const { data } = useSWR(`/api/discounts/${id}`, fetcher, { suspense: true })
//     const { data, isLoading, isError } = useSuspenseQuery ({
//         queryFn: async () => await getMovies(zoom),
//         queryKey: ["movies", zoom], //Array according to Documentation
//       });
// console.log(data, isLoading, isError)

// const er = () => {setZoom(99)}
    return (
            <Row gutter={[24, 24]} className="!m-5"> 
                <Col span={24} lg={12}>
                <div className="card-user_cab">
                    <div className="back_wrap_new">
                        <Image  alt="скидка Волгограда" src="/files/93Kb.jpg"/>
                    </div>
                </div>
                </Col>
                <Col span={12}>
                    < Suspense fallback={<Skeleton  />}>
                        <List />

                    </Suspense>
                </Col>
                <Col span={24} lg={12}>
                    <div className="card-user_cab">
                        <div className="back_wrap_new" 
                        // style={{backgroundImage: `url(${data.image})`}}
                        >
                            <img  alt="скидка Волгограда" src="/files/qwe.jpg" className='card_img-user_cab' />
                        </div>
                    </div>
                    {/* <button onClick={er}>sdsadasd</button> */}
                </Col>
            </Row>

    );
};

