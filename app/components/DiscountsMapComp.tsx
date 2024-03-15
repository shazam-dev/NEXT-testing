import React, {FC} from "react";

import {Placemark} from "@pbe/react-yandex-maps";

import {fspiralFromSameCoordinatesToYaMap} from '@/lib/utils/helpFunctions'
// type ew = {item, coordinates, index: number}

// export interface ButtonProps {
//     children: ReactNode;
//     type?: 'button' | 'submit';
// }


const DiscountsMapComp = (props: any) => {

    // функция должно окрашивать метки в цвета в зависимости от длительности размещения, если старше 7 дней, то желтый или красный
    // let colorPoint;
    // let colorPointAgent = Math.ceil((new Date().getTime() - props.mainDataObject.item.currentTime) / 8.64e7)
    // if(colorPointAgent <= 7) colorPoint = 'red';
    // if(colorPointAgent > 7 && colorPointAgent <= 30) colorPoint = 'yellow';
    // if(colorPointAgent > 30) colorPoint = 'blue';

    return (
        <>
                <Placemark
                        geometry={[props.mainDataObject.item.latitude, props.mainDataObject.item.longitude]}
                        options={{
                            preset: 'islands#oliveStretchyIcon', // список темплейтов на сайте яндекса
                            // iconColor: colorPoint, // цвет иконкиz
                            iconColor: 'red', // цвет иконкиz
                            iconOffset: fspiralFromSameCoordinatesToYaMap(props.mainDataObject.coordinates, props.mainDataObject.index, props.mainDataObject.item), // !!!!!!!!!!!!!!
                        }}
                        properties={{
                            iconContent: `${props.mainDataObject.item.discount}%`, // пару символов помещается
                            hintContent: '<em>кликни меня</em>',
                            balloonContent: `<div class="my-balloon">
                                <h4>${props.mainDataObject.item.name}</h4>
                                <p>
                                    Цена: ${props.mainDataObject.item.cost}; <br />
                                    Cкидка ${props.mainDataObject.item.discount}%
                                </p>
                                <a href="/ad-view/${props.mainDataObject.item.id}">Посмотреть</a>
                                </div>`,
                        }}
                    />

        </>
    );
};

export default DiscountsMapComp;
