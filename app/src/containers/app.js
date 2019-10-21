import React, {Component} from 'react';
import {connect} from 'react-redux';
import {movieslist, deirectorslist} from '../actions';
import {bindActionCreators} from 'redux';
import MoviesList from '../components/moviesList';

class App extends Component{

    componentDidMount(){
        this.props.movieslist();
        this.props.deirectorslist();
    }    

    render(){
        console.log(this.props);
        return(
            <div>
            <MoviesList {...this.props}></MoviesList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({movieslist, deirectorslist},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);