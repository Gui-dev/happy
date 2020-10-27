import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing } from './../pages/Landing'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landing }/>
      </Switch>
    </BrowserRouter>
  )
}
