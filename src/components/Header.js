import React from 'react'

const styles = {
	textAlign: "center"
}

class Header extends React.Component {
	render () {
		return (
			<header className="site_header">
				<h1 style={styles}>SCI-FI FLICKS YOU MIGHT HAVE MISSED</h1>
				<p style={styles}>Please <a href="https://github.com/cubiq/scifi-underdogs" target="_blank">help maintaining the list.</a></p>
				<p style={styles}>Accepted genres: sci-fi, fantasy, horror, mystery.</p>
			</header>
		);
	}
}

export default Header