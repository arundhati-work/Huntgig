import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Link as MuiLink } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/Forms.css';
import { AuthContext } from '../Components/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            });
            login(response.data.token);
            localStorage.setItem('token', response.data.token);
            setError('');
            navigate('/');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <Container maxWidth="xs"  className='login-signup-form'>
            <Typography variant="h3" gutterBottom  className='text-dark-black font-poppins'>Login</Typography>
            <form onSubmit={handleLogin}>
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
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <Typography variant="body2" align="center" className='text-medium-black font-poppins' sx={{ marginTop: 2 }}>
                Don't have an account?{' '}
                <MuiLink component={Link} to="/signup" color="primary">
                    Sign Up
                </MuiLink>
            </Typography>
        </Container>
    );
};

export default Login;
