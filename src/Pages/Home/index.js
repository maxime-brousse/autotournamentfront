import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'Components/Home/Card'
import { tournamentDataFn } from 'Services/tournament'
import RightColumn from 'Components/Home/RightColumn';

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
            <Card key={tournament.idTournoi} title={tournament.titreTournoi} date={tournament.dateTournoi} jeux={tournament.jeux} description={tournament.descriptionTournoi}  />
          ))
        }
      });
      return () => {
        ignore = true;
      };
    }, []);
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