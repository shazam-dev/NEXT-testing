'use client'
import useSWR from 'swr';
import { Image} from 'antd';
import React, { useState,  useRef, useEffect } from "react";

import {Map, YMaps} from "@pbe/react-yandex-maps";

import DiscountsMapComp from './components/DiscountsMapComp';
import fetchMapByCoo from './server/actions/fetchMap';
// import { fetchDiscountByMap }from '../../../api/discountAPI';


// const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function Page() {
  const [geo, setGeo] = useState(true);
  
  
  useEffect(() => {
    
      let promise = new Promise(function(resolve) {
        setTimeout(function() {
          setGeo(false);
        }, 3000);
      });
  }, [])
  // promise.then((data) => { console.log(data)})

  // const { data: discounts, error, isLoading } = useSWR<any>(`/api/map`, fetcher);

  const mapRef = useRef<any>();
    
  const [discounts, setDiscounts] = useState<any>(null);
  const [coordinates, setCoordinates] = useState<any>([]);
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState<any>(11);

  const refreshData = () => {
     if(mapRef.current && mapRef.current._bounds) {
       setMap(mapRef.current._bounds);
      }
    };

  useEffect(() => {

    if(!map) return;
    // if( zoom < 12) {
    //     setTimeout(function() {setZoom(13) }, 1000); 
    //     return;}

    async function fetchMyAPI() {

      const formData = new FormData();
          formData.append("xLatitude", map[0][0]);
          formData.append("xLongitude", map[0][1]);
          formData.append("yLatitude", map[1][0]);
          formData.append("yLongitude", map[1][1]);
          // createGoodsItem(formData)
          let response = await fetchMapByCoo(formData)
          // response = await response.json()
          setDiscounts(response)
          
          let mid2:any = []
          response.map((item:any) => {mid2 = [...mid2, [item.latitude, item.longitude]]})
          setCoordinates(mid2)
    }

    fetchMyAPI()
    

      // fetchDiscountByMap({xLatitude: map[0][0], xLongitude: map[0][1], yLatitude: map[1][0], yLongitude: map[1][1] })

  }, [map])

  if(geo){ return(
      <div className='min-h-screen' style={{position: 'relative'}}>
        <div className='w-full text-center mt-10'>
          <Image
            width={100}
            src="/files/icons8-worldwide-location.gif"
            alt="логотип давсе"
          />
          <p>GeoLocation...</p>
        </div>
      </div>
  )}
  return (<>
  
                <div  style={{position: 'relative'}}>
                    <YMaps
                        query={{ apikey: process.env.REACT_APP_YANDEX_KEY }}>
                        <section className="map " >
                                <Map
                                    defaultState={{
                                        // center: [48.707067, 44.516975],
                                        center: [48.512273, 44.555203],
                                        zoom: 14
                                    }}
                                    width="100%"
                                    height={700}
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint', "geolocation", "geocode"]}
                                    onBoundsChange={(ymaps:any) => {
                                        setMap(ymaps.originalEvent.newBounds);
                                        setZoom(ymaps.originalEvent.newZoom);
                                    }}
                                    instanceRef={mapRef}
                                    onLoad={refreshData}
                                        >
                                        { discounts &&
                                            discounts.map((item: any, index:any) => {
                                                return(
                                                    <span key={index}>
                                                        <DiscountsMapComp  mainDataObject={{item, coordinates, index}} />
                                                    </span>
                                                );
                                            })
                                        }
                                </Map>
                        </section>
                    </YMaps>
                <br></br>
               <p>* Обозначение цветов маркеров: <span style={{color:'white', backgroundColor: 'red'}}>Красный:</span> частные объявления (до 3; <span style={{color:'white', backgroundColor: 'yellow'}}>Желтый:</span> срок объявления от 7 до 30 дней; <span style={{color:'white', backgroundColor: 'blue'}}>Синий:</span> срок объявления более 30 дней!</p>
                </div>
    
    </>
  );
}
