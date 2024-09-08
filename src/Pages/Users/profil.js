import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { profilDataFn, profilModifyFn } from 'Services/Users';
import { SignupSchema } from 'Schemas';
import { TokenContext } from 'Context';

const Profil = () => {
    const [messageError, setMessageError] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudonyme, setPseudonyme] = useState('');

    const navigate = useNavigate();
    const { token, setToken } = useContext(TokenContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            mail,
            pseudonyme,
            password,
        };
        try {
            if (SignupSchema.validateSync(data)) {
                await profilModifyFn(token, data).then((response) => {
                    setToken(response.data.token);
                    localStorage.setItem('authToken', response.data.token);
                    navigate("/");
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
        profilDataFn(token).then((response) => {
            if (!ignore) {
                const user = response.data[0];
                setMail(user.mail);
                setPseudonyme(user.pseudonyme);
            }
        });
        return () => {
            ignore = true;
        };
    }, [token]);

    return (
        <div className="flex-wrap flex">
            <div className="flex-wrap flex content-center justify-center w-full h-dvh">
                <form className="h-4/5 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3" onSubmit={handleSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                            Modifier son profil Autotournament
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

                    <p className="text-lg text-red-500 font-medium" onClick={() => setMessageError('')}>{messageError || ""}</p>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Modifier son profil
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profil;
