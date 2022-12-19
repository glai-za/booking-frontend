import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';

const Header = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PetsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dog Salon
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button LinkComponent={Link} to="/" color="inherit">
            Home
          </Button>
          <Button LinkComponent={Link} to="/services" color="inherit">
            Services
          </Button>
          <Button LinkComponent={Link} to="/book" color="inherit">
            Book Now
          </Button>
          {!loggedIn && <>
            <Button LinkComponent={Link} to="/auth" color="inherit">
              Login
            </Button>
            </>}
          {loggedIn && (
            <Button LinkComponent={Link} to="/auth" color="inherit"
            onClick={()=>dispatch(authActions.logout())}>
              Logout
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
