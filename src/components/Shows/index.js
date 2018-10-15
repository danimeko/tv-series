import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'
import Loading from '../../components/Loader';
import './index.css'
import {join , split} from 'lodash'

const API = 'https://api.tvmaze.com/shows'; 

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

    showImage( show ){
        console.log(show.image.medium);
        const cha = split(show.image.medium , ':');
        cha[0]="https";
        const url = join(cha, ":")
        return url ;
        
    }

    render(){
        const {shows ,isLoading} = this.state 
        return(
           
              <div className="container">
               {isLoading ? <Loading/> : shows.map(show => 
                    <div className="item" key={show.id } >
                        <Image className='ui small' rounded src={this.showImage(show)} />
                    </div>)}
              </div>
          
            
        )
    }
}

export default Shows