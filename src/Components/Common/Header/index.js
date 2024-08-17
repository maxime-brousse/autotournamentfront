import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

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
          <Link
            to="/users"
            className="block float-left p-3 text-white hover:text-black hover:bg-white"
          >
            Utilisateurs
          </Link>
          <Link
            to="/tournament"
            className="block float-left p-3 text-white hover:text-black hover:bg-white"
          >
            Tournois
          </Link>
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
          <Link
            to="/sign-In"
            className="block float-left p-3 text-white hover:text-black hover:bg-white"
          >
            S'inscrire
          </Link>
          <IconButton onClick={() => setMode(isDark ? 'light' : 'dark')} className="float-right">
            {isDark ? <LightMode color="warning" /> : <DarkMode color="info" />}
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}

export default Header
