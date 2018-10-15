import React , {Component} from 'react';
import '../Schedule/index.css';
import Loading from '../../components/Loader';

const country = require('../Schedule/country.js');

// const divStyle = {
//     color: 'black',
//   };
  
//   function HelloWorldComponent(prop) {
//     return <div>
//         <p className="text-left"> 
//             Summery
//         </p>
//         <div className="col text-justify" style={divStyle} dangerouslySetInnerHTML={prop} />
//     </div>
//   }
  

function SeriesGrid(props){
    return (
        
        <ul className="movie-container">
                            { 
                            props.shows.map((show) =>( 
                                     <li key = {show.id} className="movie">
                                        <div className="" >
                                            <div className="">  
                                                <div className="col" >
                                                     <img className="responsive " 
                                                        alt=""  src={show.image} />  
                                                    <h1>{show.show.name}</h1>
                                                </div>
                                                <div className="col">  
                                                    <h5 className="text-uppercase">{//show.show.name
                                                        }</h5>
                                                    {//HelloWorldComponent({__html: show.summary})
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                   
                                ))
                            }
                        </ul>
    )
}


class Schedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            shows : [],
            isFetching : false,
            country : 'US',
            date : this.todate(),
            hasError: false,
        }

        this.countryUpdate = this.countryUpdate.bind(this);
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        
      }

    componentDidMount(){
        let {country , date} = this.state;
        

        this.fetchSeries(country , date);
    }


    fetchSeries = (country , date) => {
        this.setState({isFetching : true});
        let url =`http://api.tvmaze.com/schedule?country=${country}&date=${date}`;
        console.log(url);
        fetch(url)
        .then(responce => responce.json())
        .then(json => {
                this.setState({shows : json , isFetching : false})}
                )
        .catch(error => console.log(error))
    }

    todate (){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1 ;
        let yyyy = today.getFullYear();

        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;

        return (yyyy + '-' + mm + '-' + dd);
    }

    countryUpdate =(e) => {
        
        e.preventDefault();
        const co = e.target.value;

        this.setState( {
            country : co
        });
       this.fetchSeries(co, this.date)
    }

    SelectCountry(){
        let listArr = Object.entries(country.country);
        return(
            <select onChange={this.countryUpdate}>
                {
                    listArr.map(opt => (
                        <option key={opt[0]} value={opt[0]}>{opt[1]}</option>
                    ))
                }
            </select>
        )
    }

   
    render(){
       
        let showsList = this.state.shows;
        let listArr = Object.entries(country.country);
        console.log(listArr);

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
        return (
            <div className="">

            <select onChange={this.countryUpdate}>
                {
                    listArr.map(opt => (
                        <option key={opt[0]} value={opt[0]}>{opt[1]}</option>
                    ))
                }
            </select>
            
                { this.state.isFetching 
                    && <Loading /> 
                }
                
                { !this.state.isFetching 
                    && 
                    <SeriesGrid shows = {showsList}/>
                }
                {  this.state.shows.length === 0 
                    &&
                    <h1>sorry ,there is no information  </h1>
                    
                }
            </div>
            
        )
    }
}

export default Schedule;