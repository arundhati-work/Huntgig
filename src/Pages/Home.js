import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import homeImg from '../Images/home-img2.png';
import testimonialsData from '../data/TestimonialsData';
import Testimonial from '../Components/Testimonials/Testimonial';
import Slider from 'react-slick';
import Footer from '../Components/Footer/Footer';
import './CSS/Home.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <div className="bg-gray">
            <CssBaseline />
            <Container maxWidth="lg" className="outer-container">
                <div className="home inner-container">
                    <div className="home-image">
                        <img src={homeImg} alt="Huntgig" className="responsive-image" />
                    </div>
                    <div className="home-content">
                        <Typography variant={isMobile ? "h4" : "h2"} gutterBottom align="left" className="text-dark-black font-poppins">
                            Welcome to Huntgig – Your Career Journey Starts Here!
                        </Typography>
                        <Typography variant={isMobile ? "h6" : "h5"} gutterBottom align="left" className="text-medium-black font-poppins">
                            Your gateway to limitless career opportunities.
                        </Typography>
                        <Typography variant="body1" gutterBottom align="left" className="text-light-black font-poppins">
                            Huntgig connects ambitious job seekers with the most exciting opportunities.
                            Whether you're a fresh graduate, seasoned professional, or looking to
                            switch industries, we’re here to help you find the perfect match.
                        </Typography>
                        <Button variant="contained" onClick={() => navigate('/login')} sx={{ mt: 3 }}>Get Started &gt;&gt;</Button>
                    </div>
                </div>
            </Container>
            
            <Container maxWidth="lg" className="container-space outer-container blue-container">
                <div className="advantage inner-container">
                    <Typography variant={isMobile ? "h5" : "h4"} gutterBottom align="left" className="text-dark-white font-poppins">
                        Why Choose Huntgig?
                    </Typography>
                    <Typography variant="body1" gutterBottom align="left" className="text-medium-white font-poppins">
                        &emsp;At Huntgig, we’re not just a job portal. We are dedicated to helping you find roles that match your skills, interests, and career goals.
                    </Typography>
                    <br/>
                    <Typography variant={isMobile ? "h6" : "h5"} gutterBottom align="left" className="text-dark-white font-poppins">
                        Key Benefits:
                    </Typography>
                    <ul>
                        <li className="text-medium-white li-space font-poppins">
                            <strong>Personalized Matches:</strong> Advanced algorithms to match you with jobs that suit your profile.
                        </li>
                        <li className="text-medium-white li-space font-poppins">
                            <strong>Career Resources:</strong> Access career tips, guides, and resources to help you succeed.
                        </li>
                        <li className="text-medium-white li-space font-poppins">
                            <strong>Verified Employers:</strong> Every employer on Huntgig is carefully vetted for quality job postings.
                        </li>
                    </ul>
                    <Button variant="contained" className="dark-btn" sx={{ mt: 2 }}>Learn More</Button>
                </div>
            </Container>

            <div className="container-space testimonial-outer-container">
                <div className="testimonial-inner-container">
                    <Typography variant={isMobile ? "h5" : "h4"} gutterBottom align="left" className="text-medium-black font-poppins">
                        Success Stories
                    </Typography>
                    <Typography variant="body1" gutterBottom align="left" className="text-medium-black font-poppins">
                        &emsp;Discover how Huntgig has transformed careers and connected people with their dream jobs.
                    </Typography>
                    <div className="testimonial-container">
                        <Slider {...settings}>
                            {testimonialsData.map((t) => (
                                <Testimonial key={t.id} name={t.name} position={t.position} description={t.description} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
