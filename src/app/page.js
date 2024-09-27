"use client"; // Ensure this is a Client Component

import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div>
        {/* MUI Header */}
        <AppBar position="static" sx={{ backgroundColor: '#333', boxShadow: 1 }}>
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
        <section className="bg-gray-400 text-white py-16">
          <Container maxWidth="lg" className="text-center">
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '24px' }}>
              Book a Talent for your Event!
            </Typography>
            <div className="flex justify-center space-x-4">
              <select className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-black">
                <option>Select Event</option>
              </select>
              <select className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-black">
                <option>Select Theme</option>
              </select>
              <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">Search</button>
            </div>
          </Container>
        </section>

        {/* Category Section */}
        <section className="container mx-auto py-16">
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Browse By Category</Typography>
            <a href="/dashboard/category" className="hover:text-gray-700">View All (6)</a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <img src="/singer.png" alt="Singer" className="rounded-lg mb-2" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Singer</Typography>
            </div>
            <div className="text-center">
              <img src="/dancer.png" alt="Dancer" className="rounded-lg mb-2" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Dancer</Typography>
            </div>
            <div className="text-center">
              <img src="/musician.png" alt="Musician" className="rounded-lg mb-2" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Musician</Typography>
            </div>
            <div className="text-center">
              <img src="/band.png" alt="Band" className="rounded-lg mb-2" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>Band</Typography>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ul className="flex space-x-2">
              <li className="px-3 py-1 border border-gray-300 rounded">1</li>
              <li className="px-3 py-1 border border-gray-300 rounded">2</li>
              <li className="px-3 py-1 border border-gray-300 rounded">3</li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-200 py-16">
          <Container maxWidth="lg" className="flex items-center">
            <div style={{ flex: '1', paddingRight: '16px' }}>
              <img src="/background.png" alt="About Us" className="rounded-lg" />
            </div>
            <div style={{ flex: '1', paddingLeft: '16px' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                About Us
              </Typography>
              <Typography>
                Talento is a web-based and mobile-responsive talent booking management system designed
                to streamline the process of finding and booking performers for events.
              </Typography>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
