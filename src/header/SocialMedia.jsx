import React, { Component } from 'react';
import Facebook from 'react-icons/lib/fa/facebook-square';

export default class SocialMedia extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className={this.props.styleName}>
					<a href="#" target="_blank"><Facebook className={this.props.mediaClass}/></a>
				</div>
			</div>
		);
	}
}
