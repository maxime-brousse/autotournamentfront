import NotFound from 'NotFound'
import { AboutUs, ContactUs, Home, Tournament, Users } from 'Pages'
import { SignIn, SignUp } from 'Authentication'

/**
 * Array of route objects defining the routes for the application.
 * @type {Array<{
 *   id: number,
 *   path: string,
 *   element: JSX.Element,
 *   title: string,
 *   status: boolean
 * }>}
 */
const routes = [
  {
    id: 0,
    path: '*',
    element: <NotFound />,
    title: '404 Not Found',
    status: true,
  },
  {
    id: 1,
    path: '/',
    element: <Home />,
    title: 'Home',
    status: true,
  },
  {
    id:2,
    path: '/Users',
    element: <Users />,
    title: 'utilisateurs',
    status: true,
  },
  {
    id: 3,
    path: '/tournament',
    element: <Tournament />,
    title: 'tournois',
    status: true,
  },
  {
    id: 4,
    path: '/about-us',
    element: <AboutUs />,
    title: 'à propos',
    status: true,
  },
  {
    id: 5,
    path: '/contact-us',
    element: <ContactUs />,
    title: 'nous contactez',
    status: true,
  },
  {
    id: 6,
    path: '/sign-up',
    element: <SignUp />,
    title: 'se connecter',
    status: true,
  },
  {
    id: 7,
    path: '/sign-in',
    element: <SignIn />,
    title: 's\'inscrire',
    status: true,
  },
]

export default routes
