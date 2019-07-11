/**
 * Constants
 * */
import { appName } from '../../config'

export const moduleName = 'shop'
const prefix = `${appName}/${moduleName}`

export const FETCH_COLLECTIONS_REQUEST = `${prefix}/FETCH_COLLECTIONS_REQUEST`
export const FETCH_COLLECTIONS_SUCCESS = `${prefix}/FETCH_COLLECTIONS_SUCCESS`
export const FETCH_COLLECTIONS_ERROR = `${prefix}/FETCH_COLLECTIONS_ERROR`

export const STRIPE_PAYMENT_REQUEST = `${prefix}/STRIPE_PAYMENT_REQUEST`
export const STRIPE_PAYMENT_SUCCESS = `${prefix}/STRIPE_PAYMENT_SUCCESS`
export const STRIPE_PAYMENT_ERROR = `${prefix}/STRIPE_PAYMENT_ERROR`
