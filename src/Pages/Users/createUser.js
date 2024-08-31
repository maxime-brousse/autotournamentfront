import React, { createContext, useContext, useState } from 'react'
import Input from 'Components/Common/Input'
import { useNavigate } from 'react-router-dom'
import PasswordInput from 'Components/Common/Input/Password'
import { usersCreateFn } from 'Services/Users'
import { CreateUserSchema } from 'Schemas'
import { TokenContext } from 'Context'


const CreateUser = () => {
    const [messageError, setMessageError] = useState(null);
    const ThemeProvider = createContext(null);
    const theme = useContext(ThemeProvider);
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        try {
            const checkBox = formData.get("isAdmin");
            const data = {
                "mail" : formData.get("email"),
                "password" : formData.get("password"),
                "pseudonyme" : formData.get("identifiant"),
                "isAdmin" : checkBox === "on" ? true : false,
                "point" : parseInt(formData.get("point"), 10)
            }
            if(CreateUserSchema.validateSync(data)) {
                await usersCreateFn(token, data).then((response) => {
                    return navigate("/Users");
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
                        Créer un utilisateur à Autotournament
                    </h2>
                </div>
                <Input name='email' key={'email'} />

                <Input name='identifiant' key={'identifiant'} />

                <PasswordInput />


                <div className='flex justify-between'>
                    <label htmlFor="isAdmin" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        isAdmin ?
                    </label>
                    <div className="mt-2">
                            <input
                                id="isAdmin"
                                name="isAdmin"
                                type="checkBox"
                            />
                    </div>
                </div>

                <div>
                    <label htmlFor="point" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                        Point
                    </label>
                    <div className="mt-2">
                            <input
                                id="point"
                                name="point"
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                required
                            />
                    </div>
                </div>


                <p className="text-lg text-red-500 font-medium" >{messageError ? messageError : ""}</p>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Créer utilisateur
                </button>
                </div>
            </form>
        </div>
    </div>
}

export default CreateUser
