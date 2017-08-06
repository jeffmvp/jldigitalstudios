import React from 'react';
import {Link} from 'react-router';
import '../css/header';

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
	animateAndScroll(e) {
		$('html, body').animate({
			scrollTop: $(e.target.id).offset().top
		}, 1000);
	}

	render() {
		return(
			<div>
				<div className="Header">
					<div className="Header-container">
						<div class="grid">
							<div className="grid_col grid_col--5-of-5">
								<ul>
									<Link to="/">Home</Link>
									<a id="#travel" onClick={this.animateAndScroll} className="btn btn-primary btn-space-col btn-large-size">Services</a>
									<a id="#manager" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Industries</a>
									<a id="#host" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Contact</a>
								</ul>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
