import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './CSS/Companies.css';
import Footer from '../Components/Footer/Footer';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/companies`);
                setCompanies(response.data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div className="companies-page">
        <div className="companies-container">
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom className="companies-header text-dark-black font-poppins">Hiring Partners</Typography>
                <br/>
                <Grid container spacing={4}>
                    {companies.map((company) => (
                        <Grid item xs={12} sm={6} md={4} key={company._id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={company.image}
                                    alt={`${company.name} logo`}
                                    style={{ objectFit: 'contain',
                                        padding: '25px',
                                        boxSizing: 'border-box' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" className="text-medium-black font-poppins">{company.name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
            
        </div>
        <Footer/>
        </div>
    );
};

export default Companies;
