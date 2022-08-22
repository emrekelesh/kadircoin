import React from 'react'
import { Route, Routes} from 'react-router-dom'

import Home from './modules/Home'

export default () => <Routes>
  <Route index element={<Home/>}/>
</Routes>