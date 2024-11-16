import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import './CSS/About.css';
import Footer from '../Components/Footer/Footer';
import AboutImg1 from '../Images/about-img-1.png';
import AboutImg2 from '../Images/about-img-2.png';

const values = ["Empathy: We understand the challenges job seekers face, and our platform is designed to simplify the process and provide meaningful connections.",
                "Innovation: We continuously improve our technology to ensure a fast, intuitive, and tailored job search experience.",
                "Integrity: We prioritize quality over quantity, partnering with companies that share our commitment to transparency and trust.",
                "Diversity and Inclusion: We believe that everyone deserves a fair chance, which is why we partner with inclusive employers and ensure our job recommendations are bias-free."
            ];

const setsApart = ["Personalized Job Matches: Our smart algorithms match you with positions that align with your skills, experience, and career goals.",
                "Comprehensive Resources: From resume tips to interview preparation, Huntgig offers tools to help you present your best self.",
                "Verified Employers: We work with vetted companies to ensure that job seekers find reputable employers who value their contributions.",
                "Career Growth Support: Our blog and resources provide insights on industry trends, skills development, and career advancement."
            ];

const howItWorks = ["Create Your Profile: Sign up, complete your profile, and let Huntgig understand your unique strengths and career goals.",
                "Explore Tailored Job Matches: Receive recommendations based on your skills, interests, and preferred roles.",
                "Connect and Apply: Directly apply to roles with companies that are hiring through Huntgig, and stay updated on the status of your applications.",
                "Grow with Huntgig: Access career resources and guidance to help you succeed in every stage of your career."
            ];

const About = () => {
    return (
        <>
        <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" gutterBottom  className='text-dark-black font-poppins'>
                            About Huntgig
                        </Typography>
                        <br/>
                        <Typography variant="body1" color="textSecondary" className='text-medium-black font-poppins'>
                            Welcome to Huntgig, a modern job portal committed to reshaping the way people connect with career opportunities. Founded with the vision of creating a seamless job search experience, Huntgig combines innovative technology with personalized support to help job seekers find roles where they can thrive. Whether you’re a recent graduate, an experienced professional, or seeking a career change, Huntgig is here to guide you every step of the way.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={AboutImg1}
                            alt="About Huntgig"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ my: 5 }} className="blue-container padding-container">
                <Typography variant="h4" gutterBottom  className='text-dark-white font-poppins'>
                    Our Mission
                </Typography>
                <br/>
                <Typography variant="p" className='text-medium-white font-poppins'>
                    At Huntgig, our mission is simple: to empower job seekers by connecting them with meaningful, fulfilling career opportunities. We believe that finding the right job should be a straightforward and rewarding journey, and we’re committed to making that happen by bridging the gap between talent and opportunity.
                </Typography>
            </Box>

            <Box sx={{ my: 5 }} className="padding-container">
                <Typography variant="h4" gutterBottom className='text-dark-black font-poppins'>
                    Our Values
                </Typography>
                <List>
                    {
                    values.map((value, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircle sx={{ color: '#1da9b1' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography sx={{ color: '#413f3f', fontFamily: 'Poppins, sans-serif' }}>
                                {value}
                            </Typography>
                            } />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ my: 5 }} className="blue-container padding-container">
                <Typography variant="h4" gutterBottom className='text-dark-white font-poppins'>
                    What Sets Us Apart
                </Typography>
                <List>
                    {
                    setsApart.map((feature, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircle sx={{ color: '#7aedf3' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography sx={{ color: '#e6e5e5', fontFamily: 'Poppins, sans-serif' }}>
                                {feature}
                            </Typography>
                            } />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ my: 5 }} className="padding-container">
                <Typography variant="h4" gutterBottom  className='text-dark-black font-poppins'>
                    How It Works
                </Typography>
                <List>
                    {
                    howItWorks.map((step, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircle sx={{ color: '#1da9b1' }} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography sx={{ color: '#413f3f', fontFamily: 'Poppins, sans-serif' }}>
                                {step}
                            </Typography>
                            } />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ my: 5 }} className="blue-container padding-container">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={AboutImg2}
                            alt="Career Journey"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom className='text-dark-white font-poppins'>
                                Join Us on Your Career Journey
                            </Typography>
                            <br/><br/>
                            <Typography variant="body1" className='add-padding-top text-medium-white font-poppins'>
                                At Huntgig, we believe that everyone deserves the chance to find a career that they love. We’re more than just a job portal; we’re a partner dedicated to empowering you to reach your highest potential. From discovering your dream role to taking the next step in your professional growth, we are here to support you every step of the way. Join us today to explore new opportunities, unlock your potential, and embark on a path that brings you purpose and excitement every day. Your next chapter starts here – let’s get started together!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
        <Footer/>
        </>
    );
};

export default About;
