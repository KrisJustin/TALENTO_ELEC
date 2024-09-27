"use client";

import Head from 'next/head';
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';

// Main ProfilePage Component with gray background
export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div className="bg-gray-200 min-h-screen"> 
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
              <Button color="inherit" href="/dashboard/clientdashboard" sx={{ color: 'white' }}>Home</Button>
              <Button color="inherit" href="/dashboard/category" sx={{ color: 'white' }}>Category</Button>
              <Button color="inherit" href="/dashboard/aboutus" sx={{ color: 'white' }}>About Us</Button>
              <Button color="inherit" href="/dashboard/clientprofile" sx={{ color: 'white' }}>Profile</Button>
              <Button color="inherit" href="/authentication/login" sx={{ color: 'white' }}>Logout</Button>
            </div>
          </Toolbar>
        </AppBar>

        <div className="flex h-screen">
          <main className="flex-1 p-6 bg-white">
            <div className="bg-white shadow-md rounded p-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/juswa.jpg"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <Typography variant="h4" component="div">
                    Ian Jeffprox Casul
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Manager
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Cordova Express Shesh
                  </Typography>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <Link href="/dashboard/clientprofile/editprof">
                  <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                    Edit
                  </button>
                </Link>

                <Link href="/dashboard/clientprofile/createpost">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Post
                  </button>
                </Link>
              </div>

              {/* Static Post Section */}
              <div className="mt-8 bg-gray-50 shadow-md p-4 rounded">
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  Recent Post
                </Typography>

                <div className="flex flex-col space-y-2">
                  <Typography variant="h6" component="div">
                    Event: Birthday
                  </Typography>

                  <Typography variant="body1" component="div">
                    Location: Umapad, Mandaue City
                  </Typography>

                  <Typography variant="body1" component="div">
                    Date and Time: August 5, 2024, Tuesday (5:00pm-6:00pm)
                  </Typography>

                  <Typography variant="body2" component="div">
                    Description: Looking for multi-talented performer that can sing and dance for my son's birthday.
                  </Typography>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
