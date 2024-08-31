import { Card as MuiCard} from '@mui/material'

/**
 * Card component.
 * Represents a card element with a title, date, image, and text content.
 * @param {Object} props - Component props.
 * @param {string} props.title - Title of the card.
 * @param {string} props.date - Date of the card.
 * @param {string} props.jeux - Height of the image container.
 * @param {string} props.description - a description for the container
 * @returns {JSX.Element} Card component JSX.
 */
const Card = ({ title, date, jeux, description }) => {

  const urlImg = 'images/' + jeux.toLowerCase() + '.png';

  return (
    <MuiCard className="p-6 mb-6 bg-white rounded-lg shadow-lg" elevation={2}>
      {/* Card title */}
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      {/* Card date */}
      <h5 className="mb-4 text-gray-500">{date}</h5>
      {/* Image container */}
      <div className='grid w-full place-items-center rounded-lg p-6 aspect-video' >
          <img src={urlImg} alt='une présentation du jeu concernant ce tournoi'/>
      </div>
      {/* Card content */}
      <p>
        {description}
      </p>
    </MuiCard>
  )
}

export default Card
