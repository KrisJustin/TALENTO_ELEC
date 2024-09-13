"use client";

import Head from 'next/head';
import { Typography, Toolbar, AppBar } from '@mui/material';
import { useState } from 'react';
import Overview from './overview/page';
import Reviews from './review/page';
import PhotosVideos from './photos_vid/page';


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>Profile - TALENTO</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-gray-800 text-white">
          <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TALENTO
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className="p-4 space-y-4">
            <a href="/dashboard/talentdashboard" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-600">
              <span>Dashboard</span>
            </a>
            <a href="/portfolio" className="flex items-center space-x-2 p-2 rounded bg-gray-700 hover:bg-gray-600">
              <span>Portfolio</span>
            </a>
            <a href="/messages" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <span>Messages</span>
            </a>
            <a href="/booking" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <span>Booking</span>
            </a>
            <a href="/authentication/login" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <span>Log Out</span>
            </a>
          </nav>
        </aside>

       
        <main className="flex-1 p-6 bg-white">
          
          <div className="bg-white shadow-md rounded p-4">
            <div className="flex items-center space-x-4">
              <img
                src="profile.jpg" 
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <Typography variant="h4" component="div">
                  Ian Jeffprox Casul
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Classical Singer
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Cordova Express Shesh
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
