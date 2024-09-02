import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tournamentModifyFn, tournoiDataFn } from 'Services/tournament'
import { CreateTournamentSchema } from 'Schemas'
import { TokenContext } from 'Context'
import { useParams } from 'react-router-dom';


const ModifyTournoi = () => {
    const ThemeProvider = createContext(null);
    const theme = useContext(ThemeProvider);
    const [messageError, setMessageError] = useState(null);
    const [jeux, setJeux] = useState('');
    const [dateTournoi, setDateTournoi] = useState(null);
    const [titreTournoi, setTitreTournoi] = useState('');
    const [descriptionTournoi, setDescriptionTournoi] = useState('');
    const [isSolo, setIsSolo] = useState(false);
    const [récompensePoint, setRécompensePoint] = useState(0);

    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            jeux,
            dateTournoi,
            descriptionTournoi,
            récompensePoint,
            isSolo,
            titreTournoi
        };

        try {
            if (CreateTournamentSchema.validateSync(data)) {
                await tournamentModifyFn(token, id, data).then(() => {
                    navigate("/tournament");
                });
            }
        } catch (error) {
            if (error.response) {
                setMessageError(error.response.data);
            } else {
                setMessageError(error.errors[0]);
            }
        }
    }

    useEffect(() => {
        let ignore = false;
        tournoiDataFn(token, id).then((response) => {
            if (!ignore) {
                const tournoi = response.data[0];
                setJeux(tournoi.jeux);
                setTitreTournoi(tournoi.titreTournoi);
                setDescriptionTournoi(tournoi.descriptionTournoi);
                setDateTournoi(tournoi.dateTournoi.slice(0, 10));
                setIsSolo(tournoi.isSolo === 1);
                setRécompensePoint(tournoi.récompensePoint);
            }
        });
        return () => {
            ignore = true;
        };
    }, [id, token]);

    return (
        <div className="flex-wrap flex">
            <div className="flex-wrap flex content-center justify-center w-full h-dvh">
                <form className="h-4/5 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3" onSubmit={handleSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                            Modifier un tournoi d'Autotournament
                        </h2>
                    </div>
                    <div>
                        <label htmlFor="Jeux" className="block text-sm font-medium leading-6">
                            Jeux
                        </label>
                        <div className="mt-2">
                            <input
                                id="jeux"
                                name="jeux"
                                type="jeux"
                                value={jeux}
                                onChange={(e) => setJeux(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="titreTournoi" className="block text-sm font-medium leading-6">
                            titre du Tournoi
                        </label>
                        <div className="mt-2">
                            <input
                                id="titreTournoi"
                                name="titreTournoi"
                                type="text"
                                value={titreTournoi}
                                onChange={(e) => setTitreTournoi(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="descriptionTournoi" className="block text-sm font-medium leading-6">
                            Description du tournoi
                        </label>
                        <div className="mt-2">
                            <input
                                id="descriptionTournoi"
                                name="descriptionTournoi"
                                type="descriptionTournoi"
                                value={descriptionTournoi}
                                onChange={(e) => setDescriptionTournoi(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="dateTournoi" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                            date du tournoi
                        </label>
                        <div className="mt-2">
                                <input
                                    id="dateTournoi"
                                    name="dateTournoi"
                                    type="date"
                                    value={dateTournoi}
                                    onChange={(e) => setDateTournoi(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="isSolo" className="block text-sm font-medium leading-6">
                            isSolo ?
                        </label>
                        <div className="mt-2">
                            <input
                                id="isSolo"
                                name="isSolo"
                                type="checkbox"
                                checked={isSolo}
                                onChange={(e) => setIsSolo(e.target.checked)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="récompensePoint" className="block text-sm font-medium leading-6">
                            récompense du tournoi
                        </label>
                        <div className="mt-2">
                            <input
                                id="récompensePoint"
                                name="récompensePoint"
                                type="number"
                                value={récompensePoint}
                                onChange={(e) => setRécompensePoint(parseInt(e.target.value, 10))}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>

                    <p className="text-lg text-red-500 font-medium">{messageError || ""}</p>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Modifier tournoi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModifyTournoi;
