import React, { memo, Suspense } from 'react'
import { HashRouter, useRoutes, Navigate } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
const Discover = React.lazy(() => import('views/discover'))
const NotFound = React.lazy(() => import('views/not-found'))

const Router = memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: Navigate({
        to: '/discover',
        replace: true
      })
    },
    {
      path: '/discover',
      element: Discover
    },
    {
      path: '*',
      element: NotFound
    }
  ])
  return element
})

const App = memo(() => {
  return (
    <HashRouter>
      <header>header</header>
      <Suspense fallback={<div>loading</div>}>
        <Router></Router>
      </Suspense>
      <footer>footer</footer>
    </HashRouter>
  )
})

export default App
