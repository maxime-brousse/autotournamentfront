import React, { useEffect, useState } from 'react'
import { Paper, useTheme } from '@mui/material'
import { homeScoresFn } from 'Services/Home/topScore'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

/**
 * RightColumn component.
 * Represents the right column section of the home page.
 * @returns {JSX.Element} RightColumn component JSX.
 */
const RightColumn = () => {
  const results = useData();

  function useData() {
    const [dataItem, setDataItem] = useState(null);

    useEffect(() => {
      var compteur = -1;
      const colorArray = ["gold", "silver", "#CD7F32"];

      let ignore = false;
      homeScoresFn().then((response) => {
        if(!ignore)
        {
          setDataItem(response.map(user => {
            compteur = compteur + 1;
            return <h2 key={compteur} className='sm-text'><EmojiEventsIcon  style={{ fontSize: 40, color: colorArray[compteur] }} />{user.pseudonyme} : {user.point} points</h2>
          }))
        }
      });
      return () => {
        ignore = true;
      };
    }, []);
    return dataItem;
  }

  return (
    <div className="w-full !rounded-none p-4 md:w-1/4">
      {/* Popular Post section */}
      <Paper className="p-6 mb-6 bg-white rounded-lg shadow-lg" elevation={2}>
        <h3 className="mb-4 text-xl">Hall of fame</h3>
        {results}
      </Paper>
    </div>
  )
}

export default RightColumn
