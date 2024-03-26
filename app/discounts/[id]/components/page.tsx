"use client"
import React, {useState} from "react";
import { Col, Row, Image } from 'antd';
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

export default function Page() {


          
    const [zoom, setZoom] = useState<any>(11);


    // const { data } = useSWR(`/api/discounts/${id}`, fetcher, { suspense: true })
    const { data, isLoading, isError } = useSuspenseQuery ({
        queryFn: ({ queryKey }) => getMovies(queryKey),
        queryKey: ["movies", zoom, 55], //Array according to Documentation
      });


    //   useQuery({
    //     queryKey: ['todos', todoId],
    //     queryFn: ({ queryKey }) => fetchTodoById(queryKey[1]),
    //   })
console.log(data, isLoading, isError)

const er = () => {setZoom(99)}
    return (

                        <ul>
                            <li>
                                Название: Парикмахерская
                            </li>
                            <li>
                                Скидка (%): {10}{data[0].id}{zoom}
                            </li> 
                            <li>
                                Категория скидки: Красота и здоровье
                            </li> 
                            <li>
                                Цена (руб.): {350}
                            </li>
                            
                            <li>
                                Описание: Хорошее описание
                            </li>
                            <li>
                                Адрес: Петроградская 18
                            </li>

                        </ul>

    );
};

