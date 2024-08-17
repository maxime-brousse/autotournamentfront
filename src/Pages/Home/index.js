import React from 'react'
import Card from 'Components/Home/Card'
import RightColumn from 'Components/Home/RightColumn'

/**
 * Home component.
 * Represents the home page of the application.
 * @returns {JSX.Element} Home component JSX.
 */
const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4 md:w-3/4">
        {/* Display two cards */}
        <Card title="TITLE HEADING" date="Title description, Apr 4, 2024" imageHeight="200px" description='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco.' />
        <Card title="TITLE HEADING" date="Title description, Apr 4, 2024" imageHeight="200px" description='une licorne' />
      </div>
      {/* Display right column component */}
      <RightColumn />
    </div>
  )
}

export default Home
