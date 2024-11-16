import { Button } from '@mui/material';
import React from 'react';
import './Job.css';
import { Typography } from '@mui/material';

const Job = (props) => {
    return (
        <div className='job-container'>
            <div className='job-details'>
                <p className='job-updated'>
                </p>
                <Typography variant="p" component="div" className='text-light-black font-poppins' sx={{marginBottom: '1rem'}}>
                    {props.lastUpdated}
                </Typography>
                <div className='title-apply'>
                    <Typography variant="h5" component="div" className='text-dark-black font-poppins job-title'>
                    {props.title}
                    </Typography>
                    <Button variant="contained" href={props.applyLink}>Apply</Button>
                </div>
                <br/>
                <Typography variant="p" component="div" className='job-description text-medium-black font-poppins'>
                {props.description}
                </Typography>
                <br/>
            </div>
        </div>
    );
}

export default Job;