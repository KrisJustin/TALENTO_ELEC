import { Grid, Card, CardContent, Typography, Avatar, Container, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function AboutUs() {
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
            <Button color="inherit" href="/dashboard/clientdashboard" sx={{ color: '#white' }}>Home</Button>
            <Button color="inherit" href="/dashboard/category" sx={{ color: 'white' }}>Category</Button>
            <Button color="inherit" href="" sx={{ color: 'white' }}>About Us</Button>
            <Button color="inherit" href="/dashboard/clientprofile" sx={{ color: 'white' }}>Profile</Button>
            <Button color="inherit" href="/authentication/login" sx={{ color: 'white' }}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            About TALENTO
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            TALENTO is an online talent booking platform where you can find performers for any event. 
            From singers to dancers, musicians to bands, we have all the talent you need to make your event unforgettable.
          </Typography>

          <Typography variant="h4" align="center" gutterBottom sx={{ mt: 6 }}>
            Meet the Team
          </Typography>

          {/* Meet the Team Section */}
          <Grid container spacing={4} justifyContent="center">
            {[
              { name: 'John Tumulak', role: 'Leader', imgSrc: 'john.jpg' },
              { name: 'Ninz Garbo', role: 'Hacker', imgSrc: '/ninz.jpg' },
              { name: 'Ian Jeffprox Casul', role: 'Hipster', imgSrc: '/ayan.jpg' },
              { name: 'James Albejos', role: 'Tester', imgSrc: '/gar.jpg' },
              { name: 'Justin Oporto', role: 'Member', imgSrc: 'justin.jpg' },
              { name: 'Karl Linao', role: 'Member', imgSrc: '/linao.jpg' },
            ].map((member, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, textAlign: 'center', boxShadow: 3 }}>
                  <Avatar
                    alt={member.name}
                    src={member.imgSrc}
                    sx={{ width: 100, height: 100, mx: 'auto', mt: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
