import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataFn, usersModifyFn } from 'Services/Users'
import { CreateUserSchema } from 'Schemas'
import { TokenContext } from 'Context'
import { useParams } from 'react-router-dom';


const ModifyUser = () => {
    const [messageError, setMessageError] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudonyme, setPseudonyme] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [point, setPoint] = useState(0);

    const navigate = useNavigate();
    const { token } = useContext(TokenContext);
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            mail,
            pseudonyme,
            password,
            isAdmin,
            point
        };

        try {
            if (CreateUserSchema.validateSync(data)) {
                await usersModifyFn(token, id, data).then(() => {
                    navigate("/Users");
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
        userDataFn(token, id).then((response) => {
            if (!ignore) {
                const user = response.data[0];
                setMail(user.mail);
                setPseudonyme(user.pseudonyme);
                setIsAdmin(user.isAdmin === 1);
                setPoint(user.point);
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
                            Modifier un utilisateur d'Autotournament
                        </h2>
                    </div>
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium leading-6">
                            Mail
                        </label>
                        <div className="mt-2">
                            <input
                                id="mail"
                                name="mail"
                                type="mail"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="pseudonyme" className="block text-sm font-medium leading-6">
                            Pseudonyme
                        </label>
                        <div className="mt-2">
                            <input
                                id="pseudonyme"
                                name="pseudonyme"
                                type="text"
                                value={pseudonyme}
                                onChange={(e) => setPseudonyme(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6">
                            Mot de passe
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="isAdmin" className="block text-sm font-medium leading-6">
                            isAdmin ?
                        </label>
                        <div className="mt-2">
                            <input
                                id="isAdmin"
                                name="isAdmin"
                                type="checkbox"
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="point" className="block text-sm font-medium leading-6">
                            Point
                        </label>
                        <div className="mt-2">
                            <input
                                id="point"
                                name="point"
                                type="number"
                                value={point}
                                onChange={(e) => setPoint(parseInt(e.target.value, 10))}
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
                            Modifier utilisateur
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModifyUser;
