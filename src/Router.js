import Layout from 'Layout'
import routes from 'Routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/**
 * Router component for defining routes using React Router.
 * @returns {JSX.Element} - JSX element representing the router.
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Map through routes and render Route components for each active route */}
          {routes.map(
            (route) =>
              route.status && <Route key={route.id} path={route.path} element={route.element} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
