"use client";

import Head from 'next/head';
import { Typography, Toolbar, AppBar, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import Overview from './overview/page';
import Reviews from './review/page';
import PhotosVideos from './photos_vid/page';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerWidth = 240;

  return (
    <>
      <Head>
        <title>Profile - TALENTO</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        
        {/* AppBar with Menu Button */}
        <AppBar position="fixed" sx={{ backgroundColor: '#333', zIndex: 1201 }}>
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu" 
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              TALENTO
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#333',
              color: 'white'
            },
          }}
          variant="temporary" 
          open={drawerOpen} 
          onClose={toggleDrawer} 
          ModalProps={{
            keepMounted: true, 
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component="a" href="/dashboard/talentdashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component="a" href="/portfolio">
              <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem button component="a" href="/messages">
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button component="a" href="/booking">
              <ListItemText primary="Booking" />
            </ListItem>
            <ListItem button component="a" href="/authentication/login">
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white" style={{ marginTop: 64 }}>
          <div className="bg-white shadow-md rounded p-4">
            <div className="flex items-center space-x-4">
              <img
                src="profile.jpg"
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <Typography variant="h4" component="div">
                  Karl Matyou Linao
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Classical Singer
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Batak Lapu-Lapu
                </Typography>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <span>⭐ 4.9</span>
                  <Typography variant="body2" color="textSecondary">
                    (26 reviews)
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                Edit
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Post Photo/Video
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Save changes
              </button>
            </div>
          </div>

          {/* Tab Section */}
          <div className="mt-6 border-b">
            <nav className="flex space-x-6">
              <button
                className={`pb-2 ${activeTab === 'overview' ? 'border-b-2 border-black' : 'text-gray-500'}`}
                onClick={() => handleTabClick('overview')}
              >
                Overview
              </button>
              <button
                className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-black' : 'text-gray-500'}`}
                onClick={() => handleTabClick('reviews')}
              >
                Reviews
              </button>
              <button
                className={`pb-2 ${activeTab === 'photos' ? 'border-b-2 border-black' : 'text-gray-500'}`}
                onClick={() => handleTabClick('photos')}
              >
                Photos & Videos
              </button>
            </nav>
          </div>

          <div className="mt-4">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'reviews' && <Reviews />}
            {activeTab === 'photos' && <PhotosVideos />}
          </div>
        </main>
      </div>
    </>
  );
}
