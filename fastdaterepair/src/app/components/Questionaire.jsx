import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Questionaire.css'
import ChooseService from "./ChooseService";
import ChooseRepair from "./ChooseRepair";
import Button from '@mui/material/Button';
// import CarDate from './ChooseYear';



export default function Questionaire() {

    return (
        <div className='Box-wrapper'>
        <Box
            component="form"
            sx={{
                borderRadius: '10%',
                backgroundColor: 'rgba(0,0,0,0.2)',
                width: 450,

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
                <Button variant="contained">Check</Button>
            </div>
        </Box>
        </div>
    );
}
