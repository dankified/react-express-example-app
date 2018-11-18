import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import About from './components/About';
import './styles/global.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<header>
						<Link className='navlinks' to="/">Home  </Link>
						<Link className='navlinks' to="/about">About</Link>
					</header>
					<Route exact path="/" component={ App } />
					<Route path="/about" component={ About } />
				</div>
			</BrowserRouter>
		)
	}
}

render(<Root />, document.getElementById('root'));
