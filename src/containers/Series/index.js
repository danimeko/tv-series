import React , {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loading from '../../components/Loader';
import './index.css'

class Series extends Component{
    state = {
        series : [],
        seriesName : '',
        isFetching : false
      }
    
    componentDidMount(){
 
    }
    
    onSeriesInputChange = e => {
        this.setState({seriesName : e.target.value , isFetching : true});
        let url = `http://api.tvmaze.com/search/shows?q=${e.target.value}`;
        fetch(url)
          .then((response)=>response.json())
          .then(json => { this.setState({ series: json , isFetching : false })});

    }

    render (){
        const {series ,seriesName , isFetching} = this.state;

        return(
        <div>
             
            <div className="search">
                <input 
                    placeholder ="Please enter series name"
                    value = {seriesName}
                    type="text" 
                    onChange ={this.onSeriesInputChange} />
            </div> 

            {
               !isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No series have been found with this name </p>
            }
            {
                isFetching && <Loading/>
            }
            {
                !isFetching && <SeriesList list = {this.state.series} />
            }
              
        </div>)
    }
}

export default Series;