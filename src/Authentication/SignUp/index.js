import React from 'react'
import Input from 'Components/Common/Input'
import PasswordInput from 'Components/Common/Input/Password'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return <div className="flex-wrap flex">
      <div className="flex-wrap flex content-center justify-center w-full h-dvh">
          <form className='h-1/2 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3'>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Se connecter à Autotournament
              </h2>
            </div>
            <Input name='email' key={'email'} />

            <PasswordInput />

            <div className="text-sm">
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

