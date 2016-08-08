import React 			from 'react'
import Movies 			from '../database'
import IconButton		from 'material-ui/IconButton'
import IconOpenInNew	from 'material-ui/svg-icons/action/open-in-new'	
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'	
import {Table, 
		TableBody, 
		TableHeader, 
		TableHeaderColumn, 
		TableRow, 
		TableRowColumn} 	from 'material-ui/Table';

class MovieList extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			movies: Movies.movies,
			multiSelectable: false,
			selectable: false,
			multiSelectable: false,
			showCheckboxes: false
		}
	}

	render () {
		return (
			<MuiThemeProvider>
				<Table>
					<TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
						<TableRow>
							<TableHeaderColumn>Title</TableHeaderColumn>
							<TableHeaderColumn>Year</TableHeaderColumn>
							<TableHeaderColumn>Description</TableHeaderColumn>
							<TableHeaderColumn>Imdb</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={this.state.showCheckboxes}>
						{this.state.movies.map(function(movie){
							return (
								<TableRow>
									<TableRowColumn>{movie.title}</TableRowColumn>
									<TableRowColumn>{movie.year}</TableRowColumn>
									<TableRowColumn>{movie.description}</TableRowColumn>
									<TableRowColumn>
										<IconButton href={movie.imdb} touch={false} target="_blank">
											<IconOpenInNew />
										</IconButton>
									</TableRowColumn>
								</TableRow>
							);	
						})}
					</TableBody>
				</Table>
			</MuiThemeProvider>
		);
	}
}

export default MovieList