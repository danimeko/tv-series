import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'
import Loading from '../../components/Loader';
import './index.css'

const API = 'http://api.tvmaze.com/shows'; 

class Shows extends Component {
    constructor(props){
        super(props);
        this.state = {
            shows : [],
            isLoading : false
        }
    }

    componentDidMount(){
        this.setState({
            isLoading : true
        })
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({
            shows : data,
            isLoading : false
        }))
    }

    render(){
        const {shows ,isLoading} = this.state 
        return(
           
              <div class="container">
               {isLoading ? <Loading/> : shows.map(show => 
                    <div class="item" key={show.id } >
                        <Image class='ui small' rounded src={show.image.medium} />
                    </div>)}
              </div>
          
            
        )
    }
}

export default Shows