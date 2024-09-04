import React, { useContext, useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { TokenContext } from 'Context';
import { decodeToken, isExpired } from 'react-jwt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

/**
 * Header component.
 * Represents the header section of the application.
 * @param {Object} props - Component props.
 * @param {function} props.setMode - Function to set the theme mode.
 * @param {'dark' | 'light'} props.mode - Current theme mode ('dark' or 'light').
 * @returns {JSX.Element} Header component JSX.
 */
const Header = ({ setMode, mode }) => {
  // Determine if the mode is dark
  const isDark = mode === 'dark'
  const [mail, setMail] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isExpired(token)) {
      const decodedToken = decodeToken(token);
      setMail(decodedToken.mail);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, [token, setMail, setIsAdmin]);

  function handleLogout() {
      setToken('');
      setIsAdmin(false);
      localStorage.removeItem('authToken');
      navigate('/');
  }

  return (
    <Paper className="flex flex-col !rounded-none">
      <div className="flex flex-col gap-3 p-6 text-center">
        <h1 className="text-4xl font-bold">AutoTournament</h1>
      </div>
      <div className="flex items-center justify-between px-3 bg-black">
        <div className="flex items-center gap-3">
          {/* Navigation links */}
          <Link to="/" className="block float-left p-3 text-white hover:text-black hover:bg-white">
            Acceuil
          </Link>
          { isAdmin ? (
            <Link
              to="/users"
              className="block float-left p-3 text-white hover:text-black hover:bg-white"
            >
              Utilisateurs
            </Link>
            ) : null
          }
          { isAdmin ? (
            <Link
              to="/tournament"
              className="block float-left p-3 text-white hover:text-black hover:bg-white"
            >
              Tournois
            </Link>
            ) : null
          }
          <Link
            to="/about-us"
            className="block float-left p-3 text-white hover:text-black hover:bg-white"
          >
            à propos
          </Link>
          <Link
            to="/contact-us"
            className="block float-left p-3 text-white hover:text-black hover:bg-white"
          >
            contactez nous
          </Link>
        </div>
        {/* Dark mode / Light mode toggle button */}
        <div className='flex items-center gap-3'>
          { token && !isExpired(token) ?
            <div className='flex flex-row items-center'>
              <LogoutIcon onClick={() => handleLogout()} style={{ cursor : 'pointer', color:'white' }} />
              <Link to="/profil" className='block float-left p-3 text-white hover:text-black hover:bg-white'>{mail}</Link>
            </div> :
            <Link
              to="/sign-up"
              className="block float-left p-3 text-white hover:text-black hover:bg-white"
            >
              Se connecter
            </Link>
          }
          <IconButton onClick={() => setMode(isDark ? 'light' : 'dark')} className="float-right">
            {isDark ? <LightMode color="warning" /> : <DarkMode color="info" />}
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}

export default Header
