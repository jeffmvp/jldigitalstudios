import React from 'react';
import {Link} from 'react-router'
import '../css/grid';
import '../css/hero';
import '../css/landingPage';

export default class extends React.Component {
	constructor() {
		super();
		var placeholder = require('../static/img/placeholder.jpg');

		this.state = {
			content: [
			{
				id: 'travel',
				title: 'Services',
				steps: [ 
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			},
			{
				id: 'manager',
				title: 'Industries',
				steps: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			},		
			{
				id: 'host',
				title: 'Contact',
				steps: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			}
			]
		};
	}

	animateAndScroll(e) {
		$('html, body').animate({
			scrollTop: $(e.target.id).offset().top
		}, 1000);
	}

	renderSteps(i) {
		var path = "../static/img/";
		var steps = [];
		for (var j=0; j<3; j++) {
			var step = this.state.content[i].steps[j];
			steps.push((
			<div key={j} className="grid-item-1">
				<div className="grid">
					<div className="grid-row-item-row-center">
						<img className="image-description" src={step.img}></img>
						<div className="title-description">{step.title}</div>
						<div className="description">{step.description}</div>
					</div>
				</div>
			</div>));
		}
		return steps;
	}

	renderHelpSections() {
		var sectionDivs = [];
		for (var i=0; i<this.state.content.length; i++) {
			var isEven = i % 2 == 0 ? true:false;
			sectionDivs.push((
				<div key={i} id={this.state.content[i].id} className={"grid-row-item-row section-header " + (isEven ? 'event': 'odd')}>
					<div className="grid-item subtitle">{this.state.content[i].title}</div>
					<div className="grid">
						<div className="grid-row-item-col">
							{this.renderSteps(i)}
						</div>
					</div>
				</div>
				)
			)
		}

		return (
			sectionDivs
		)
	}

	render() {
		return (
			<div className="main">
				<div className="Hero">
					<div className="Hero-container">
						<div className="grid">
							<div className="grid__col grid__col--3-of-5">
								<h2>JL Digital Solutions </h2>
								<h1>Design, Build, Maintain</h1>
								<div className="grid-row-item-row title-row">
									<p className="grid-item title">We help businesses reach their goals in the digital marketspace by offering competitive pricing, quick turn arounds, and quality results. </p>
									<p className="grid-item slogan">International and local clients alike have found our craftsmanship well suited for their growing needs as a business. We have ever growing experience in fields relating to insurance, real estate, restaurants, ecommerce, and many others.</p>
								</div>
								<div className="grid-row-item-col button-row">
									<a id="#travel" onClick={this.animateAndScroll} className="btn btn-primary btn-space-col btn-large-size">Services</a>
									<a id="#manager" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Industries</a>
									<a id="#host" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Contact</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				{this.renderHelpSections()}
				<div className="grid-row-item-col subfooter">
					<div className="grid-item"><Link to="/about">About Us</Link></div>
					<div className="grid-item"><Link to="/help">Help</Link></div>
					<div className="grid-item"><Link to="/terms">Terms and Privacy</Link></div>
				</div>
				<div className="grid-row-item-row footer">
					<div className="grid-item">Copyright @yourcompany {new Date().getFullYear()}</div>
				</div>
			</div>
		)
	}
}
