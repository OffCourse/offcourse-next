import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "../components";
import { CoursesContainer } from "../containers";
import {
    Route
} from 'react-router-dom'

export default class CollectionView extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={CoursesContainer} />
                <Route exact path="/curator/:curator" component={CoursesContainer} />
                <Route exact path="/tag/:tag" component={CoursesContainer} />
            </Fragment>
        )
    }
}
