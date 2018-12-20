/**
 * Created by Anchao on 2017/6/29.
 * 非业务底层无扩展封装
 */

// 公共js
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import pathToRegExp from 'path-to-regexp'
import { combineReducers } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {
    NavLink,
    Link,
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'
import { createSelector } from 'reselect'
import { AppContainer, hot } from 'react-hot-loader'
import moment from 'moment'
import PureComponent from './base/ReactComponentBase'
import Helper from './common'

const noop = function () {}

const EmptyComponent = () => null

export {
    axios,
    AppContainer,
    classNames,
    combineReducers,
    connect,
    createSelector,
    EmptyComponent,
    Helper,
    hot,
    Immutable,
    Link,
    moment,
    noop,
    NavLink,
    PropTypes,
    PureComponent,
    pathToRegExp,
    React,
    ReactDOM,
    Router,
    Route,
    Redirect,
    Switch,
    withRouter
}
