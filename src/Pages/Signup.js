import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography,  Link as MuiLink } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/Forms.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');

        try {
            await axios.post(`http://localhost:5000/api/auth/signup`, {
                email,
                password
            });
            setSuccess('Account created successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="xs" className='login-signup-form'>
            <Typography variant="h3" gutterBottom  className='text-dark-black font-poppins'>Sign Up</Typography>
            <form onSubmit={handleSignUp}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {error && <Typography color="error">{error}</Typography>}
                {success && <Typography color="primary">{success}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign Up
                </Button>
            </form>
            <Typography variant="body2" align="center" className='text-medium-black font-poppins' sx={{ marginTop: 2 }}>
                Already have an account?{' '}
                <MuiLink component={Link} to="/login" color="primary">
                    Login
                </MuiLink>
            </Typography>
        </Container>
    );
};

export default SignUp;
