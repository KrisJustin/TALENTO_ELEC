"use client"; 

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Avatar, Typography, Box, TextField, Button } from '@mui/material';
import Link from 'next/link'; 

export default function EditProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    profession: '',
    address: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      const fetchedData = {
        name: 'Ian Jeffprox Casul', 
        profession: 'Maneger',
        address: 'Cordova Express Shesh'
      };
      setProfile(fetchedData);
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>Edit Profile - TALENTO</title>
      </Head>

      <Box sx={{ p: 3 }}>
        <Link href="/dashboard/clientprofile" >
          <Button variant="outlined" color="primary">
            Back
          </Button>
        </Link>

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
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Profession"
            variant="outlined"
            name="profession"
            value={profile.profession}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            fullWidth
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
