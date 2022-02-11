import React from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Discover = React.lazy(() => import('views/discover'))
const NotFound = React.lazy(() => import('views/not-found'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" replace={true} />
  },
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
