"use client"

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Badge, Pagination  } from 'antd';
const { Meta } = Card;
import Link from 'next/link';
import useSWR from 'swr'
import {api} from "@/app/axios/config"

const fetcher = (url: string) => api.get(url).then((res) => res.data);


const AllDiscounts = () => {
    const [page, setPage] = useState(1);
    const {data, error, isLoading, isValidating} = useSWR(`/api/discounts/list?${page}`, fetcher)
    useEffect(() => {


    }, [page]); // <- add the count variable here



    // function choicePage(number: number) {
    //     setPage(number);
    // }

    // let midlItem1 = Math.ceil(count / 8);
    // let items = [];
    // for (let number = 1; number <= midlItem1; number++) {
    //     items.push(
    //         <Pagination.Item
    //             key={number}
    //             active={number === page}
    //             onClick={() => choicePage(number)}
    //         >
    //             {number}
    //         </Pagination.Item>
    //     );
    // }
    // const paginationBasic = (
    //     <div>
    //         <Pagination>{items}</Pagination>
    //     </div>
    // );

    return (
        <>
             <Row gutter={[12, 12]}>
                <Col  span={12} lg={6} >
                    <Link href="/discounts/1">
                        <Badge.Ribbon color="red" text={"Скидка 50%"}>
                            <Card
                            style={{border: "1px solid white"}}
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="example" src="/files/93Kb.jpg" />}
                            >
                                <Meta title={"Парикмахерские"} description={"Цена: 2000 руб."} />
                            </Card>
                        </Badge.Ribbon>
                    </Link>
                </Col>
                <Col  span={12} lg={6} >
                    <Link href="/discounts/1">
                        <Badge.Ribbon color="red" text={"Скидка 50%"}>
                            <Card
                            style={{border: "1px solid white"}}
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="example" src="/files/93Kb.jpg" />}
                            >
                                <Meta title={"Парикмахерские"} description={"Цена: 2000 руб."} />
                            </Card>
                        </Badge.Ribbon>
                    </Link>
                </Col>
            </Row>
                <Pagination defaultCurrent={1} total={2} />
        </>
    );
};

export default AllDiscounts;
