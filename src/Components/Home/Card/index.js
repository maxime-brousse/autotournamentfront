import { Card as MuiCard, Paper, useTheme } from '@mui/material'

/**
 * Card component.
 * Represents a card element with a title, date, image, and text content.
 * @param {Object} props - Component props.
 * @param {string} props.title - Title of the card.
 * @param {string} props.date - Date of the card.
 * @param {string} props.imageHeight - Height of the image container.
 * @param {string} props.description - a description for the container
 * @returns {JSX.Element} Card component JSX.
 */
const Card = ({ title, date, imageHeight, description }) => {
  // Get theme mode to determine if it's dark
  const isDark = useTheme().palette.mode === 'dark'

  return (
    <MuiCard className="p-6 mb-6 bg-white rounded-lg shadow-lg" elevation={2}>
      {/* Card title */}
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      {/* Card date */}
      <h5 className="mb-4 text-gray-500">{date}</h5>
      {/* Image container */}
      <Paper
        className="flex items-center justify-center rounded"
        style={{
          height: imageHeight,
          backgroundColor: isDark ? '#121212' : '#E4E4E7',
        }}
        elevation={0}
      >
        Image
      </Paper>
      {/* Card content */}
      <p className="my-3">Some text..</p>
      <p>
        {description}
      </p>
    </MuiCard>
  )
}

export default Card
