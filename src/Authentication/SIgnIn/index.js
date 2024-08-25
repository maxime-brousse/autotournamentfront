import React from 'react'
import Input from 'Components/Common/Input'
import PasswordInput from 'Components/Common/Input/Password'

const SignIn = () => {
  return <div className="flex-wrap flex">
      <div className="flex-wrap flex content-center justify-center w-full h-dvh">
          <form className='h-1/2 w-96 shadow-2xl rounded-xl justify-around flex flex-col border-indigo-500 border-2 p-3'>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                S'inscrire à Autotournament
              </h2>
            </div>
            <Input name='email' key={'email'} />

            <Input name='identifiant' key={'identifiant'} />

            <PasswordInput />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                S'inscrire
              </button>
            </div>
          </form>
      </div>
  </div>
}

export default SignIn
