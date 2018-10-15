import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Series from '../../containers/Series'
import SingleSeries from '../../containers/SingleSeries'
import Schedule from '../../containers/Schedule'
import Shows from '../../components/Shows'

const  Main = props => (
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route exact path = "/series/:id" component={SingleSeries}/>
        <Route exact path = "/shows" component={Shows}/>
    </Switch>
)

export default Main;
