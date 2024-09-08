import React, { createContext, useContext, useState } from 'react'
import Input from 'Components/Common/Input'
import PasswordInput from 'Components/Common/Input/Password'
import { Link, useNavigate  } from 'react-router-dom'
import { ConnexionHandler } from 'Services/Connexion'
import { TokenContext } from 'Context'
import { SignInSchema } from 'Schemas'

const SignUp = () => {
  const [messageError, setMessageError] = useState(null);
  const ThemeProvider = createContext(null);
  const theme = useContext(ThemeProvider);
  const navigate = useNavigate();
  const {  setToken } = useContext(TokenContext);

  async function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      try {
        const data = {"mail" : formData.get("email"), "password" : formData.get("password")}
        console.log(data);

        if(SignInSchema.validateSync(data)) {
          await ConnexionHandler(data).then(response => {
            setToken(response.data.token);
            localStorage.setItem('authToken', response.data.token);
            return navigate("/");
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
          <form className='h-1/2 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3' onSubmit={handleSubmit}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight" style={{'text-color' : theme}}>
                Se connecter à Autotournament
              </h2>
            </div>
            <Input name='email' key={'email'} />

            <PasswordInput />

            <div className="text-sm font-medium">
                <p>
                  première connexion ?
                  <Link
                    to="/sign-in"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    S'inscrire
                  </Link>
                </p>
            </div>

            <p className="text-lg text-red-500 font-medium" onClick={() => setMessageError('')} >{messageError ? messageError : ""}</p>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>
      </div>
  </div>
}

export default SignUp

