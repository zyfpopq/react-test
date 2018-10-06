import {
    reqCaptcha,
    reqCategory,
    reqGeohash,
    reqLoginPwd,
    reqLoginSms,
    reqSearchShops,
    reqSendSms,
    reqShop,
    reqUserInfo
} from '../api/index'

import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
} from './action-types'

//成功获取地址的同步action
const receiveAddress = (address) => ({type:RECEIVE_ADDRESS,data:address})
//获取分类列表的同步action
const receiveCategorys = (categorys) => ({type: RECEIVE_CATEGORYS,data:categorys})
//获取地址信息的actions
export const getAddress = (geohash) =>{
    return async dispatch => {
        const response = await reqGeohash(geohash)
        const result = response.data
        if (result.code===0){
            dispatch(receiveAddress(result.data))
        }
    }
}
//获取分类列表信息的action
export const getCategorys = () => {
    return async dispatch =>{
        const response = await reqCategory()
        console.log("分类列表",response.data)
        const result = response.data
        if (result.code===0){
            dispatch(receiveCategorys(result.data))
        }
    }
}

