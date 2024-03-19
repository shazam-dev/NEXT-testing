import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// import { useDispatch } from "react-redux";
// import './MapChoiceComp.scss';
// import {useDispatch} from "react-redux";

import {
    Form,
    Input,
    Button
  } from 'antd';


const MapChoiceComp = () => {
    // const dispatch = useDispatch();
    // const [addressString, setAddressString] = useState<string>("Волгоград, ");
    // const [coordinats, setCoordinats] = useState<any>([]);

    // let callFetchYandexAddress = (): void => {
    //     if (!props.createObject.address) return;
    //     fetchYandexAddress({ address: props.createObject.address })
    //         .then((data: any) => {
    //             if(!data.result){
    //                 dispatch({type: "ALERT", payload: {modal: true, variant: 'warning', text: `Адрес не найден!`}});
    //                 return;
    //             }
    //                 props.changeCreateObject({address: data.result, latitude: data.latitude, longitude: data.longitude});
    //         })
    //         .catch((error: any) => {
    //             if (error.response && error.response.data) {
    //                 dispatch({type: "ALERT", payload: {modal: true, variant: 'warning', text: `${error.response.data.message}`}});
    //             } 
    //         });
    // };

    // ==========================================================================================================

    return (
        <>

                <Form.Item
                // hidden
                    hasFeedback
                    label="Адрес:"
                    name="adress"
                    validateDebounce={2000}
                    rules={[{ required: true, min: 3, message: 'Введите адрес целиком!' }]} initialValue="Волгоград, "
                // onClick={callFetchYandexAddress} 
                >
                    <Input placeholder="Название объявления!"/>
                </Form.Item>

                <div className="map-wrapper">
                    <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_KEY }} >
                        <section className="map container">
                            { true ? (
                                <Map
                                    // state={{
                                    //     center: [props.createObject.latitude, props.createObject.longitude], // координаты центра карты 48.512741, 44.535905
                                    //     zoom: 13,
                                    // }}
                                    state={{
                                        center: [48.707067, 44.516975],
                                        zoom: 10,
                                    }}
                                    width="100%"
                                    height={300}
                                >
                                    <Placemark
                                        // geometry={[props.createObject.latitude, props.createObject.longitude]}
                                        geometry={[48.707067, 44.516975]}
                                        options={{ preset: "islands#oliveStretchyIcon", iconColor: "red", }}
                                    />
                                </Map>
                            ) : (
                                <Map
                                    state={{
                                        center: [48.707067, 44.516975],
                                        zoom: 10,
                                    }}
                                    width="100%"
                                    height={300}
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint', "geolocation", "geocode"]}
                                ></Map>
                            )}
                        </section>
                    </YMaps>
                </div>

            
        </>
    );
};

export default MapChoiceComp;
