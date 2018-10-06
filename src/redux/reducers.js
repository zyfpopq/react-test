import {combineReducers} from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
} from './action-types'

const userAddress = {
        address: "",
        city: "",
        geohash: "",
        latitude: "",
        longitude: "",
        name: "",
    }

function useraddress(state=userAddress,action) {
    switch (action.type) {
        case RECEIVE_ADDRESS://成功获取地址
            const {address,city,geohash,latitude,longitude,name} = action.data
            return {
                address
            }
        default:
            return state
    }
    return state
}
const categorys=[]
function indexcategorys(state=categorys,action) {
    switch (action.type) {
        case RECEIVE_CATEGORYS:
            return action.data
        default:
            return state
    }
    return state
}

export default combineReducers({
    useraddress,
    indexcategorys
})
