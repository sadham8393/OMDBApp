import React, {Component} from 'react';
import Header from './components/Nav';
import { connect } from 'react-redux';
import MovieList from './components/Movies/MovieList';
import * as actions from './actions/moviesAction';
import Alert from './components/Common/Alert';
import Loader from './components/Common/Loader';
import Pagination from './components/Common/Pagination';

class App extends Component  {
  constructor(){
    super();
    this.state = {
      initialLoading : true,
      moviesList :{},
      movies : [],
      searchterm : "",
      currentPage : 1,
      pageCount : 0,
      totalCount :0,
      message : "",
      alertClass : "hide",
      isLoading : false    
    }
  }
  componentDidMount(){
    this.props.getTrendingList(1);
  }
  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let moviesList = nextProps.moviesList,
        totalResults = nextProps.totalResults,
        infoMessage = nextProps.info,
        errorMessage = nextProps.error,
        successMessage = nextProps.success,
        isLoading = nextProps.isLoading;
    if(isLoading){
      return {
        isLoading : isLoading
      };
    }
    if(infoMessage){
      return {
        moviesList : {},
        movies : [], 
        pageCount : 0,
        currentPage : 1, 
        totalCount : totalResults,
        message : infoMessage, alertClass : "show info", isLoading : false
      }
    } 
    if(errorMessage) {
      return {
        moviesList : {},
        movies : [], 
        pageCount : 0,
        currentPage : 1, 
        totalCount : totalResults,
        message : errorMessage, alertClass : "show error", isLoading : false
      }
    }

    if(moviesList) {
      return {
        moviesList : moviesList,
        movies : Array.isArray(moviesList) ? moviesList : [moviesList],
        pageCount : Math.ceil(totalResults/10),
        totalCount : totalResults,
        isLoading : false,
        message : successMessage ? successMessage : "" , 
        alertClass : successMessage ? "show success" : "hide"
      };
    }
    
    return prevState;
  }

  handleChange = (e) => {
    let input = e.target.value;
    this.setState({[e.target.name] : input, currentPage : 1});
  }

  handleSearch = (e) => {
    e.preventDefault();
    let { searchterm } = this.state;
    this.props.getMoviesList({searchterm, pageNumber : 1 });

  }

  renderLoader = () => {
    if(this.state.isLoading){
      return (
        <Loader />
      )
    }
  }

  closeAlert = () => {
    this.props.resetResponse();
    this.setState({alertClass : "hide"})
  }

  renderPagination = (totalPages) => {
    if(totalPages > 1){
      return (
        <Pagination totalCount = {parseInt(this.state.totalCount)} pages = {totalPages} nextPage = {this.nextPage} currentPage = {this.state.currentPage}/>
      )
    }
  }

  nextPage = (pageNumber) => {
    this.closeAlert();
    let {searchterm } = this.state;
    this.setState({ currentPage : pageNumber});
    this.props.getMoviesList({ searchterm, pageNumber });
  }

  render() {
    let totalPages = this.state.pageCount,
          alertMessage = this.state.message;
    return (
      <div className = "home-container">
          {this.renderLoader()}
          <Header handleChange = {this.handleChange} handleSearch ={this.handleSearch}/>   
          <Alert alertClass = {this.state.alertClass} alertClose = {this.closeAlert} alertMessage = {alertMessage}/>  
          {this.renderPagination(totalPages)}
          <MovieList movies = {this.state.movies} />    
          {this.renderPagination(totalPages)} 
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  moviesList : state.movies.moviesList,
  info : state.movies.info,
  error : state.movies.error,
  success : state.movies.success,
  isLoading : state.movies.isLoading,
  totalResults : state.movies.totalResults
})

export default connect(mapStateToProps,actions)(App);