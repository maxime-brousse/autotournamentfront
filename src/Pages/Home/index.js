import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'Components/Home/Card'
import RightColumn from 'Components/Home/RightColumn'
import { tournamentDataFn } from 'Services/tournament'

/**
 * Home component.
 * Represents the home page of the application.
 * @returns {JSX.Element} Home component JSX.
 */
export default function Home() {
  const results = useData();

  function useData() {
    const [dataItem, setDataItem] = useState(null);
    useEffect(() => {
      let ignore = false;
      tournamentDataFn().then((response) => {
        if(!ignore)
        {
          setDataItem(response.map(tournament =>
            <Card title={tournament.titreTournoi} date={tournament.dateTournoi} description={tournament.descriptionTournoi}  />
          ))
        }
      });
      return () => {
        ignore = true;
      };
    });
    return dataItem;
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4 md:w-3/4">
        {/* Display two cards */}
        {results}
      </div>
      {/* Display right column component */}
      <RightColumn />
    </div>
  )
}