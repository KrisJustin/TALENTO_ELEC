import React from 'react';
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material';

export default function ForgotPassword() {
  return (
    <Container maxWidth="xs">
      <Box 
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Forgot Password?
        </Typography>
        <Typography component="p" variant="body2" sx={{ mb: 3 }}>
          Enter your email address and we'll send you a link to reset your password.
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Send Reset Link
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <a href="/authentication/login" style={{ color: '#3f51b5' }}>
              Back to Login
            </a>
            <a href="/authentication/register" style={{ color: '#3f51b5' }}>
              Sign up now
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
