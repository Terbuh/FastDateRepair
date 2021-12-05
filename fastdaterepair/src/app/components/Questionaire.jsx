import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Questionaire.css'
import ChooseService from "./ChooseService";
import ChooseRepair from "./ChooseRepair";
// import CarDate from './ChooseYear';



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
                <h2>Workshop</h2>
                <ChooseService/>
                <h2>Services</h2>

                <ChooseRepair/>
                <TextField
                    required
                    id="outlined-basic"
                    label="Type your car brand"
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Type your car model"
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="VIN"
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Engine capacity"
                />
                <TextField
                    required
                    id="outlined-basic"
                    type="number"
                    label="Year - Datepicker myślę"
                />


            </div>
        </Box>
    );
}
