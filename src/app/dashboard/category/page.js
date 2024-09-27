import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function CategoryPage() {
  return (
    <>
      {/* Header or AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logotalentos.png" 
              alt="Talento Logo" 
              style={{ height: '32px', marginRight: '12px' }} 
            />
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              TALENTO
            </Typography>
          </div>
          <div>
            <Button color="inherit" href="/dashboard/clientdashboard" sx={{ color: 'white' }}>Home</Button>
            <Button color="inherit" href="" sx={{ color: 'white' }}>Category</Button>
            <Button color="inherit" href="/dashboard/aboutus" sx={{ color: 'white' }}>About Us</Button>
            <Button color="inherit" href="/dashboard/clientprofile" sx={{ color: 'white' }}>Profile</Button>
            <Button color="inherit" href="/authentication/login" sx={{ color: 'white' }}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Browse By Category
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'Singer', imgSrc: '/singer.png', link: '/singers' },  
            { name: 'Dancer', imgSrc: '/dancer.png', link: '/dancers' },
            { name: 'Musician', imgSrc: '/musician.png', link: '/musicians' },
            { name: 'Band', imgSrc: '/band.png', link: '/bands' },
            { name: 'Entertainer', imgSrc: '/entertainer.png', link: '/entertainers' },  // New Category
            { name: 'DJ', imgSrc: '/dj.png', link: '/djs' },  // New Category
          ].map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <a href={category.link} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345, mx: 'auto', textAlign: 'center', boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.imgSrc}
                    alt={category.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
