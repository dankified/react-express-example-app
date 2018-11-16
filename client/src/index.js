//Import dependencies
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import About from './components/About';
import './styles/global.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<header>
						<Link to="/">Home  </Link>
						<Link to="/about">  About</Link>
					</header>
					<Route exact path="/" component={ App } />
					<Route path="/about" component={ About } />
				</div>
			</BrowserRouter>
		)
	}
}

render(<Root />, document.getElementById('root'));

let j = "josh"
