import React, { Suspense, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { checkUserSession } from './storeModules/auth/authActions'
import Spinner from './components/Shared/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Helmet } from 'react-helmet'

import './App.css'
import Header from './components/Layout/Header/Header'
import { userSelector } from './storeModules/auth/authSelectors'

const Routes = React.lazy(() => import('./routes/routes'))

const App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <title>E-commerce</title>
              <link rel="canonical" href="http://github.com/AleksK1NG" />
            </Helmet>
            <Header />
            <Switch>
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </ErrorBoundary>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </Suspense>
    </Fragment>
  )
}

export default connect(
  null,
  { checkUserSession }
)(App)
