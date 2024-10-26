"use client"; // Ensure this is a Client Component

import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div style={{ backgroundColor: '#ECF0F1', minHeight: '100vh' }}>
        
        {/* Navbar */}
        <AppBar position="static" sx={{ backgroundColor: '#2C3E50', boxShadow: 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logotalentos.png" alt="Talento Logo" style={{ height: '32px', marginRight: '12px' }} />
              <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                TALENTO
              </Typography>
            </div>
            <div>
              <Button color="inherit" href="/" sx={{ color: 'white' }}>Home</Button>
              <Button color="inherit" href="#category" sx={{ color: 'white' }}>Category</Button>
              <Button color="inherit" href="#about" sx={{ color: 'white' }}>About Us</Button>
              <Button color="inherit" href="/authentication/login" sx={{ color: 'white' }}>Login</Button>
              <Button color="inherit" href="/authentication/register" sx={{ color: 'white' }}>Register</Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Booking Section */}
        <Box sx={{ py: 10, backgroundColor: '#FFFFFF', boxShadow: 3, borderRadius: '8px', maxWidth: '800px', mx: 'auto', mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#34495E', mb: 3 }}>
            Book a Talent for Your Event!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <select style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#F5F5F5', color: '#333' }}>
              <option>Select Event</option>
            </select>
            <select style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#F5F5F5', color: '#333' }}>
              <option>Select Theme</option>
            </select>
            <Button variant="contained" sx={{ backgroundColor: '#3498DB', '&:hover': { backgroundColor: '#2980B9' } }}>
              Search
            </Button>
          </Box>
        </Box>

        {/* Category Section */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#34495E' }}>Browse By Category</Typography>
            <a href="/dashboard/category" style={{ color: '#3498DB', textDecoration: 'none' }}>View All (6)</a>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', boxShadow: 2, borderRadius: '8px', p: 2, backgroundColor: '#FFFFFF' }}>
                <img src="/singer.png" alt="Singer" style={{ borderRadius: '8px', marginBottom: '12px', width: '100%' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495E' }}>Singer</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', boxShadow: 2, borderRadius: '8px', p: 2, backgroundColor: '#FFFFFF' }}>
                <img src="/dancer.png" alt="Dancer" style={{ borderRadius: '8px', marginBottom: '12px', width: '100%' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495E' }}>Dancer</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', boxShadow: 2, borderRadius: '8px', p: 2, backgroundColor: '#FFFFFF' }}>
                <img src="/musician.png" alt="Musician" style={{ borderRadius: '8px', marginBottom: '12px', width: '100%' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495E' }}>Musician</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', boxShadow: 2, borderRadius: '8px', p: 2, backgroundColor: '#FFFFFF' }}>
                <img src="/band.png" alt="Band" style={{ borderRadius: '8px', marginBottom: '12px', width: '100%' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#34495E' }}>Band</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* About Section */}
        <Box id="about" sx={{ backgroundColor: '#ECECEC', py: 10 }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <img src="/background.png" alt="About Us" style={{ borderRadius: '8px', width: '100%' }} />
            </Box>
            <Box sx={{ flex: 1, color: '#34495E' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                About Us
              </Typography>
              <Typography>
                Talento is a web-based and mobile-responsive talent booking management system designed
                to streamline the process of finding and booking performers for events.
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}
