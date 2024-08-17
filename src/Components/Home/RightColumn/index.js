import React from 'react'
import { Paper, useTheme } from '@mui/material'
import Card from '../Card'

/**
 * RightColumn component.
 * Represents the right column section of the home page.
 * @returns {JSX.Element} RightColumn component JSX.
 */
const RightColumn = () => {
  // Determine if the theme mode is dark
  const isDark = useTheme().palette.mode === 'dark'

  return (
    <div className="w-full !rounded-none p-4 md:w-1/4">
      {/* About Me card */}
      <Card title="About Me" imageHeight="100px" />
      {/* Popular Post section */}
      <Paper className="p-6 mb-6 bg-white rounded-lg shadow-lg" elevation={2}>
        <h3 className="mb-4 text-xl">Popular Post</h3>
        {/* Three image placeholders */}
        {[1, 2, 3].map((index) => (
          <Paper
            key={index}
            elevation={0}
            className="flex items-center justify-center mb-2"
            style={{ height: '100px', backgroundColor: isDark ? '#121212' : '#E4E4E7' }}
          >
            Image {index}
          </Paper>
        ))}
      </Paper>
      {/* Follow Me section */}
      <Paper className="p-6 bg-white rounded-lg shadow-lg" elevation={2}>
        <h3 className="mb-4 text-xl">Follow Me</h3>
        <p>Some text..</p>
      </Paper>
    </div>
  )
}

export default RightColumn
