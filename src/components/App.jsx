import React from "react";
import { moviesData } from "../moviesData";
import MovieTabs from './MovieTabs'
import MovieItem from "./MovieItem";
import {API_URL,API_KEY_3,API_KEY_4} from './api'
import Pages from './Pages'
// UI = fn(state, props)

// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      page:'',
      total_page:''
    };
  }

  deleteMovie = movie => {
    console.log(movie.id);
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);
    console.log(updateMovies);

    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  deleteMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };
componentDidMount(){
this.getMovies();
}
getMovies(){
  fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
  .then((response)=>{
    console.log(response)
    return response.json();
    
  })
  .then((data)=>{
    console.log(data)
    console.log(data.results)
    this.setState({movies:data.results,page:data.page,total_page:data.total_pages})
console.log(this.state)
  })
}
componentDidUpdate(prevProps,prevState){
console.log('didupdate');
console.log(prevProps,prevState)
console.log(this.props,this.state);
if(prevState.sort_by!==this.state.sort_by){
  this.getMovies();
}

}
updateSortBy = value =>{
  this.setState({sort_by:value})
  
}

  render() {
    console.log("render", this);
    return (

      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
            <MovieTabs sort_by={this.state.sort_by}
            updateSortBy={this.updateSortBy}/>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      data={movie}
                      deleteMovie={this.deleteMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <p>pagination: {this.state.page}</p>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Pages pages={this.state.page} total_page={this.state.total_page} updatePage={this.updatePage}/>
        </div>
      </div>
    );
  }
}

export default App;
