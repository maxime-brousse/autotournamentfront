

import React, { createContext, useContext } from 'react'

/**
 * Card component.
 * Represents a card element with a title, date, image, and text content.
 * @param {Object} props - Component props.
 * @returns {JSX.Element} Card component JSX.
 */
const PasswordInput = () => {
    const ThemeProvider = createContext(null);
    const theme = useContext(ThemeProvider);
return (
    <div>
        <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
                Mot de passe
            </label>
            <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Mot de passe oublier ?
                </a>
            </div>
        </div>
        <div className="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
    </div>
)
}

export default PasswordInput
