import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { tournamentDataFn, tournamentInscription } from 'Services/tournament';
import { decodeToken, isExpired } from 'react-jwt';
import { TokenContext } from 'Context'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Recherche = () => {
  const rowsArray = useData();
  const { token } = useContext(TokenContext);
  const [messageError, setMessageError] = useState(null);
  const [messageSuccess, setMessageSuccess] = useState(null);

  async function handleInscription(id) {
    try {
        var mail = null
        if(!isExpired(token)) {
          const decodedToken = decodeToken(token);
          mail = decodedToken.mail;
        }
        await tournamentInscription(token, id, mail).then(() => {
            setMessageSuccess('l\'inscription a bien été faite');
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
                <TableCell align='right'>{tournament.nbJoueurs} </TableCell>
                <TableCell align="right">{tournament.nbJoueurs} / {tournament.nbJoueursMax}
                  { tournament.nbJoueurs >= tournament.nbJoueursMax ?
                    null : <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleInscription(tournament.idTournoi)}>
                    S'inscrire
                </button>
                  }
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
      <h2>recherche des tournois d'AutoTournament</h2>
      <p className="text-lg text-red-500 font-medium" onClick={() => setMessageError('')}>{messageError || ""}</p>
      <p className="text-lg text-green-500 font-medium" onClick={() => setMessageSuccess('')}>{messageSuccess || ""}</p>
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
              <TableCell align="center">Inscription</TableCell>
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

export default Recherche
