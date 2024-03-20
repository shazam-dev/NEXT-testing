'use client'
import { FC, useEffect, useState, useRef } from "react";
import Script from "next/script";
import { Button, Flex, Tabs  } from 'antd';
// import { Helmet } from "react-helmet";
// import $ from "jquery";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

// import { logReg } from "../../api/userAPI";

import LoginPage from "./components/LoginPage";
// import RegPage from "./components/RegPage";
// import { useDispatch } from "react-redux";

// import "./LoginRegStyle.scss";

declare global {
    interface Window {
        qwerty: any,
        preview: any,
    }
}

const LoginReg: FC = () => {
    // const dispatch = useDispatch();
    

    const [flag, setFlag] = useState<boolean>(false);

    const elementRef = useRef<any>(null);

    useEffect(() => {
        console.log(window !== undefined); 
        window.qwerty = (data: any): void => {
            console.log("Иконки соц.сетей не видны при 0", data);
        };
        if (!elementRef || !elementRef.current) return;
        const observer = new ResizeObserver((entries) => {
            // 👉 Do something when the element is resized
            entries.forEach((entry) => {
                if (entry.contentRect.height === 0) {
                    setFlag(true);
                } else {
                    setFlag(false);
                }
                console.log(101, "ResizeObserver", entry.contentRect.height);
            });
        });

        observer.observe(elementRef.current);
        return () => {
            // Cleanup the observer by unobserving all elements
            observer.disconnect();
        };
    }, []);

    return (
        <>

                <Flex gap="middle" align="start" vertical>
                <Flex justify="center" align="center" className="">
                    <Tabs
                        // onChange={onChange}
                        type="card"
                        items={[{label: 'Вход', key: '1', children: <LoginPage></LoginPage>}]} />
                    <div
                        ref={elementRef}
                        className="social-icons"
                        id="uLogin30465678"
                        data-ulogin="display=panel;fields=first_name,email;optional=phone,last_name,photo,bdate;lang=ru;providers=vkontakte,yandex,google,mailru,youtube;redirect_uri=http%3A%2F%2Fwww.davse.ru%2Flogin-registration;callback=preview"
                    ></div>
                    {flag && (
                        <p className="note-reg">
                            Для входа или регистрации через социальные сети -
                            отключите блокировщик рекламы в браузере (привер:
                            Adblock Plus)!
                        </p>
                    )}
                </Flex>
                </Flex>

            <Script src="https://code.jquery.com/jquery-3.7.1.min.js"
                    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
                    crossOrigin="anonymous"></Script>
            <Script  src="//ulogin.ru/js/ulogin.js"></Script>

            <Script
                type="text/javascript"
                id="my-script">
                {`
                function preview(token){
                    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data){
                        qwerty(data)
                    });
                }
                `}
            </Script>

        </>
    );
};

export default LoginReg;
