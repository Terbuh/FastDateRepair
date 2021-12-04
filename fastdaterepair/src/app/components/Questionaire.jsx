import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Questionaire.css'
import BasicSelect from "./Choose service";



export default function Questionaire() {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="content">

                <BasicSelect

                />

                <TextField
                    required
                    id="outlined-disabled"
                    label="Wybierz usługę"
                    defaultValue="Wybierz usługę"
                />

                <TextField
                    id="outlined-password-input"
                    label="Required"
                    type="password"
                    autoComplete="Przewidywany koszt"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Required"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Numer"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </Box>
    );
}
