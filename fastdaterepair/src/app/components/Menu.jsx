import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Menu() {
    return (
        <Stack spacing={1} direction="row" display='flex' justifyContent='flex-end' marginTop='10px' marginRight='10px'>
            <Button variant="contained">Login</Button>
            <Button variant="contained">Register</Button>
            <Button variant="contained">Contact</Button>
            <Button variant="contained">About Us</Button>
        </Stack>

    )
};