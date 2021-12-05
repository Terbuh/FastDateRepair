import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ChooseRepair() {
    const [service, setService] = React.useState('');

    const handleChange = (event) => {
        setService(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="choose-service-select-label">Choose</InputLabel>
                <Select
                    labelId="choose-service-select"
                    id={service}
                    label="Service"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>BMW</MenuItem>
                    <MenuItem value={1}>BM-Serwis</MenuItem>
                    <MenuItem value={2}>Autokosik</MenuItem>
                    <MenuItem value={3}>Tomi-serwis</MenuItem>
                    <MenuItem value={4}>MadaCar</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
