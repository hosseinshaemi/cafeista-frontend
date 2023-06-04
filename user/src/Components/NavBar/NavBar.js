import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './NavBar.css';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');
  const [activeIcon, setActiveIcon] = React.useState('recents');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    switch (icon) {
      case 'profile':
        navigate('/home/Profile');
        break;
      case 'home':
        navigate('/home');
        break;
      case 'location':
        navigate('/home/map');
        break;
      case 'search':
        navigate('/home/Search');
        break;
      case 'shoppingBag':
        navigate('/home/Basket');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bottom-navigation">
      <BottomNavigation sx={{ height:"70px", backgroundColor: '#FFFF' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' , alignItems:'center',borderRadius:"40px"}} value={value} onChange={handleChange}>
        <div style={{display:"flex", flexDirection:"row", width:"50%", justifyContent:"space-around"}}>
        <BottomNavigationAction
          value="profile"
          icon={<PermIdentityIcon sx={{ color: activeIcon === 'profile' ? 'orange' : '#6D523E'  , fontSize:35}} />}
          className={activeIcon === 'profile' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('profile')}
        />
        <BottomNavigationAction
          value="home"
          icon={<HomeOutlinedIcon sx={{ color: activeIcon === 'home' ? 'orange' : '#6D523E' , fontSize:35 }} />}
          className={activeIcon === 'home' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('home')}
        />
        <BottomNavigationAction
          value="location"
          icon={<PlaceOutlinedIcon sx={{ color: activeIcon === 'location' ? 'orange' : '#6D523E' , fontSize:35}} />}
          className={activeIcon === 'location' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('location')}
        />
        <BottomNavigationAction
          value="search"
          icon={<SearchOutlinedIcon sx={{ color: activeIcon === 'search' ? 'orange' : '#6D523E' , fontSize:35}} />}
          className={activeIcon === 'search' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('search')}
        />
        <BottomNavigationAction
          value="shoppingBag"
          icon={<ShoppingCartOutlinedIcon sx={{ color: activeIcon === 'shoppingBag' ? 'orange' : '#6D523E' , fontSize:35}} />}
          className={activeIcon === 'shoppingBag' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('shoppingBag')}
        />
        </div>
      </BottomNavigation>
    </div>
  );
}