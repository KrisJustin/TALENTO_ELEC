"use client";

import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Avatar, Divider, Paper, TextField, IconButton, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ChatPage() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>

      {/* Main Background */}
      <Box sx={{ backgroundColor: '#ECF0F1', minHeight: '100vh' }}>
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

        {/* Centered Chat Container */}
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box sx={{ p: 3, backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#34495E', fontWeight: 'bold' }}>
                Chat
              </Typography>

              {/* Chat Messages */}
              <Box sx={{ mb: 2 }}>
                <Message
                  sender="Client"
                  message="Hello! How can I help you today?"
                  time="10:00 AM"
                  isSender={false}
                />
                <Message
                  sender="Ian Jeffprox Casul"
                  message="Hi! I wanted to ask about your availability for an event."
                  time="10:02 AM"
                  isSender={true}
                />
                <Message
                  sender="Client"
                  message="I am available next weekend. Would that work for you?"
                  time="10:05 AM"
                  isSender={false}
                />
                <Message
                  sender="Ian Jeffprox Casul"
                  message="Yes, that sounds great! Let's discuss the details."
                  time="10:06 AM"
                  isSender={true}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Chat Input Field */}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Avatar src="/juswa.jpg" sx={{ width: 48, height: 48, mr: 2 }} />
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  variant="outlined"
                  size="small"
                  sx={{ mr: 2 }}
                />
                <IconButton color="primary">
                  <SendIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// Message Component
const Message = ({ sender, message, time, isSender }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSender ? 'flex-end' : 'flex-start',
        mb: 2
      }}
    >
      {!isSender && (
        <Avatar sx={{ bgcolor: 'grey.300', mr: 2 }}>{sender[0]}</Avatar>
      )}
      <Box sx={{ maxWidth: '75%', textAlign: isSender ? 'right' : 'left' }}>
        <Paper
          sx={{
            p: 2,
            backgroundColor: isSender ? '#3498DB' : '#e4e6eb',
            color: isSender ? 'white' : 'black',
            borderRadius: '12px',
            borderTopLeftRadius: isSender ? '12px' : 0,
            borderTopRightRadius: isSender ? 0 : '12px',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: isSender ? 'bold' : 'normal' }}>
            {message}
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', marginTop: '4px', color: isSender ? '#cbd3dc' : 'grey.600' }}>
            {time}
          </Typography>
        </Paper>
      </Box>
      {isSender && (
        <Avatar src="/juswa.jpg" sx={{ ml: 2, width: 48, height: 48 }} />
      )}
    </Box>
  );
};
