import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ChooseRepair() {
    const [repair, setRepair] = React.useState('');

    const handleChange = (event) => {
        setRepair(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="choose-repair-select-label">Choose</InputLabel>
                <Select
                    labelId="choose-repair-select"
                    id={repair}
                    label="Repair"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>Breaks</MenuItem>
                    <MenuItem value={1}>Change Oil + Filters</MenuItem>
                    <MenuItem value={2}>Diagnosis</MenuItem>
                    <MenuItem value={3}>Change Tire</MenuItem>
                    <MenuItem value={4}>Change Break Oil</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
