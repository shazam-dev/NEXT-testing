import React, { useState } from "react";

import { Row } from "react-bootstrap";
import Button from "@mui/material/Button";

import ImageResizingComp from "./components/ImageResizingComp";
import CommonFieldsComp from "./components/CommonFieldsComp";
import MapChoiceComp from "./components/MapChoiceComp";

import Discounts from "./components/Discounts";

import Spinner from "react-bootstrap/Spinner";

import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const CreateDiscount = () => {

    const [step, setStep] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [flag, setFlag] = useState<number>(1);
    const [createObject, setCreateObject] = useState<any>({});
    


    
    function changeCreateObject(agent1: any) {
        setCreateObject({ ...createObject, ...agent1 });
    }

    function nextStep() {
        if (
            adCategory &&
            !globalParamsObject.main.checkAdCategory[+adCategory - 1][
                step
            ].every((i: any) => Boolean(createObject[i]))
        ) {
            setFlag(0);
            return;
        }
        setFlag(1);
    }

    const stepsComponents: any = [
        <ImageResizingComp
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <MapChoiceComp
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <CommonFieldsComp
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
        <Discounts
            flag={flag}
            changeCreateObject={changeCreateObject}
            createObject={createObject}
        />,
    ];

    const sendToServer = () => {
        if (
            adCategory &&
            !globalParamsObject.main.checkAdCategory[+adCategory - 1][
                step
            ].every((i: any) => Boolean(createObject[i]))
        ) {
            setFlag(0);
            return;
        }

        const formData = new FormData();
        Object.entries({
            ...createObject,
            userId: stateUser.id,
            adCategory,
        }).map((item: any) => {
            return formData.append(item[0], item[1]);
        });

        setLoading(true);

        createDiscount(formData)
            .then((data) => {
                dispatch({
                    type: "ALERT",
                    payload: {
                        modal: true,
                        variant: "success",
                        text: `Успешно!`,
                    },
                });
                setTimeout(function () {
                    // window.location.replace("/user/user-ads-list");
                    navigate(`/user/user-ads-list`); // <-- redirec
                }, 800);
            })
            .catch((error: any) => {
                if (error.response && error.response.data) {
                    dispatch({
                        type: "ALERT",
                        payload: {
                            modal: true,
                            variant: "warning",
                            text: `${error.response.data.message}`,
                        },
                    });
                }
            })
            .finally(() => setLoading(false));
    };

    // ==========================================================================================================

    return (
        <>
            <Row>
                {stepsComponents[step]}
 

                <Col xs={12} md={{ span: 6, offset: 3 }} className="mb-4">
                    { step === 3 ? (
                        <>
                            {loading ? (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="warning"
                                    className="publish-button"
                                >
                                    <Spinner animation="border" />
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={sendToServer}
                                    color="warning"
                                    className="publish-button"
                                >
                                    Опубликовать
                                </Button>
                            )}

                        </>
                    ) : (
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={nextStep}
                            color="secondary"
                            className="publish-button"
                        >
                            Следующий шаг
                        </Button>
                    )}
                </Col>
            </Row>
        </>
    );
};

export default CreateDiscount;
