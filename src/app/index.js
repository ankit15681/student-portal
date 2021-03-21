import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { CollegeList, StudentList } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ChartJs} from '../pages/ChartJs'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/colleges/list" exact component={CollegeList} />
                <Route path="/students/list" exact component={StudentList} />
                <Route path="/chart" exact component={ChartJs} />

                {/* <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                /> */}
            </Switch>
        </Router>
    )
}

export default App