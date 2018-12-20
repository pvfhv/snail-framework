/**
 * Created by anchao on 2016/6/29.
 */
import { createAction } from 'redux-actions'
import * as actionTypes from './actionTypes'

export const showLoading = createAction(actionTypes.SHOWLOADING_COMMON)
export const hideLoading = createAction(actionTypes.HIDELOADING_COMMON)
