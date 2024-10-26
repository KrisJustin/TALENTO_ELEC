"use client";

import Head from 'next/head';
import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>

      {/* Background and layout wrapper */}
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
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
              <Button color="inherit" href="/dashboard/clientdashboard" sx={{ color: 'white' }}>Home</Button>
              <Button color="inherit" href="/dashboard/category" sx={{ color: 'white' }}>Category</Button>
              <Button color="inherit" href="/dashboard/aboutus" sx={{ color: 'white' }}>About Us</Button>
              <Button color="inherit" href="/dashboard/clientprofile" sx={{ color: 'white' }}>Profile</Button>
              <Button color="inherit" href="/booking" sx={{ color: 'white' }}>Book</Button>
              <Button color="inherit" href="/message" sx={{ color: 'white' }}>Message</Button>
              <Button color="inherit" href="/authentication/login" sx={{ color: 'white' }}>Logout</Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main content area */}
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <Box sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, p: 4, width: '100%', maxWidth: 800 }}>
            {/* Profile Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <img
                src="/juswa.jpg"
                className="h-24 w-24 rounded-full object-cover"
                alt="Profile picture"
                style={{ borderRadius: '50%', width: '100px', height: '100px', marginRight: '24px' }}
              />
              <Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#34495E' }}>
                  Ian Jeffprox Casul
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Manager
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Cordova Express Shesh
                </Typography>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Link href="/dashboard/clientprofile/editprof" passHref>
                <Button variant="outlined" sx={{ color: '#333', borderColor: '#ccc', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                  Edit Profile
                </Button>
              </Link>

              <Link href="/dashboard/clientprofile/createpost" passHref>
                <Button variant="contained" sx={{ backgroundColor: '#3498DB', '&:hover': { backgroundColor: '#2980B9' } }}>
                  Create Post
                </Button>
              </Link>
            </Box>

            {/* Recent Post */}
            <Box sx={{ backgroundColor: '#F7F9FA', p: 3, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                Recent Post
              </Typography>

              <Typography variant="h6" component="div" sx={{ color: '#34495E' }}>
                Event: Birthday
              </Typography>

              <Typography variant="body1" component="div" sx={{ color: '#7F8C8D' }}>
                Location: Umapad, Mandaue City
              </Typography>

              <Typography variant="body1" component="div" sx={{ color: '#7F8C8D' }}>
                Date and Time: August 5, 2024, Tuesday (5:00pm-6:00pm)
              </Typography>

              <Typography variant="body2" component="div" sx={{ color: '#7F8C8D', mt: 1 }}>
                Description: Looking for a multi-talented performer who can sing and dance for my son's birthday.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
