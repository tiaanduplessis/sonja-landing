import './style';
import { Component } from 'preact';
import Helmet from 'preact-helmet'

export default class App extends Component {
	render() {
		return (
			<div class="page-container">
				<Helmet
				htmlAttributes={{lang: "en"}}
				title="Sonja Engelke | Teacher"
				meta={[
                    {name: "description", content: "Sonja Engelke. Teacher."},
                ]}
				script={[{src: 'https://cdn.polyfill.io/v2/polyfill.min.js'}]}
				link={[{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans'},
						{rel: 'stylesheet', href: 'https://unpkg.com/nanoreset/nanoreset.min.css'}
				]}
				/>
				<img class="profile-img" src="http://lorempixel.com/400/400/cats/" />
				<h1 class="profile-title">Sonja Engelke</h1>
				<p class="profile-role">Teacher</p>
				<section class="social-link-container">
					<a href="">
						<img class="social-link-icon" src="assets/icons/mail.svg" alt="email"/>
					</a>
					<a href="">
						<img class="social-link-icon" src="assets/icons/linkedin.svg" alt="linkedin"/>
					</a>
					<a>
						<img class="social-link-icon" src="assets/icons/file.svg" alt="cv"/>
					</a>
				</section>
			</div>
		);
	}
}
