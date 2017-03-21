import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'

export default <Route path="/real-world" component={App}>
  <Route path="/real-world/:login/:name"
         component={RepoPage} />
  <Route path="/real-world/:login"
         component={UserPage} />
</Route>
