import React, { memo, Suspense } from 'react'
import { HashRouter, useRoutes, Navigate, Routes, Route } from 'react-router-dom'

import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const Router = memo(() => {
  const element = useRoutes(routes)
  return element
})

const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      <div className="container">
        <Suspense fallback={<div>app loading</div>}>
          <Router></Router>
        </Suspense>
      </div>
      <AppFooter></AppFooter>
    </HashRouter>
  )
})
export default App
