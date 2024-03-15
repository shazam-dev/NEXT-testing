import React from "react";
import Col from "react-bootstrap/Col";
import { TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import globalParamsObject from "@/lib/parameters/mainAppParameterObject";

const CommonFieldsComp = (props: any) => {
    // ==========================================================================================================

    return (
        <>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
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

            </Col>
            <Col xs={12} md={{ span: 6, offset: 3 }} className="mb-2">
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
            </Col>
        </>
    );
};

export default CommonFieldsComp;
