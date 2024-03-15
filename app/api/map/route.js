import { NextResponse } from "next/server";

export async function GET(){


  let data = await fetch("https://api.kopi34.ru/api/goods/fetch-xsl-file");
  data = await data.json();
  console.log(data);



    return NextResponse.json({data})
}

export async function POST(req,res){
    const data  = await req.json()
    console.log(data)


    [
      {
          "_id": "65a4fc45a7838738ed83e11f",
          "discount": "1",
          "cost": "570",
          "name": "Сертификат на посещение спортивного комплекса",
          "latitude": "48.5022276",
          "longitude": "44.5502945",
          "currentTime": 1705311301055,
          "userId": {
              "_id": "65a4f96aa7838738ed83e11b",
              "name": "СК \"Прайд\"",
              "phone": "50-95-50",
              "role": "COMPANY"
          }
      },
      {
          "_id": "65a65748a7838738ed83e15d",
          "discount": "2",
          "cost": "500",
          "name": "Стабильные скидки от -5%, -7%, -10%.",
          "latitude": "48.520061",
          "longitude": "44.562268",
          "currentTime": 1705400136695,
          "userId": {
              "_id": "658fffb303e91a4b0cbd3735",
              "name": "Михайлова Марина Геннадьевна ",
              "phone": "+79053993528",
              "role": "COMPANY"
          }
      },
      {
          "_id": "65e587f3a160e13626c108f4",
          "discount": "3",
          "cost": "395",
          "name": "Бизнес-обед Додо - 395руб.",
          "latitude": "48.5144485",
          "longitude": "44.5371639",
          "currentTime": 1709541363476,
          "userId": {
              "_id": "65e58735a160e13626c108f0",
              "name": "\"Додо пица\"",
              "phone": "8 800 333-00-60",
              "role": "USER"
          }
      },
      {
          "_id": "65e58a44a160e13626c108ff",
          "discount": "1",
          "cost": "250",
          "name": "Скидка 7% для социальных групп населения",
          "latitude": "48.5121169",
          "longitude": "44.5477832",
          "currentTime": 1709541956235,
          "userId": {
              "_id": "65e588cea160e13626c108fb",
              "name": "ВДЦ лаборатория",
              "phone": "+7 (8442) 300-911",
              "role": "USER"
          }
      }
  ]

    return NextResponse.json(data)
}