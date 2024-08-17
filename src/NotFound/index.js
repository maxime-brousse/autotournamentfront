import { Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

/**
 * NotFound component.
 * Represents the 404 Not Found page of the application.
 * @returns {JSX.Element} NotFound component JSX.
 */
const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - cette page n'a pas été trouvée
      </Typography>
      <Typography variant="body1" gutterBottom>
        La page que vous chercher n'existe plus
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" color="primary">
        retourner à la page d'acceuil
      </Button>
    </Container>
  )
}

export default NotFound
