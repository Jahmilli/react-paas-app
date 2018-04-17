import React, { Component } from 'react';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Instagram from 'react-icons/lib/fa/instagram';

export default class SocialMedia extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className={this.props.styleName}>
					<a href="https://www.facebook.com/Prof.AeronauticsAndAstronauticsUTS/" target="_blank"><Facebook className={this.props.mediaClass}/></a>
					<a href="#" target="_blank"><Instagram className={this.props.mediaClass}/></a>
				</div>
			</div>
		);
	}
}
