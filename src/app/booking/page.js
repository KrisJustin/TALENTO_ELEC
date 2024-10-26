"use client"; // Ensure this is a Client Component

import Head from 'next/head';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box, MenuItem, Grid, Paper } from '@mui/material';

export default function BookingPage() {
  const [showHistory, setShowHistory] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 1,
      eventType: 'Birthday',
      date: '2024-12-31',
      startTime: '18:00',
      endTime: '20:00',
      details: 'Please bring sound equipment and a microphone.'
    }
  ]);

  const handleSubmit = () => {
    setShowHistory(true);
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>

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

      {/* Main Background */}
      <Box sx={{ minHeight: '100vh', backgroundColor: '#ECF0F1', pt: 4, pb: 6 }}>

        {/* Booking Form */}
        <Box sx={{ p: 4, maxWidth: 600, margin: 'auto', backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#34495E' }}>
            Book a Talent
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Event Type"
                value=""
                variant="outlined"
                InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
              >
                <MenuItem value="Birthday">Birthday</MenuItem>
                <MenuItem value="Wedding">Wedding</MenuItem>
                <MenuItem value="Corporate Event">Corporate Event</MenuItem>
                <MenuItem value="Concert">Concert</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Select Date"
                value=""
                variant="outlined"
                InputProps={{ readOnly: true, style: { backgroundColor: '#F5F5F5' } }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Start Time"
                value=""
                variant="outlined"
                InputProps={{ readOnly: true, style: { backgroundColor: '#F5F5F5' } }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="End Time"
                value=""
                variant="outlined"
                InputProps={{ readOnly: true, style: { backgroundColor: '#F5F5F5' } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Details"
                value=""
                variant="outlined"
                InputProps={{ readOnly: true, style: { backgroundColor: '#F5F5F5' } }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: '#3498DB', '&:hover': { backgroundColor: '#2980B9' } }}
                onClick={handleSubmit}
              >
                Submit Booking
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Booking History Section */}
        {showHistory && (
          <Box sx={{ p: 4, maxWidth: 600, margin: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center" sx={{ color: '#34495E' }}>
              Recent Bookings
            </Typography>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <Paper key={booking.id} sx={{ p: 2, mb: 2, backgroundColor: '#FFFFFF', boxShadow: 3, borderRadius: '8px' }}>
                  <Typography variant="subtitle1" sx={{ color: '#2C3E50' }}><strong>Event Type:</strong> {booking.eventType}</Typography>
                  <Typography variant="body2" sx={{ color: '#7F8C8D' }}><strong>Date:</strong> {booking.date}</Typography>
                  <Typography variant="body2" sx={{ color: '#7F8C8D' }}><strong>Time:</strong> {booking.startTime} - {booking.endTime}</Typography>
                  <Typography variant="body2" sx={{ color: '#7F8C8D' }}><strong>Details:</strong> {booking.details}</Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 1, color: '#E74C3C', borderColor: '#E74C3C', '&:hover': { backgroundColor: '#FDEDEC' } }}
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    Cancel Booking
                  </Button>
                </Paper>
              ))
            ) : (
              <Typography align="center" color="text.secondary">
                No recent bookings.
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
