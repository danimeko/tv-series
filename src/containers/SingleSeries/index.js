import  React , {Component} from 'react'
import Loading from '../../components/Loader'

class SingleSeries extends Component {
    state ={
        show : null
    }

    componentDidMount (){
        const {id} = this.props.match.params;
        const  url = `https://api.tvmaze.com/shows/${id}?embed=episodes`;
        fetch(url)
          .then((response)=>response.json())
          .then(json => { this.setState({ show: json })});
    }
   

    render () {
        
        const { show } = this.state;
        console.log(show);
        return (
            <div>
                {
                    show === null && <Loading/>
                }
                {
                    show !== null 
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>
                            <img alt="Show" src={show.image.medium} />
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;