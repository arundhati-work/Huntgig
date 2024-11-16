import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from '../Components/Footer/Footer';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setFormStatus(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus('Failed to send your message. Please try again later.');
        }
    };

    const faqs = [
        {
            question: "How do I apply for a job through Huntgig?",
            answer: "Simply sign up, complete your profile, and start applying to jobs that match your profile. You can save jobs to review later or apply directly through our portal."
        },
        {
            question: "Is there a fee to use Huntgig?",
            answer: "No, Huntgig is completely free for job seekers. Our platform is funded by companies looking for qualified candidates."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach out to us via this contact form or directly at support@huntgig.com. We’re here to help!"
        },
        {
            question: "Can I update my profile and resume?",
            answer: "Yes, you can update your profile and resume at any time in your account settings. This will help you get the most relevant job recommendations."
        },
    ];

    return (
        <div className='contact-page'>
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom align="center" className='text-dark-black font-poppins'>
                    Contact Us
                </Typography>
                <Typography variant="body1" align="center" className='text-medium-black font-poppins'>
                    We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to get in touch.
                </Typography>

                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <form onSubmit={handleSubmit}>
                                <TextField label="Name" name="name" fullWidth margin="normal" value={formData.name} onChange={handleChange} required />
                                <TextField label="Email" name="email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
                                <TextField label="Message" name="message" fullWidth multiline rows={4} margin="normal" value={formData.message} onChange={handleChange} required />
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    Send Message
                                </Button>
                                {formStatus && (
                                    <Typography color="primary" sx={{ mt: 2 }}>
                                        {formStatus}
                                    </Typography>
                                )}
                            </form>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom className='text-dark-black font-poppins'>
                                Get in Touch
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <LocationOnIcon sx={{ mr: 1, color: '#1da9b1' }} />
                                <Typography variant="body1" className='text-medium-black font-poppins'>
                                    123 Huntgig Street, Boston, MA 02115, USA
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon sx={{ mr: 1, color: '#1da9b1' }} />
                                <Typography variant="body1" className='text-medium-black font-poppins'>contact@huntgig.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PhoneIcon sx={{ mr: 1, color: '#1da9b1' }} />
                                <Typography variant="body1" className='text-medium-black font-poppins'>+1 (555) 123-4567</Typography>
                            </Box>
                            <Typography variant="body2" className='text-medium-black font-poppins'>
                                We are available from Monday to Friday, 9:00 AM to 6:00 PM.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 5 }}>
                    <br/>
                    <Typography variant="h4" gutterBottom className='text-dark-black font-poppins' align="center">
                        Frequently Asked Questions
                    </Typography>
                    <br/>
                    {faqs.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6"  className='text-dark-black font-poppins'>{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='text-medium-black font-poppins'>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
            <Footer/>
        </div>
    );
};

export default Contact;
