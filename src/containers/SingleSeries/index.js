import  React , {Component} from 'react'
import Loading from '../../components/Loader'
import {join , split} from 'lodash'

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

    showImage( show ){
        console.log(show.image.medium);
        const cha = split(show.image.medium , ':');
        cha[0]="https";
        const url = join(cha, ":")
        return url ;
        
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
                            <img alt="Show" src={this.showImage(show)} />
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;