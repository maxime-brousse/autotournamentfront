import NotFound from 'NotFound'
import { ContactUs, Home, Recherche, Tournament, Users } from 'Pages'
import { SignIn, SignUp } from 'Authentication'
import CreateUser from 'Pages/Users/createUser'
import ModifyUser from 'Pages/Users/modifyUser'
import CreateTournoi from 'Pages/Tournament/createTournoi'
import ModifyTournoi from 'Pages/Tournament/modifyTournoi'
import Profil from 'Pages/Users/profil'

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
    path: '/recherche',
    element: <Recherche />,
    title: 'à propos',
    status: true,
  },
  {
    id: 5,
    path: '/contact-us',
    element: <ContactUs />,
    title: 'nous contactez',
    status: false,
  },
  {
    id: 6,
    path: '/sign-in',
    element: <SignIn />,
    title: 'se connecter',
    status: true,
  },
  {
    id: 7,
    path: '/sign-up',
    element: <SignUp />,
    title: 's\'inscrire',
    status: true,
  },
  {
    id: 8,
    path: '/createUser',
    element: <CreateUser />,
    title: 'Créer utililsateur',
    status: true,
  },
  {
    id: 9,
    path: '/user/:id',
    element: <ModifyUser />,
    title: 'Modifier utililsateur',
    status: true,
  },
  {
    id: 10,
    path: '/createTournoi',
    element: <CreateTournoi />,
    title: 'Créer un tournoi',
    status: true,
  },
  {
    id: 11,
    path: '/tournoi/:id',
    element: <ModifyTournoi />,
    title: 'Modifier tournoi',
    status: true,
  },
  {
    id: 12,
    path: '/profil',
    element: <Profil />,
    title: 'Modifier profil user',
    status: true,
  },
]

export default routes
