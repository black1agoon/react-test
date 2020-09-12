import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Basic from './components/Basic'
import UrlParameters from './components/UrlParameters'

ReactDOM.render(
  <React.StrictMode>
    {/*<Basic />*/}
    <UrlParameters />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
