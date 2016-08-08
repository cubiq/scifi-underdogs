import React from 'react'
import MovieList from '../components/MovieList'
import Header from '../components/Header'

class Home extends React.Component {
	render () {
		return (
			<section>
				<Header />
				<MovieList />
			</section>
		);
	}
}

export default Home