import React from "react";


import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const CommonFieldsComp = (props: any) => {
    // ==========================================================================================================

    return (
        <>

                <TextField
                    id="outlined-basic"
                    label="Введите заголовок объявления*:"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 1 }}
                    error={Boolean(
                        !props.createObject.name && props.flag === 0
                    )}
                    onChange={(e: any) =>
                        props.changeCreateObject({ name: e.target.value })
                    }
                />


                <TextField
                    label="Введите описание объявления (до 1000 символов)*:"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mb: 1 }}
                    error={Boolean(
                        !Boolean(props.createObject.description) &&
                            props.flag === 0
                    )}
                    onChange={(e: any) =>
                        props.changeCreateObject({
                            description: e.target.value,
                        })
                    }
                />

        </>
    );
};

export default CommonFieldsComp;
