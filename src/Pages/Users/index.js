import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { usersDataFn } from 'Services/Users';
import { TokenContext } from 'Context'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Users = () => {
  const rowsArray = useData();
  const { token } = useContext(TokenContext);

  function useData() {
    const [dataItem, setDataItem] = useState(null);
    useEffect(() => {
      let ignore = false;
      usersDataFn(token).then((response) => {
        if(!ignore)
        {
          setDataItem(response.map(user =>
            <TableRow
                key={user.idUtilisateur}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell>{user.mail}</TableCell>
              <TableCell align="right">{user.pseudonyme}</TableCell>
              <TableCell align="right">{user.point}</TableCell>
              <TableCell align="right">{user.isAdmin}</TableCell>
              <TableCell align="center" className='flex justify-around'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Supprimer
                </button>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                  Modifier
                </button>
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

  return (<div className="flex flex-col h-[87vh]">
    <div className='w-full flex justify-around my-5'>
      <h2>Tableau des Utilisateurs d'AutoTournament</h2>
      <Link to="/createUser">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Créer un Utilisateur
        </button>
      </Link>
    </div>
    <div className='flex justify-center px-8'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mail</TableCell>
              <TableCell align="right">Pseudonyme</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">isAdmin</TableCell>
              <TableCell align="center">Actions</TableCell>
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

export default Users
