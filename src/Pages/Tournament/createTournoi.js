import React, { createContext, useContext, useState } from 'react'
import Input from 'Components/Common/Input'
import { useNavigate } from 'react-router-dom'
import { tournamentCreateFn } from 'Services/tournament'
import { CreateTournamentSchema } from 'Schemas'
import { TokenContext } from 'Context'


const CreateTournoi = () => {
    const [messageError, setMessageError] = useState(null);
    const ThemeProvider = createContext(null);
    const theme = useContext(ThemeProvider);
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        try {
            const checkBox = formData.get("isSolo");
            const data = {
                "jeux" : formData.get("jeux"),
                "titreTournoi" : formData.get("titreTournoi"),
                "descriptionTournoi" : formData.get("descriptionTournoi"),
                "dateTournoi" : formData.get("dateTournoi"),
                "isSolo" : checkBox === "on" ? true : false,
                "récompensePoint" : parseInt(formData.get("récompensePoint"), 10),
                "nbJoueursMax" : parseInt(formData.get("nbJoueursMax"), 10)
            }
            if(CreateTournamentSchema.validateSync(data)) {
                await tournamentCreateFn(token, data).then((response) => {
                    return navigate("/tournament");
                });
            }
        }
        catch(error) {
            if(typeof error.response !== "undefined") {
                setMessageError(error.response.data);
            }
            else {
                setMessageError(error.errors[0]);
            }
        }
    }

    return <div className="flex-wrap flex">
        <div className="flex-wrap flex content-center justify-center w-full h-dvh">
            <form className='h-4/5 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3' onSubmit={handleSubmit}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight" style={{'text-color' : theme}}>
                        Créer un tournoi à Autotournament
                    </h2>
                </div>
                <Input name='jeux' key={'jeux'} />
                <Input name='titreTournoi' key={'titreTournoi'} />
                <Input name='descriptionTournoi' key={'descriptionTournoi'} />

                <div className='flex justify-between'>
                    <label htmlFor="dateTournoi" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        date du tournoi
                    </label>
                    <div className="mt-2">
                            <input
                                id="dateTournoi"
                                name="dateTournoi"
                                type="date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <label htmlFor="isSolo" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        isSolo ?
                    </label>
                    <div className="mt-2">
                            <input
                                id="isSolo"
                                name="isSolo"
                                type="checkBox"
                            />
                    </div>
                </div>

                <div>
                    <label htmlFor="récompensePoint" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        récompense du tournoi
                    </label>
                    <div className="mt-2">
                            <input
                                id="récompensePoint"
                                name="récompensePoint"
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                required
                            />
                    </div>
                </div>

                <div>
                    <label htmlFor="nbJoueursMax" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        nombre de joueurs du tournoi
                    </label>
                    <div className="mt-2">
                        <select name="nbJoueursMax" id="nbJoueursMax" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6'>
                            <option value="8">8</option>
                            <option value="16" selected>16</option>
                            <option value="32">32</option>
                            <option value="64">64</option>
                        </select>
                    </div>
                </div>


                <p className="text-lg text-red-500 font-medium" onClick={() => setMessageError('')} >{messageError ? messageError : ""}</p>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Créer Tournoi
                </button>
                </div>
            </form>
        </div>
    </div>
}

export default CreateTournoi
