import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Series from '../../containers/Series'
import SingleSeries from '../../containers/SingleSeries'
import Schedule from '../../containers/Schedule'

const  Main = props => (
    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path = "/series/:id" component={SingleSeries}/>
        <Route path = "/schedule" component={Schedule} />
    </Switch>
)

export default Main;