"use client"; 

import Head from 'next/head';
import { Avatar, Typography, Box, TextField, Button } from '@mui/material';
import Link from 'next/link'; 

export default function EditProfilePage() {
  return (
    <>
      <Head>
        <title>Edit Profile - TALENTO</title>
      </Head>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Edit Profile
        </Typography>

        <Typography variant="h6" gutterBottom>
          Profile Picture
        </Typography>
        <Avatar
          alt="Profile Picture"
          src="/juswa.jpg" 
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 4 }}
          enable 
        >
          Upload Profile Picture
        </Button>

        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            defaultValue=""
            fullWidth
            InputProps={{
              readOnly: false, 
            }}
          />
          <TextField
            label="Profession"
            variant="outlined"
            defaultValue=""
            fullWidth
            InputProps={{
              readOnly: false, 
            }}
          />
          <TextField
            label="Address"
            variant="outlined"
            defaultValue=""
            fullWidth
            InputProps={{
              readOnly: false, 
            }}
          />
        </Box>

        <Link href="/dashboard/clientprofile" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Save Changes
          </Button>
        </Link>
      </Box>
    </>
  );
}