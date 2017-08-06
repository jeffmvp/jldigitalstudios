import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

  static propTypes = {
    showLoginModal: React.PropTypes.func.isRequired
  }

	constructor() {
		super();
	}

	showLoginModal = () => {
		this.props.showLoginModal(true);
	}

	render() {
		return(
			<div className="header">
				<Link to="/" className="headerItem logo">JL Digital Studios</Link>
				<nav className="headerItem navContainer">
					<div className="navItem">
						<Link className={location.pathname === "/" ? "selected" : ""} to="/about">Learn more</Link>
					</div>
					<div className="navItem">
						<a>Sign up</a>
					</div>
					<div className="navItem">
						<a onClick={this.showLoginModal}>Log in</a>
					</div>
				</nav>
			</div>
		)
	}
}
