import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from 'Components/App'

import configure from 'Store'
const store = configure()

import 'Styles'

render(
	<Provider store={store}>
		<App />
	</Provider>, $('#root')[0])

if (module.hot)
	module.hot.accept()