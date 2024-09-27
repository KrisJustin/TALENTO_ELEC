"use client";

import Head from 'next/head';
import { Avatar, Button, TextField, Typography, Box } from '@mui/material';

export default function CreatePostPage() {
  return (
    <>
      <Head>
        <title>Create Post - TALENTO</title>
      </Head>

      {/* Static form submission (no dynamic state handling) */}
      <form action="/dashboard/clientprofile" method="GET"> {/* Navigate to Profile Page statically */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Create a New Post
          </Typography>

          {/* User Information (Example Avatar and Name) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Avatar
              sx={{ width: 56, height: 56, mr: 2 }}
              alt="User Avatar"
              src="/juswa.jpg" 
            />
            <Box>
              <Typography variant="h6">Ian Jeffprox Casul</Typography>
              <Typography variant="body2" color="textSecondary">
                June 27, 2024
              </Typography>
            </Box>
          </Box>

          {/* Post Form Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: false }}
            />

            <TextField
              label="Event"
              defaultValue=""
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: false }}
            />

            <TextField
              label="Location"
              defaultValue=""
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: false }}
            />

            <TextField
              label="Date and Time"
              defaultValue=""
              fullWidth
              variant="outlined"
              InputProps={{ readOnly: false }}
            />

            
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              type="submit" 
            >
              Post
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
