

import React, { createContext, useContext } from 'react'

/**
 * Card component.
 * Represents a card element with a title, date, image, and text content.
 * @param {Object} props - Component props.
 * @param {string} props.name - Title of the card.
 * @returns {JSX.Element} Card component JSX.
 */
const Input = ({ name }) => {
    const ThemeProvider = createContext(null);
    const theme = useContext(ThemeProvider);
    const renderName = name[0].toUpperCase() + name.slice(1);

return (
    <div>
        <label htmlFor={name} className="block text-sm font-medium leading-6" style={{'text-color' : theme}}>
            {renderName}
        </label>
        <div className="mt-2">
            <input
                id={name}
                name={name}
                type={name}
                required
                autoComplete={name}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
    </div>
)
}

export default Input
