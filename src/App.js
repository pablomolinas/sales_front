import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navbar';

function App() {
  return (
    <Grid container>
      <NavBar/>
      <Container maxWidth="xl" sx={{ p:3 }}>
        <Outlet />
      </Container>
    </Grid>
  );
}

export default App;
