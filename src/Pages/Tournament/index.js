import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { tournamentDataFn, tournamentDeleteFn } from 'Services/tournament';
import { TokenContext } from 'Context'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Tournament = () => {
  const rowsArray = useData();
  const { token } = useContext(TokenContext);
  const [messageError, setMessageError] = useState(null);
  const navigate = useNavigate();

  async function handleDelete(id) {
    try {
        await tournamentDeleteFn(token, id).then(() => {
            navigate("/tournament");
        });
    } catch (error) {
      if (error.response) {
          setMessageError(error.response.data);
      }
    }
  }

  function useData() {
    const [dataItem, setDataItem] = useState(null);

    useEffect(() => {
      let ignore = false;
      tournamentDataFn().then((response) => {
        if(!ignore)
        {
          setDataItem(response.map(tournament =>
              <TableRow
                key={tournament.idTournoi}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell>{tournament.jeux}</TableCell>
              <TableCell align="right">{tournament.titreTournoi}</TableCell>
              <TableCell align="right">{tournament.descriptionTournoi}</TableCell>
              <TableCell align="right">{tournament.dateTournoi}</TableCell>
              <TableCell align="right">{tournament.récompensePoint}</TableCell>
              <TableCell align="right">{tournament.isSolo}</TableCell>
              <TableCell align="center" className='flex justify-around'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(tournament.idTournoi)}>
                    Supprimer
                </button>
                <Link to={`/tournoi/${tournament.idTournoi}`}>
                  <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Modifier
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))
        }
      });
      return () => {
        ignore = true;
      };
    }, []);
    return dataItem;
  }

  return (<div className="flex flex-col">
    <div className='w-full flex justify-around my-5'>
      <h2>Tableau des tournois d'AutoTournament</h2>
      <p className="text-lg text-red-500 font-medium">{messageError || ""}</p>
      <Link to="/createTournoi">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Créer un tournoi
        </button>
      </Link>
    </div>
    <div className='flex justify-center px-8'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>jeux</TableCell>
              <TableCell align="right">titre tournoi</TableCell>
              <TableCell align="right">description tournoi</TableCell>
              <TableCell align="right">date du tournoi</TableCell>
              <TableCell align="center">récompense du tournoi</TableCell>
              <TableCell align="center">isSolo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsArray}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>)
}

export default Tournament