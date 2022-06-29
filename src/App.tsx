import './App.css';
import HeaderComponent from './pages/Header/HeaderComponent';
import RetailerComponent from './pages/Retailer/RetailerComponents';
import { Grid} from '@mui/material';

function App() {
  return (
    <div>
     <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderComponent/>
        </Grid>
        <Grid item xs={12} className="lheight">
        <RetailerComponent/>
        </Grid>
     </Grid>
     
     </div>
  );
}

export default App;
