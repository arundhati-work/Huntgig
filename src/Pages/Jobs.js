import React from 'react';
import jobPosts from '../data/JobPosts';
import Job from '../Components/Job/Job';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from '../Components/Footer/Footer';
import { Typography } from '@mui/material';

const Jobs = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <br/><br/>
                <Typography variant="h4" gutterBottom align="left" className='text-dark-black font-poppins'>
                    Search for Jobs
                </Typography>
                <br/><br/>
                {
                    jobPosts.map((j) => {
                        return <Job key={j.id} title={j.title} description={j.description} lastUpdated={j.lastUpdated} applyLink={j.applyLink}/>
                    })
                }
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default Jobs;