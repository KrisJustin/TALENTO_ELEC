"use client";

import { useState } from 'react';
import Head from 'next/head';
import { Typography, Toolbar, AppBar, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function TalentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [drawerOpen, setDrawerOpen] = useState(false); 

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

        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <Typography variant="h4" component="h1" className="text-3xl font-bold">
              Dashboard
            </Typography>
            <div>
              <button className="relative focus:outline-none">
                <Typography variant="body1" component="span" className="material-icons text-gray-500 text-3xl">
                  HIRING REQUEST
                </Typography>
                <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </header>

          <section>
            <div className="space-y-6">
              <div className="bg-white shadow rounded-lg p-4 flex">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src="/juswa.jpg"
                    alt="Ian Jeffprox Casul"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 ml-4">
                  <Typography variant="h5" component="h2" className="text-xl font-bold">
                    Ian Jeffprox Casul
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="text-sm">
                    June 27, 2024
                  </Typography>
                  <Typography variant="body1" className="mt-2 text-gray-700">
                    Looking for multi-talented performer that can sing and dance for my son’s birthday.
                  </Typography>
                  <div className="mt-4 space-y-2">
                    <Typography variant="body2">
                      <strong>Event:</strong> Birthday
                    </Typography>
                    <Typography variant="body2">
                      <strong>Location:</strong> Umapad, Mandaue City
                    </Typography>
                    <Typography variant="body2">
                      <strong>Date and Time:</strong> August 5, 2024, Tuesday (5:00pm-6:00pm)
                    </Typography>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Singer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Dancer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Solo Singer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Hip hop Dancer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Male or Female</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                  <Typography variant="body2" className="text-gray-500">
                    2 Applied
                  </Typography>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Apply</button>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-4 flex">
                <div className="w-16 h-16 flex-shrink-0">
                  <div className="h-full w-full bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">N</div>
                </div>
                <div className="flex-1 ml-4">
                  <Typography variant="h5" component="h2" className="text-xl font-bold">
                    Ninz Garbo
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="text-sm">
                    August 1, 2024
                  </Typography>
                  <Typography variant="body1" className="mt-2 text-gray-700">
                    I am looking for a Singer and Guitarist for my resto bar. Please apply as soon as possible.
                  </Typography>
                  <div className="mt-4 space-y-2">
                    <Typography variant="body2">
                      <strong>Event:</strong> Resto Bar
                    </Typography>
                    <Typography variant="body2">
                      <strong>Location:</strong> Umapad, Mandaue City
                    </Typography>
                    <Typography variant="body2">
                      <strong>Date and Time:</strong> August 3, 2024, Tuesday (5:00pm-6:00pm)
                    </Typography>
                    <div className="flex space-x-2 mt-2">
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Singer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Musician</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Solo Singer</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Guitarist</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Male or Female</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                  <Typography variant="body2" className="text-gray-500">
                    2 Applied
                  </Typography>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Apply</button>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}
