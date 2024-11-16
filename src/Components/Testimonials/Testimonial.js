import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Testimonial = (props) => {
    return (
        <Card variant="outlined" className="testimonial-card">
            <CardContent>
              <Typography variant="h6" component="div" className='text-medium-black font-poppins'>
                {props.name} <b>-</b> {props.position}
              </Typography>
              <br/>
              <Typography variant="body1" component="p"  className='text-medium-black font-poppins'>
                {props.description}
              </Typography>
            </CardContent>
          </Card>
    );
}

export default Testimonial;