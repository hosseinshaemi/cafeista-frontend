import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './NavBar.css';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');
  const [activeIcon, setActiveIcon] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="bottom-navigation">
      <BottomNavigation sx={{ height:"70px", backgroundColor: '#FFFF' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' , alignItems:'center'}} value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="profile"
          icon={<PermIdentityIcon sx={{ color: activeIcon === 'profile' ? 'orange' : '#6D523E'  , fontSize:40}} />}
          className={activeIcon === 'profile' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('profile')}
        />
        <BottomNavigationAction
          value="home"
          icon={<HomeOutlinedIcon sx={{ color: activeIcon === 'home' ? 'orange' : '#6D523E' , fontSize:40}} />}
          className={activeIcon === 'home' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('home')}
        />
        <BottomNavigationAction
          value="location"
          icon={<PlaceOutlinedIcon sx={{ color: activeIcon === 'location' ? 'orange' : '#6D523E' , fontSize:40}} />}
          className={activeIcon === 'location' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('location')}
        />
        <BottomNavigationAction
          value="search"
          icon={<SearchOutlinedIcon sx={{ color: activeIcon === 'search' ? 'orange' : '#6D523E' , fontSize:40}} />}
          className={activeIcon === 'search' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('search')}
        />
        <BottomNavigationAction
          value="shoppingBag"
          icon={<ShoppingCartOutlinedIcon sx={{ color: activeIcon === 'shoppingBag' ? 'orange' : '#6D523E' , fontSize:40}} />}
          className={activeIcon === 'shoppingBag' ? 'custom-label-color' : ''}
          onClick={() => handleIconClick('shoppingBag')}
        />
      </BottomNavigation>
    </div>
  );
}