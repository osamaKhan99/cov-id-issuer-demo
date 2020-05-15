import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PreLoader from './components/Layout/PreLoader'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Issuer from './components/Issuer/Issuer'
import Login from './components/Auth/Login'
import Dashboard from './components/Dashboard'

function App() {
	return (
		<Router>
			<div className="App">
				<PreLoader />
				<Header />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/issue" component={Issuer} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
